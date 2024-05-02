Cufon.replace('.nvg a', {fontSize: '16px'});
Cufon.replace('.c h3, .hdp h1', {fontSize: '22px'});
Cufon.replace('.nvl a', {fontSize: '14px'});
Cufon.replace('.nvh h4 b', {fontSize: '14px'});
Cufon.replace('.tsn a', {fontSize: '16px'});
Cufon.replace('.ct h2');


//
// clueTips work:
// just have to put the right elements' ID in the xml file
// this script add those matched elements a g5 class, which then is transformed into a cluetip
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
                var tipHtml = "<b class=\"g5\" title=\"" + tipText + "\">Help</b>";
                $("#" + labelID).append(tipHtml);
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




function load_tabs_event() {
	$(".tsn a").click(function () {
		var linktarget = $(this).attr('href');
		$("#results_div").add_loading_icon();
		reload_results(linktarget);
		return false;
		});
}
	
		



function initialize_slider() {
	// this only initializes the numbers at loading time
	var years = $("#active_years").val();
	if (!(years == 'default')) {
		year1 = parseInt(years.split("-")[0])
		year2 = parseInt(years.split("-")[1])
		$("#slider_range").slider('values', 0 , year1);
		$("#slider_range").slider('values', 1 , year2);
		
	}

	$("#daterange").val('From: ' + $("#slider_range").slider("values", 0) + ' - To: ' + $("#slider_range").slider("values", 1));
	$("#active_years").val($("#slider_range").slider("values", 0) + '-' + $("#slider_range").slider("values", 1));
	
}




$(document).ready(function() {
	AddTips();
	// fix_popups();
	
	$('html').addClass('j');
	$('a[rel]').click(function () {
		var linkTarget = $(this).attr('rel');
		if (linkTarget == 'external') {
			linkTarget = '_blank'
		};
		$(this).attr({'target':linkTarget});
	});

	// $(".nvh h5 label").overlabel();   //OLD VERSION
	$(".fms .i1 label").overlabel();     // NEW PAUL's VERSION
	
	
	// give behaviour to RESET button
	$("#reset_search").click(function ()  {
		window.location = "/db/search";
	});
	
	
	// load my own tab-change events
	load_tabs_event();


	// 2010-10-26 I DISABLED THE SLIDER FOR NOW
	// $("#slider_range").slider({
	// 			range: true,
	// 			min: 1000,
	// 			max: 1300,
	// 			values: [1000, 1300],
	// 			slide: function(event, ui) {
	// 				$("#daterange").val('From: ' + ui.values[0] + ' - To: ' + ui.values[1]);
	// 				$("#active_years").val(ui.values[0] + '-' + ui.values[1]);					
	// 			}
	// 		});
	// 		
	// initialize_slider();

	
	$(document).ready(function() {
	var showText = "show details";
	    var hideText = "hide details";
	    var showStateClass = "s6";
	    var hideStateClass = "s7";
	    $(".tsb div.tbs.s6").prev('h3').prepend('<a href="#" class="g2 ' + hideStateClass + '" title="Click to ' + hideText + '">' + hideText + '</a>');
	    $(".tsb div.tbs.s7").prev('h3').prepend('<a href="#" class="g2 ' + showStateClass + '" title="Click to ' + showText + '">' + showText + '</a>');
	    $('.tsb table.s7').hide();
	
	
		setTimeout("activate_result_type()",100);
		
		
		
	});
	
});
