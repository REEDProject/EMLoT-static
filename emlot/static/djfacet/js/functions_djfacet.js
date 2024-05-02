/* creator: michelepasin */

jQuery.fn.simple_blink = function() {
	return this.fadeOut("fast").fadeIn("slow");
};

jQuery.fn.add_loading_icon = function() {
	loadingData = "<img src='/static/paul/i/g.gif' alt='loading data' />"
	return this.empty().append(loadingData);
	
	// on LTB:SERVER ==> 
	// loadingData = "<img src='/static/paul/i/g.gif' alt='loading data' />
};



// non-case sensitive contains method for jQuery
// http://stackoverflow.com/questions/187537/is-there-a-case-insensitive-jquery-contains-selector
jQuery.expr[':'].Contains = function(a,i,m){
     return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase())>=0;
};



///////////
// EXAMPLES for THE FILTERING MECHANISM FOR INNER FACETVALUES

//   $("div.peoplegroup__surname li:Contains('a')").css({"display":"none"});
//   $("div.peoplegroup__surname li:not(:Contains('ada'))").css({"display":"none"});
// to display them all again:
//  $("div.peoplegroup__surname li").css({"display":"block"});

////////////


// filters the contents of a facet: function run each time we update the facetValues
function activate_filtering(){
	$(".filterfieldset").submit(function(){
		var txt = $(this).children("input").attr('value');		
		$(this).next().children('ul').children().css({"display":"block"});		
		$(this).next().children('ul').children(":not(:Contains('" + txt + "'))").css({"display":"none"});

		// alert(txt);
		return false;
		});
}

// 
// 
// function activate_treefiltering(){
// 	$(".filterfieldset").submit(function(){
// 		var txt = $(this).children("input").attr('value');		
// 		$(this).next().children().children().css({"display":"block"});		
// 		$(this).next().children().children(":not(:Contains('" + txt + "'))").css({"display":"none"});
// 
// 		// alert(txt);
// 		return false;
// 		});
// }





function disable_UI(message, id_location, color){
	if (!id_location) var id_location = "#cs";  // the main DIV
	if (!color) var color = "#2B3856";
	// if (!message) var message = "processing query.... <br /><br /><img src='/static/paul/i/g.gif' alt='loading data' />"
	if (!message) var message = "processing query...."
	$("#blockUImessage1").empty().append(message);
	$(id_location).block({ 	message: $('#blockUImessage1'), 
						   	css: { padding: '10px', fontsize: '5px'}, 
							overlayCSS : {opacity: '.3', filter:'alpha(opacity=30)', backgroundColor : color }  //backgroundColor : '#2B3856'
						}); 
}

function enable_UI(id_location){
	if (!id_location) var id_location = "#cs"; 
	$(id_location).unblock(); 
}






function isFacetedCountActive() {
	return true;
	// MAYBE NOT NEEDED ANYMORE....
	// var test = $("#refresh_facets").attr('value');
	// if (test == 'True') {
	// 	return true;
	// }
	// else {
	// 	return false;
	// }
}




// TIME= the delay time   -- FLAG= whether 'updateFacetValues' should Disable the UI too...
function delayUpdateFacetValues(time, flag) {
	if (!time) var time = 400;
	if (!flag) var flag = false;

	// this is a hidden field that contains a Flag (set at initial loading time) indicating whether refresh is automatic
	if (isFacetedCountActive()) {
		// hack for IE
		var myfun = function() { updateFacetValues(flag); };
		setTimeout(myfun, time);
	}  else {
		enable_UI();
	}
		
}



// toggleClass("highlight");

// 2010-07-22: refreshes the facet values available..
// flag is used to determine whether the update is run by itself, or after updating the result list 
// in the first case, we need to block the screen; in the second one, that is managed in 'ajax_update1'
function updateFacetValues(flag) {
	var activefacet = $("#accordion h5.ui-state-active").parent(); // the <LI> element
	var is_tree_facet = $("#accordion h5.ui-state-active").parent().hasClass('istreefacet')
	var activefacetid = $("#accordion h5.ui-state-active").parent().attr('id'); // the unique ID
	var divelement = $("#accordion h5.ui-state-active").next(); // where the list is contained
	var rec_num = $("#rec_num").text();
	var active_ordering = $("#active_ordering").val();
	// http://stackoverflow.com/questions/2308134/trim-in-javascript-not-working-in-ie
	active_ordering =  $.trim(active_ordering);
	
	if (activefacetid && !(activefacet.hasClass("values_are_updated"))) {		
		activefacet.addClass("values_are_updated");  // so that it doesn't get reloaded unless necessary
				
		if (flag) {
			$(divelement).add_loading_icon();
			// var message = "updating facets.... <br /><br /><img src='/static/paul/i/g.gif' alt='loading data' />"		
			var message = "updating facets...."		
			disable_UI(message);
		}

		var list_ids = new Array();
		$("#active_filters li").each( function(index) {
			list_ids.push(this.id);
		});

		$.get('update_facet',
			 { activefacet: activefacetid, totitems : rec_num , active_filters: list_ids, ordering: active_ordering},
				  function(data){
						$(divelement).empty().append(data); 
						
						activate_filtering();  //prepares the filter box 
						
						if (is_tree_facet) {   // 2010-11-12
							$("#tree_" + activefacetid).treeview({
									// url: "source.php",
									animated: "fast",
									collapsed: true,
									control: "#treecontrol_" + activefacetid
									});
								} 
												
						if (flag) {
							enable_UI();
							}				
				  }
	   );					
	}   
	else {
		// alert("here");
		// enable_UI();
	}	
}




// needed to give the right color (matching ones in facet list) to active filters

function colorize_activeFilters() {
	$("#active_filters li").each(function (i) {
		var c = $(this).attr('class');  // eg 'documentgroup'
		var newclass = $("#" + c).parent().attr('class'); // eg "u m0 ui-accordion-li-fix"
		var choices = ['m0' ,'m1', 'm2' ,'m3', 'm4' , 'm5'];
		for (x in choices) {
			if (newclass.search(choices[x]) >= 0) {
				$(this).addClass(choices[x]);
				// alert(x)
			}
		} 
	});
}





// when we switch result type we get the new url and change the window location
// if some filters are selected, we prompt the user for more information

function switch_restype(linkTarget) {
	
	if ($("#active_filters").length) {	 // if some filters are selected, get their text	
		var text = "";
		$("#active_filters strong").each(function(){
		  text += "\"" + $(this).html() + "\", ";
		});		
		text = text.substring(0, text.length-2); // remove the last comma
		
		if (confirm("You have some filters selected:\n" + text + "\n\nDo you wish to apply them to the new result type?\n\nClicking OK will switch result type and APPLY the active filters immediately.\n\nClicking CANCEL will switch result type and REMOVE all currently selected filters.\n")) { 
		 // pass the new url containing the filters
			disable_UI("Reloading and applying currenlty selected filters ...", "#gw");
			window.location = linkTarget;
		} else {
			// pass the new url only with resType [it's always at the start of a url]
			linkTarget = linkTarget.substring(0, linkTarget.indexOf("&"))
			disable_UI("Reloading...", "#gw");
			window.location = linkTarget;
		}
	} else {
		// if no active filters present..
		disable_UI("Reloading...", "#gw");
		window.location = linkTarget;
	}
	


}



function what_result_type(){
	// return $("li.ui-state-active").attr('id');
	return $("#inf-space-type input:checked").attr("id")	
}




// fun used to select all workspace checkboxes
function checkUncheckAll() {
	if ($(".workspace_checkbox").attr('checked')) {
		$(".workspace_checkbox").attr('checked', false);
	}
	else {
		$(".workspace_checkbox").attr('checked', true);
	}	
	
}





function addToWorkspace() {
	var resulttype = what_result_type();
	// var searchstring  = "#results_" + resulttype + " input.workspace_checkbox:checked"
	var searchstring  = "#results input.workspace_checkbox:checked"
	var n = $(searchstring).length;
	if (n > 0) {
		var allVals = [];
		$(searchstring).each(function() {
			allVals.push($(this).val());
		});
		var items = allVals.join(" ")
		$.get("/workspace/items/add",
			 { basic_search_type : resulttype, items: items },
				function(data){
					// alert("Records added to the workspace: " + n + " [debug: ID= " + allVals + " ]");
					var answer = confirm("Records added to the workspace: " + n + " \
					\nDo you want to go to your Workspace page now?");
					if (answer) {
						// do the call to the back end with the ID
						window.location = "/workspace/items/?basic_search_type=" + resulttype;
					} else {
						return null;
					}
				});
		
	} else {
		alert("No records are selected!");
	}
	
	$("#addtoworkspace").simple_blink();
}






















// 
// ##################
// #  Thu May  5 12:33:36 BST 2011
// #  OLD STUFF YET NOT CHECKED BEGINS HERE
// #
// ##################











// 
// 
// function add_onclick_events() {
// 	$("div.valueslist a:not(.treecontroller)").click(function () { 
//       var id = $(this).attr('id'); 
// 	  
// 	  facetvalue_sel(id);
//     });
// }
// 
// 
// 
// 
// 
// // onClick="facetvalue_sel('{{facetgroup.name}}_{{facetvalue.id}}"
// 
// 
// 
// 
// 
// 
// function make_nextelement_collapsable(element) {
// 	"wrapper for the convenient toggle function"
// 	
// 	$(element).toggle(
// 		  function () {
// 			$(this).next().slideUp("slow");
// 		  }, 
// 		  function () {
// 			$(this).next().slideDown("slow");
// 		  }
// 		);
// 	
// }
// 
// function initialCap(string) {
//    string2 = string.substr(0, 1).toUpperCase() + string.substr(1);
//    return string2
// }
// 
// 
// 
// 
// 
// // CLOSES ALL LEFT-FACET GROUPS AND FACETS (if they are open..)
// function close_facetgroups() {
// 	var closed = false;
// 	$("#accordion h4.to_collapse").each(function (i) {
// 	        if (!$(this).next().hasClass("closed")) {
// 		        $(this).click();
// 				closed = true;
// 	        } 
// 	      });
// 	return closed;
// 	}
// 
// 
// // CLOSES ALL FACETS (facet groups remain open) [usually it's only one facet ]
// function close_facets() {
// 	var closed = false;
// 	$("#accordion h4.to_collapse").each(function (i) {
// 	        if (!$(this).next().hasClass("closed")) {
// 				el_to_find = $(this).next().find(".ui-state-active");
// 				if (el_to_find.length > 0) {
// 					// hack: gets you the index of open accordion [0.....n]
// 					n = $("#accordion h5").index($("#accordion h5.ui-state-active"));
// 					$('#accordion').accordion('activate', n); // closes the accordion...
// 					closed = true;
// 						}
// 	        } 
// 	      });
// 	return closed;
// 	}
// 	
// 
// 
// 
// 
// // ///////////////////////////////////////////////////
// 
// 
// //  THIS HTML SNIPPET NEEDS TO BE UPDATED MANUALLY!
// function empty_control_bar(){
// 	text = "<li class=\"m0\"> <h5 id=documentgroup class=\"no_facets\">Document: description</h5> &#8250; <small class=\"no_facets\">none</small> </li>      \
// 	 	<li class=\"m1\"> <h5 id=citationgroup class=\"no_facets\">Citation</h5> &#8250; <small class=\"no_facets\">none</small> </li>   \
// 	 	<li class=\"m2\"> <h5 id=peoplegroup class=\"no_facets\">Event &amp; Person</h5> &#8250; <small class=\"no_facets\">none</small> </li>    \
// 	 	<li class=\"m3\"> <h5 id=troupegroup class=\"no_facets\">Troupe &amp; Venue</h5> &#8250; <small class=\"no_facets\">none</small> </li>  \
// 	 	<li class=\"m4\"> <h5 id=datesgroup class=\"no_facets\">Dates</h5> &#8250; <small class=\"no_facets\">none</small> </li>  "
// 		
// 	$(".active_facets").empty();
// 	$(".active_facets").html(text);
// 	//  if you want to load everything...
// 	reset_results();
// 		
// }
// 
// 
// 
// function explain_results(){
// 	var resulttype = what_result_type();
// 	$("#blockUImessage2").load("explain_results?resulttype=" + resulttype);
// 	$("#cs").block({ 
// 	            	message: $('#blockUImessage2'), 
// 		            centerY: 0, 
// 	            	css: { padding: '10px', top: '10%', left: '', width: '50%', textAlign: 'left' } , 
// 					overlayCSS : {opacity: '.3', backgroundColor : '#2B3856'} 
// 	        		}); 
// 	$('.blockOverlay').attr('title','Click to unblock').click(function () { 
// 															      $("#cs").unblock(); 
// 															    });
// }
// 
// 
// 
// 
// 
// // called when a column header is clicked on to order the result list
// function change_ordering(ordering){
// 	old_ordering = $("#active_ordering").val();
// 	if (!(old_ordering == ordering)) {
// 		$("#active_ordering").val(ordering);
// 		reload_results(1, ordering)
// 	} else {  //the back end does the rest
// 		$("#active_ordering").val("-" + ordering);
// 		reload_results(1, "-" + ordering)
// 	}
// }
// 
// 
// 
// 
// 
// // resets all the flags used to determine whether to call the backend or not!
// function resetFacetFlags() {
// 	$("#accordion h5").each(function (i) {
// 		$(this).parent().removeClass("values_are_updated");
// 	});
// }
// 
// 
// 
// // function needed because we have three tabs now....
// function prepare_for_results(){
// 	res_type = what_result_type();
// 	// watch out if you use 'location' weird behaviours...
// 	html_location = "results_" + res_type;
// 	$("#" + html_location).add_loading_icon();
//     return html_location;
// }
// 
// 
// 
// // function called after removing all filters (it brings to the 'do you want to see all the results' dialog)
// function reset_results(){
// 	close_facetgroups(); // closes all open facets
// 	html_location = prepare_for_results();
// 	resetFacetFlags();  //we're removing all filters, so facetValues count needs being recalculated
// 	ajax_update1(html_location, "update_results", "reset",  "");
// }
// 
// 
// 
// // function called when changing ordering, page, or switching tabs
// function reload_results(page, ordering){
// 	if (!page) {
// 		var page = 1;  // if no page defaults to 1
// 		// close_facets(); // closed only in this case ==> removed cause it implicitly calls 'updateFacetValues', 
// 		// ..which then is called twice and messes up the disableUI flow.... 
// 		resetFacetFlags();  // facetValues count needs being recalculated only on page 1
// 		}   
// 		
// 	if (!ordering) var ordering = $("#active_ordering").val();
// 	
// 	html_location = prepare_for_results();	
// 	ajax_update1(html_location, "update_results", "reload",  "", page, ordering);
// }
// 
// 
// 
// // function called each time we switch results-tab
// function tab_changed(){
// 	var page = 1;  
// 	var ordering = $("#active_ordering").val();
// 		// close_facets(); // closed only in this case ==> removed cause it implicitly calls 'updateFacetValues', 
// 		// ..which then is called twice and messes up the disableUI flow.... 
// 	resetFacetFlags();
// 	html_location = prepare_for_results();
// 	ajax_tab_changed(html_location, "update_results", "reload",  "", page, ordering);
// }
// 
// 
// 
// function ajax_tab_changed(divname, ajaxcall, action, type_id, page, ordering) {
// 			
// 	var resulttype = what_result_type();	
// 	$("#rec_num").html("...");  // temporarily reset the number of results in brackets..
// 		  	
// 	disable_UI();
// 	
// 	$.get(ajaxcall,
// 		 { resulttype : resulttype, action: action, type_id: type_id, page: page, ordering: ordering},
// 			  function(data){
// 				 var mySplitResult = data.split("_*_*_");
// 				// hack for updating the number of results
// 				 $("#rec_num").html(mySplitResult[0]);
// 				 $("#" + divname).empty().append(mySplitResult[1]); 
// 
// 				// rerun onClick events transformation
// 				// fix_popups();
// 				
// 				enable_UI();				
// 				// closing the accordion makes triggers UI-unblock! 
// 				// so if we want to close the groups we need to do it now
// 				close_facetgroups(); 
// 				
// 			  }
//    		);  
// }
// 
// 
// 
// 
// 
// 
// 
// 
// 
// // fucntion that calls the backend bypassing the  'do you want to see all the results' dialog...
// // no need to resetFacetFlags()
// function all_results(page, ordering){
// 	if (!page) var page = 1;   // if no page defaults to 1
// 	if (!ordering) var ordering = $("#active_ordering").val();	
// 	html_location = prepare_for_results();
// 	ajax_update1(html_location, "update_results", "all",  "", page, ordering);
// 
// }
// 
// 
// 
// //  ============================================  
// 
// 
// 
// function facetvalue_sel(type_id){
// 	"actions to do when a facet value is clicked on eg: facetvalue_sel('termstenuregroup_32386928')"
// 	
// 	var item = $("a#" + type_id);	
// 	$(item).simple_blink();
// 
// 	var facet = $(item).attr("class");
// 	var group = type_id.split("_")[0]
// 	var newtype_id = "c_" + type_id;  // used as a new ID for the control bar item		
// 	var original_text = $(item).text();
// 	
// 	if (isFacetedCountActive()) {
// 		text = original_text.substring(0, original_text.lastIndexOf('('))  // remove the numbering, eg:'(5)'
// 	}
// 	else {
// 		text = original_text
// 	}	
// 	count = original_text.substring(original_text.lastIndexOf('(') + 1, original_text.lastIndexOf(')'))
// 	activecount = $("#rec_num").text();
// 	
// 	el_to_find = $(".active_facets li#" + newtype_id);	
// 	
// 	if (el_to_find.length == 0) {  	//  check if this hasn't been selected already 
// 
// 		if (count == activecount) {
// 			alert("All possible results (" + count + ") already displayed!");
// 		}
// 		else {
// 
// 		   var groupprettyname = $("h5#" +  group + ":eq(0)").text();  //select the first one
// 		   var colorclass = $("h5#" +  group).parent().attr('class');  //= the color needs being selected at runtime
// 			//	remove the 'none' string if present, and add the term
// 			$("h5#" +  group + ".no_facets").parent().remove();
// 
// 		   var bar_item =  "<li id=\"" + newtype_id + "\" class=\"" + colorclass + "\"><h5 id=\"" + group + "\">" 
// 				+ groupprettyname + "</h5> &#8250; "  + "<a href=\"#\">" + initialCap(facet) + "</a> &#8250;<strong> " 
// 				+ text + "</strong>"
// 				+ "<a href=\"#\" class=\"t9 m2 control_bar_remove\" title=\"Remove this as a filter\">Remove</a></li>"
// 
// 			$("ul.active_facets").append(bar_item);
// 			// $("ul.fsearch_history").append(bar_item);  JUST A TEST FOR FB MEMORY
// 
// 			// reassign the remove-onclick event to all elements
// 			$("a.control_bar_remove").click(function() {
// 						 facetvalue_removed($(this).parent());
// 				  });	
// 			// blink the recently added control item
// 			$("li#" + newtype_id).simple_blink();
// 
// 			// now call the backend for an updated list of results
// 			html_location = prepare_for_results();
// 			resetFacetFlags();  //we're adding a new filter, so facetValues count needs being recalculated
// 			var ordering = $("#active_ordering").val();
// 			ajax_update1(html_location, "update_results", "add", type_id, 1, ordering);			
// 			
// 			setTimeout(refresh_fbhistory, 2000);
// 			// refresh_fbhistory(); ==> added some timeout ... works?
// 			
// 			}
// 		}  // ...end of "if el_to_find.length == 0"
// 	
// 	else {  
// 		//if we found el_to_find, ie if the value has already been selected
// 		alert("item already selected!");
// 	}	
// }
// 
// 
// 
// 
// // same as above, but with some modifications due to the fact that here we've got no numbers!
// // i prefixed all IDs in history with 'h_'
// function facetvalue_sel_fromhistory(h_type_id){
// 	"actions to do when a facet value is clicked on eg: facetvalue_sel('termstenuregroup_32386928')"
// 	
// 	var item = $("a#" + h_type_id);	
// 	$(item).simple_blink();
// 
// 	var facet = $(item).attr("class");
// 	var group = h_type_id.split("_")[1]
// 	var type_id = h_type_id.substring(2); 
// 	var newtype_id = "c_" + type_id;  // used as a new ID for the control bar item		
// 	var text = $(item).text();
// 	// var original_text = $(item).text();	
// 	// if (isFacetedCountActive()) {
// 	// 	text = original_text.substring(0, original_text.lastIndexOf('('))  // remove the numbering, eg:'(5)'
// 	// }
// 	// else {
// 	// 	text = original_text
// 	// }	
// 	// count = original_text.substring(original_text.lastIndexOf('(') + 1, original_text.lastIndexOf(')'))
// 	activecount = $("#rec_num").text();
// 	count = 0; // temp, as we have no Count as in facetvalue_sel() above...
// 	
// 	el_to_find = $(".active_facets li#" + newtype_id);	
// 	
// 	if (el_to_find.length == 0) {  	//  check if this hasn't been selected already 
// 
// 		if (count == activecount) {
// 			alert("All possible results (" + count + ") already displayed!");
// 		}
// 		else {
// 
// 		   var groupprettyname = $("h5#" +  group + ":eq(0)").text();  //select the first one
// 		   var colorclass = $("h5#" +  group).parent().attr('class');  //= the color needs being selected at runtime
// 			//	remove the 'none' string if present, and add the term
// 			$("h5#" +  group + ".no_facets").parent().remove();
// 
// 		   var bar_item =  "<li id=\"" + newtype_id + "\" class=\"" + colorclass + "\"><h5 id=\"" + group + "\">" 
// 				+ groupprettyname + "</h5> &#8250; "  + "<a href=\"#\">" + initialCap(facet) + "</a> &#8250;<strong> " 
// 				+ text + "</strong>"
// 				+ "<a href=\"#\" class=\"t9 m2 control_bar_remove\" title=\"Remove this as a filter\">Remove</a></li>"
// 
// 			$("ul.active_facets").append(bar_item);
// 			// $("ul.fsearch_history").append(bar_item);  JUST A TEST FOR FB MEMORY
// 
// 			// reassign the remove-onclick event to all elements
// 			$("a.control_bar_remove").click(function() {
// 						 facetvalue_removed($(this).parent());
// 				  });	
// 			// blink the recently added control item
// 			$("li#" + newtype_id).simple_blink();
// 
// 			// now call the backend for an updated list of results
// 			html_location = prepare_for_results();
// 			resetFacetFlags();  //we're adding a new filter, so facetValues count needs being recalculated
// 			var ordering = $("#active_ordering").val();
// 			ajax_update1(html_location, "update_results", "add", type_id, 1, ordering);	
// 			
// 			
// 			}
// 		}  // ...end of "if el_to_find.length == 0"
// 	
// 	else {  
// 		//if we found el_to_find, ie if the value has already been selected
// 		alert("item already selected!");
// 	}	
// }
// 
// 
// 
// function refresh_fbhistory(){	
// 	$.get('refresh_fbhistory',
// 		 { },
// 			  function(data){
// 					$("#fsearch_history").empty().append(data);
// 				});
// }
// 
// 
// function toggle_historypanel(){
// 	$("#fsearch_history").slideToggle('slow', function() {
// 	    refresh_fbhistory();
// 	  });		
// 	$("#fsearch_history").slideToggle();
// 
// }
// 
// 
// 
// 
// 
// 
// function facetvalue_removed(item){
// 	"actions to do when a facet-value is removed from the control bar"
// 	
// 	$(item).fadeOut("slow");
// 	$(item).remove();
// 
// 	var classcolor = item.attr("class");
// 	var group = item.children("h5").attr("id");
// 	var grouplabel = item.children("h5").text();
// 
// 	// add the Facet-None line if necessary...
// 	var el_to_find = $(".active_facets h5#" + group);
// 	if (el_to_find.length == 0) {
// 
// 	   var bar_item =  	"<li class=\"" + classcolor + "\"> <h5 id=\"" + group + "\" class=\"no_facets\">" + grouplabel +"</h5> &#8250; <small class=\"no_facets\">none</small> </li>";
// 	   $("ul.active_facets").prepend(bar_item);
// 	}
// 
// 	$("#results_ltbrecord").add_loading_icon(); 
// 
// 	// the ids in the control bar have 'c_' at the beginning to differentiate them from the valueslists ids
// 	// eg: 'c_termstenuregroup_32113776' : so we remove the first two chars
// 	var c_typeid = $(item).attr("id");
// 	var typeid = c_typeid.substring(2);  
// 
// 	var html_location = prepare_for_results();
// 	resetFacetFlags();  //we're removing a filter, so facetValues count needs being recalculated
// 	var ordering = $("#active_ordering").val();
// 	ajax_update1(html_location, "update_results", "remove", typeid, 1, ordering);
// 
// }
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//  /* 
// main AJAX calls */
// 
// 
// // name (= value in the facet), type(facet group), facet (the facet within a group) identify a value uniquely
// function ajax_update1(divname, ajaxcall, action, type_id, page, ordering) {
// 	if (!page) var page = 1;   // if no page defaults to 1
// 	if (!ordering) var ordering = 'default';   // if no ordering defaults to 1
// 	var activefacet = $("#accordion h5.ui-state-active").parent(); // the <LI> element
// 	var activefacetid = $("#accordion h5.ui-state-active").parent().attr('id'); // the unique ID
// 	var facetdivelement = $("#accordion h5.ui-state-active").next(); // where the list is contained
// 				
// 	var resulttype = what_result_type();
// 	
// 	// temporarily reset the number of results in brackets..
// 	$("#rec_num").html("...");
// 	
// 	//if we have an id, the facet hasn't been updated yet, and the global flag (disabled in STG) is True..
// 	// if (activefacetid  && !(activefacet.hasClass("values_are_updated"))  && (isFacetedCountActive())) {
// 	// 	$(facetdivelement).add_loading_icon();
// 	// }
// 	
// 	disable_UI();
// 	
// 	$.get(ajaxcall,
// 		 { resulttype : resulttype, action: action, type_id: type_id, page: page, ordering: ordering},
// 			  function(data){
// 				 var mySplitResult = data.split("_*_*_");
// 				// hack for updating the number of results
// 				 $("#rec_num").html(mySplitResult[0]);
// 				 $("#" + divname).empty().append(mySplitResult[1]); 
// 
// 				// rerun onClick events transformation
// 				// fix_popups();
// 
// 				enable_UI();				
// 				// closing the accordion makes triggers UI-unblock! 
// 				// so if we want to close the groups we need to do it now
// 				close_facets();
// 								
// 				// delayUpdateFacetValues(1); //delay time must be null here, so we pass 1
// 				// setTimeout("enable_UI()", 1000); //wait a little before enablingUI
// 				
// 			  }
//    );  
// 
// }
// 
// 
// 
// function ajax_tab_changed(divname, ajaxcall, action, type_id, page, ordering) {
// 			
// 	var resulttype = what_result_type();	
// 	$("#rec_num").html("...");  // temporarily reset the number of results in brackets..
// 		  	
// 	disable_UI();
// 	
// 	$.get(ajaxcall,
// 		 { resulttype : resulttype, action: action, type_id: type_id, page: page, ordering: ordering},
// 			  function(data){
// 				 var mySplitResult = data.split("_*_*_");
// 				// hack for updating the number of results
// 				 $("#rec_num").html(mySplitResult[0]);
// 				 $("#" + divname).empty().append(mySplitResult[1]); 
// 
// 				// rerun onClick events transformation
// 				// fix_popups();
// 				
// 				enable_UI();				
// 				// closing the accordion makes triggers UI-unblock! 
// 				// so if we want to close the groups we need to do it now
// 				close_facetgroups(); 
// 				
// 			  }
//    		);  
// }
// 
// 
// 
// 
// 
// 
// 
// function showLogs() {
// 	"utility to call backend functionalities for logging information"
// 		
// 	openpopup("log_query", 400, 400);
// 	
// }
// 
// 
// 
//  /* 
// COUPLE OF FUNCTIONS FOR THE POPUP */
// 
// 
// 
// // not sure if this works in Explorer..
// var ctr=0;
// var pos=0
// function openpopup(popurl, sizeh, sizew){
// 	var winName = "win_"+(ctr++);
// 	pos = pos + 10;
// 	winpops=window.open(popurl,winName,'height=' + sizeh + ', width=' + sizew + ', status=1, resizable=1, location=1, scrollbars=1 ');
// 	winpops.moveTo(100 + pos ,100 + pos);
// }
// 
// 	
// // EG:  pop_up_window("http://www.google.com", 200, 200)
// // PS: new links keep opening in this window
// // function pop_up_window(url, sizeh, sizew) {
// // 
// // 	if (!newwindow.closed && newwindow.location) {
// // 		newwindow.location.href = url;
// // 	}
// // 	else {
// // 		newwindow=window.open(url, '','height=' + sizeh + ', width=' + sizew + ', status=1, resizable=1, location=1, scrollbars=1 ');   /*resizable=1*/
// // 		if (!newwindow.opener) newwindow.opener = self;
// // 			 newwindow.moveTo(100,100);
// // 	}
// // 	if (window.focus) {newwindow.focus()}
// // 	return false;
// // }
// 
// 
// 
// 
// 
// // transforms the <a> links in the result list into javascript onClick events, at runtime
// function fix_popups() {
// 	$("a.extlink").click(function(e) {
// 		url = $(this).attr("href"); 
// 		name = $(this).text();
// 		e.preventDefault(); 
// 		// windowOpener(url, name, 800, 900);
// 		openpopup(url, 700, 1000);  // h, w
// 		});
// }
// 
// 
// 
// 
// 
// 
// 
// 
// // UNUSED ========================================================================
// 
// 
// // function show_info_buttons(id) {
// //	"when the mouse hovers a result item, it shows the buttons"
// //	item = $("#" + id);
// //	item.hover(
// //		  function () {
// //			$(this).find("span").css("display", "inline");
// //		  }, 
// //		  function () {
// //			$(this).find("span").css("display", "none");
// //		  }
// //		);
// // }
// 
// function show_info_buttons(id) {
// 	"when the mouse hovers a result item, it shows the buttons"
// 	item = $("#" + id);
// 	item.find("span").css("display", "inline");
// }
// function hide_info_buttons(id) {
// 	"when the mouse hovers a result item, it shows the buttons"
// 	item = $("#" + id);
// 	item.find("span").css("display", "none");
// }
// 
// 
// 
// 
// 
// function open_facet_section(element) {
// 	$("span.facet_title").each(function() {
// 		if ($(this).attr("name") == element) {
// 			$(this).next().slideDown()
// 		}else {
// 		   $(this).next().slideUp()
// 		}
// 	});
// }
// 
// 



// function showItemInfo(arg) {
// 	"shows more info about an instance"
// 	
// 		document.getElementById('main_tab_section').tabber.tabShow(1);
// 		ajax_update2("iteminfo", "info_item", arg); 
// 		$("#dump1").simple_blink(); 
// }
// 	











