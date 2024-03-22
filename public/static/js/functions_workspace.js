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
	if (type == 'ltbrecord') {
		$("#bs_ltbrecord").attr('checked', true)
	}
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


// 
// function toggle_historypanel(){
// 	$("#ksearch_history").slideToggle('slow');
// }





// in this case (as with search.html) we do not need the #results_ltbrecord in the searchstring! 
function removeFromWorkspace() {
	var resulttype = what_result_type();
	var searchstring  = "input.workspace_checkbox:checked"
	var n = $(searchstring).length;
	if (n > 0) {		
		var answer = confirm("Are you sure you want to remove " + n + " item(s) from your workspace? \nThis operation is not undoable. \
		\nNote that this operation will not alter your collections. ");
		if (answer) {
			var allVals = [];
			$(searchstring).each(function() {
				allVals.push($(this).val());
			});
			var items = allVals.join(" ")
			$.get("/workspace/items/remove",
				 { basic_search_type : resulttype, items: items },
					function(data){
						// NB: we're not doing anything with the data returned!
						window.location = "/workspace/items/?basic_search_type=" + resulttype;						
						// $("input.workspace_checkbox:checked").parent().parent().hide('slow')					
						// $("#removefromworkspace").simple_blink();

					});
		} else {
			return null;
		}
		
	} else {
		alert("No records are selected!");
	}

}




// ****
// functions for the collections pages
// ****


//  function used in the collection.html view
function deleteCollection(name, myid) {
	var answer = confirm("Are you sure you want to remove the collection: \"" + name + "\" ? \nThis operation is not undoable.");
	if (answer) {
		// do the call to the back end with the ID
		window.location = "/workspace/collections/delete/" + myid + "/";
	} else {
		return null;
	}
}



// /workspace/collections/removeitem/{{association.item.id}}_{{activecollection.id}}

//  function used in the collection.html view
function removeItemFromCollection(itemId, collectionId) {
	var answer = confirm("Are you sure you want to remove this item? \nThis operation is not undoable.");
	if (answer) {
		// do the call to the back end with the ID
		window.location = "/workspace/collections/removeitem/" + itemId + "_" + collectionId;
	} else {
		return null;
	}
}









// function used in the workspace.html view
function addItemsToCollection() {
	var resulttype = what_result_type();
	var collection = $("#collection_choices").val(); // it's a number or 'createnewcollection'
	var searchstring  = "input.workspace_checkbox:checked"
	var n = $(searchstring).length;
	if (n > 0) {
		var allVals = [];
		$(searchstring).each(function() {
			allVals.push($(this).val());
		});
		var items = allVals.join(" ")
		$.get("/workspace/collections/additems",
			 { basic_search_type : resulttype, items: items , collection : collection},
				function(data){
					// var answer = confirm("Records added to the collection: " + n + " [debug: ID= " + allVals + " ]. \
					// \nDo you want to go to the collection page?");
					var answer = confirm("Records added to the collection: " + n + ".\nDo you want to go to the collection page?");
					if (answer) {
						// if we're creating a new collection, its ID is passed back by the ajax call
						if (collection == 'createnewcollection') {  
							window.location = "/workspace/collections/" + data + "/";							
						} else {
							window.location = "/workspace/collections/" + collection + "/";
						}
						
					} else {
						return null;
					}
					
				});
		
	} else {
		alert("No records are selected!");
	}

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




