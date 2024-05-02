Cufon.replace('.nvg a', {fontSize: '16px'});
Cufon.replace('.c h3, .hdp h1', {fontSize: '22px'});
Cufon.replace('.nvl a', {fontSize: '14px'});
Cufon.replace('.nvh h4 b', {fontSize: '14px'});
Cufon.replace('.tsn a', {fontSize: '16px'});
Cufon.replace('.ct h2');


//
// clueTips work, I just need to decide where to put them........
// add g5 class to launch them, then put the xml file where it can be found
// i found out that if you add the right IDs to the xml file, it works too...
//

function AddTips() {
    $.get("/static/xml/search_tips.xml", function(data) {
        $("tip", data).each(function() {
            var labelID = $(this).attr("id");
           // alert("ID = " + labelID);
            var tipText = $(this).attr("text");
          //  alert("Tip text = " + tipText);
            //Now add the tip to the form if the tip is not empty
            if (tipText != "") {
                var tipHtml = "<b class=\"g5\" title=\"" + tipText + "\"></b>";
                // $("#" + labelID).append(tipHtml);
                $("." + labelID).append(tipHtml);
            }
        });
        $(".g5").cluetip({
			hoverIntent: false,
            cursor: 'pointer',
            width: 220,
            dropShadow: false,
            showTitle: false,
            activation: 'click',
            closePosition: 'top',
            sticky: true,
            splitTitle: '|'});
    })
}




// makes the facet groups collapsable, making sure the inside facets gets closed first
// ..otherwise the accordion doesn't work
// test it using: el = $("h4.to_collapse:eq(0)").next().find(".ui-state-active");
function load_facetgroups_action() {
	var myCollapsableItems=new Array( "h4.to_collapse"); 
	for (i in myCollapsableItems) {
		$(myCollapsableItems[i]).toggle(
			  function () {
				el_to_find = $(this).next().find(".ui-state-active");
				if (el_to_find.length > 0) {
					// alert(el_to_find);
					// hack: gets you the index of open accordion [0.....n]
					n = $("#accordion h5").index($("#accordion h5.ui-state-active"));
					$('#accordion').accordion('activate', n); // closes the accordion...
						}
				$(this).next().slideUp("slow");		
				$(this).next().toggleClass("closed");		
					}, 
			  function () {
				$(this).next().slideDown("slow");
				$(this).next().toggleClass("closed");
			  }
			);
		}	

	// set to TRUE if we want to close all facetgroups by default... otherwise set to false
	if (true) {
		for (i in myCollapsableItems) {
			$(myCollapsableItems[i]).click();
		}
	}		
}



$(document).ready(function() {
	// add tips and do css fixtures
	AddTips();
	$('html').addClass('j');
	// $(".nvh h5 label").overlabel();   //OLD VERSION
	$(".fms .i1 label").overlabel();     // NEW PAUL's VERSION
		
	// make links with class'external' open in popups
	$('a[rel]').click(function () {
		var linkTarget = $(this).attr('rel');
		if (linkTarget == 'external') {
			linkTarget = '_blank'
		};
		$(this).attr({'target':linkTarget});
	});


	$("#searchtype input").click(function () {
		var linkTarget = $(this).val();
		if (linkTarget) {
			switch_restype(linkTarget);
		}
	});
	
	// load my own tab-change events
	// load_tabs_event();


	// load the accordion actions for updating the facets
	$("#accordion").accordion({ header: 'h5', collapsible: true , active: false});  //a.accordion_hook'
	$( "#accordion" ).bind( "accordionchange", function(event, ui) {
		delayUpdateFacetValues(50, true);
	});

	// make the facets sections collapsable
	load_facetgroups_action();
	
	// give active filters list the right colors matching facets ones
	colorize_activeFilters();
	
	// other CSS stuff
	$(document).ready(function() {
		var showText = "show details";
	    var hideText = "hide details";
	    var showStateClass = "s6";
	    var hideStateClass = "s7";
	    $(".tsb div.tbs.s6").prev('h3').prepend('<a href="#" class="g2 ' + hideStateClass + '" title="Click to ' + hideText + '">' + hideText + '</a>');
	    $(".tsb div.tbs.s7").prev('h3').prepend('<a href="#" class="g2 ' + showStateClass + '" title="Click to ' + showText + '">' + showText + '</a>');
	    $('.tsb table.s7').hide();
	    $('.tsb a.g2').click(function() {
	        var hmcontext = $(this).parent().next().get(0);
	        if ($(this).text() == showText) {
	            $(this).removeClass("s6");
	            $(this).addClass("s7");
	            $(this).attr({title: "Click to " + hideText});
	            $(this).text(hideText);
	        }
	        else {
	            $(this).attr({title: "Click to " + showText});
	            $(this).text(showText);
	            $(this).removeClass("s7");
	            $(this).addClass("s6");
	        }
	        if (hmcontext = 'HTMLDivElement') {
	            $(this).parent().next('div').toggle('fast');
	        }
	        return false;
    });

	});
	
});




// ##################
// #  
// #  OLD AN UNUSED: 
// #
// ##################



// ##################
// #  Fri Jul  2 13:50:50 BST 2010
// #  on load helper functions
// #
// ##################

// function load_tabs_event(){
// 	$('div.tsb').bind('tabsselect', function(event, ui) {
// 		// first we clean the panel here
// 		var x =	 ui.panel;
// 		$(x).empty();
// 		// set back the ordering value to 'default'
// 		$("#active_ordering").val("default");
// 		// a slight delay is needed to let the tab index update before checking for the selected tab!
// 		setTimeout("reload_results()",100);
// 	});
// }


