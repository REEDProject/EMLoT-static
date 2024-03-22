/* creator: michelepasin */

jQuery.fn.simple_blink = function() {
	return this.fadeOut("fast").fadeIn("slow");
};
// {{ MEDIA_URL }}paul/i/g.gif
jQuery.fn.add_loading_icon = function() {
	loadingData = "<img src='/static/paul/i/g.gif' alt='loading data' />"
	return this.empty().append(loadingData);
};






// this fun is slightly different from its equivalent on /search and /faceted
function addToWorkspace(resulttype, item_id) {

	$.get("/workspace/items/add",
		 { basic_search_type : resulttype, items: item_id },
			function(data){
				var answer = confirm("Record added to the workspace! \
				\nDo you want to go to your Workspace page now?");
				if (answer) {
					// do the call to the back end with the ID
					window.location = "/workspace/items/?basic_search_type=" + resulttype
				} else {
					return null;
				}
							
			});
	
	$("#addtoworkspace").simple_blink();
}





// 
// 
// 
// 
// 
// 
// // ///////////////////////////////////////////////////
// 
// 
// // ALL THAT FOLLOWS HASN'T BEEN USED YET
// 
// ///////////////////////////////////////////////////////
// 
// 
// 
// // for the Person record-page
// function update_person_factoids(page, ordering, tab){
// 	if (!tab) var tab = "fragment-1";   // we pass the tab-ids directly in the functions... might be done dynamically later..
// 	
// 	// $("#fragment-1").add_loading_icon();
// 	// var html_location =  $(this).parents("div.ui-tabs-panel").attr('id');	
// 	$("#" + tab).add_loading_icon();
// 	// ajax_update_tabs("#fragment-1", "", tab, page, ordering);
// 	ajax_update_tabs("#" + tab, "", tab, page, ordering);
// }
// 
// 
// 
// // for the Source record-page
// function update_source_factoids(page, ordering, tab){
// 	if (!tab) var tab = "fragment-1";   // we pass the tab-ids directly in the functions... might be done dynamically later..
// 	$("#" + tab).add_loading_icon();
// 	ajax_update_tabs("#" + tab, "", tab, page, ordering);
// }
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
// function ajax_update_tabs(divname, ajaxcall, tab, page, ordering) {
// 	if (!page) var page = 1;   // if no page defaults to 1
// 	if (!tab) var tab = 1;   // if no page defaults to 1
// 	if (!ordering) var ordering = 'default';   // if no page defaults to 1person_detail
// 	
// 	$.get(ajaxcall,
// 		 { tab: tab, page: page, ordering: ordering},
// 			  function(data){
// 				 $(divname).empty().append(data); 
// 			  }
//    );  
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
// 
// 
// 
// 
// 
// // .........OLD STUFF
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
// 
// 
// function what_result_type(){
// 	return $("li.ui-state-active").attr('id');	
// }
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
// // this is loaded by default in c.js !
// function load_tabs_event(){
// 	$('div.tsb').bind('tabsselect', function(event, ui) {
// 		// first we clean the panel here
// 		var x =  ui.panel;
// 		$(x).empty();
// 		// set back the ordering value to 'default'
// 		$("#active_ordering").val("default");
// 		// a slight delay is needed to let the tab index update before checking for the selected tab!
// 		setTimeout("reload_results()",100);
// 
// 	});
// }
// 
// 
// // function called each time we switch results-tab
// function reload_results(page, ordering){
// 	if (!page) var page = 1;   // if no page defaults to 1
// 	if (!ordering) var ordering = $("#active_ordering").val();
// 	html_location = prepare_for_results();
// 	ajax_update1(html_location, "update_results", "reload",  "", page, ordering);
// }
// 
// 
// 
// // called when a column header is clicked on
// function change_ordering(ordering){
// 	old_ordering = $("#active_ordering").val();
// 	if (!(old_ordering == ordering)) {
// 		$("#active_ordering").val(ordering);
// 		reload_results(1, ordering)
// 	} else {  //the back end checks whether it's  an annotation or not
// 		$("#active_ordering").val("-" + ordering);
// 		reload_results(1, "-" + ordering)
// 	}
// }
// 
// 
// 
// 
// function reset_results(){
// 	html_location = prepare_for_results();
// 	ajax_update1(html_location, "update_results", "reset",  "");
// }
// 
// 
// 
// 
// 
// function empty_control_bar(){
// 	$(".active_facets").empty();
// 	$(".active_facets").html("<small class=\"no_facets\">none</small>");
// 	//  if you want to load everything...
// 	reset_results();
// 		
// }
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
// //  ============================================  
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
// 
// 
// function ajax_update2(divname, ajaxcall, arg) {
// 	"generic ajax function (used here for updating the info panel)"
// 	
// 	var resulttype = what_result_type();
// 	
// 	$.get(ajaxcall,
// 		 { arg : arg, resulttype : resulttype,},
// 			  function(data){
// 				 $("#" + divname).empty().append(data); 
// 			  }
//    );  
// }
// 
// 
// 
// 
// 
// 
// 
//  /* 
// COUPLE OF FUNCTIONS FOR THE POPUP */
// 
// 
// // construct for explorer compatibility
// var newwindow = '';
// 
// function pop_up_window(url, sizeh, sizew) {
// 	if (!newwindow.closed && newwindow.location) {
// 		newwindow.location.href = url;
// 	}
// 	else {
// 		newwindow=window.open(url,'name','height=' + sizeh + ', width=' + sizew + ', status=1, resizable=1, location=1, scrollbars=1 ');   /*resizable=1*/
// 		if (!newwindow.opener) newwindow.opener = self;
// 			 newwindow.moveTo(100,100);
// 	}
// 	if (window.focus) {newwindow.focus()}
// 	return false;
// }
// 
// 
// 
// 
// 
// 
// 
// 










