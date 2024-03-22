/* creator: michelepasin */

jQuery.fn.simple_blink = function() {
	return this.fadeOut("fast").fadeIn("slow");
};
// {{ MEDIA_URL }}paul/i/g.gif
jQuery.fn.add_loading_icon = function() {
	loadingData = "<img src='/static/paul/i/g.gif' alt='loading data' />"
	return this.empty().append(loadingData);
};

// ///////////////////////////////////////////////////

function what_result_type(){
	return $("li.ui-state-active").attr('id');	
}

// called each time we change the result type columns
function activate_result_type(){
	var type = $("#active_result_type").attr('value');
	$("#" + type).addClass('ui-tabs-selected ui-state-active');
	if (type == 'people') {
		$("#bs_people").attr('checked', true)
	}
	if (type == 'primarysource') {
		$("#bs_primarysource").attr('checked', true)
	}
	if (type == 'secsource') {
		$("#bs_secsource").attr('checked', true)
	}
	if (type == 'event') {
		$("#bs_event").attr('checked', true)
	}	
	if (type == 'troupe') {
		$("#bs_troupe").attr('checked', true)
	}
	if (type == 'venue') {
		$("#bs_venue").attr('checked', true)
	}
}





// called when a column header is clicked on to order the result list
function change_ordering(ordering){
	var old_ordering = $("#active_ordering").val();
	var type = $("#active_result_type").attr('value');
	var query = $("#bs_input").val();
	
	if (!(old_ordering == ordering)) {
		$("#active_ordering").val(ordering);
		$("#search_form").submit();
	}  else   {  
		$("#active_ordering").val("-" + ordering);
		$("#search_form").submit();
	}
}



function toggle_historypanel(){
	$("#ksearch_history").slideToggle();
	$("#ksearch_history").slideToggle();
}





// in this case (as with workspace.html) we do not need the #results_ltbrecord in the searchstring! 

function addToWorkspace() {
	var resulttype = what_result_type();
	var searchstring  = "input.workspace_checkbox:checked"
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
					// alert("Records added to the workspace: " + n);
					
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







// fun used to select all workspace checkboxes
function checkUncheckAll() {
	if ($(".workspace_checkbox").attr('checked')) {
		$(".workspace_checkbox").attr('checked', false);
	}
	else {
		$(".workspace_checkbox").attr('checked', true);
	}	
	
}






 /* 
COUPLE OF FUNCTIONS FOR THE POPUP */



// not sure if this works in Explorer..
var ctr=0;
var pos=0
function openpopup(popurl, sizeh, sizew){
	var winName = "win_"+(ctr++);
	pos = pos + 10;
	winpops=window.open(popurl,winName,'height=' + sizeh + ', width=' + sizew + ', status=1, resizable=1, location=1, scrollbars=1 ');
	winpops.moveTo(100 + pos ,100 + pos);
}




// transforms the <a> links in the result list into javascript onClick events, at runtime
function fix_popups() {
	$("a.extlink").click(function(e) {
		url = $(this).attr("href"); 
		name = $(this).text();
		e.preventDefault(); 
		// windowOpener(url, name, 800, 900);
		openpopup(url, 700, 1000);	// h, w
		});
}










