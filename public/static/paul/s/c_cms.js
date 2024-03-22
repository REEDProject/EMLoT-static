Cufon.replace('.nvg a', {fontSize: '16px'});

//Cufon.replace('.c h3, .hdp h1', {fontSize: '22px'});

Cufon.replace('.nvl a', {fontSize: '14px'});

Cufon.replace('.nvh h4', {fontSize: '14px'});

Cufon.replace('.tsn a', {fontSize: '16px'});

//Cufon.replace('.ct h2');



// transforms the <a> links in the result list into javascript onClick events, at runtime
function fix_popups() {
	$("a.extlink").click(function(e) {
		url = $(this).attr("href"); 
		name = $(this).text();
		e.preventDefault(); 
		// windowOpener(url, name, 800, 900);
		openpopup(url, 700, 1000);  // h, w
		});
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



$(document).ready(function() {
    $('html').addClass('j');
    $('a[rel]').click(function () {
		// make links with class'external' open in popups
        var linkTarget = $(this).attr('rel');
        if (linkTarget == 'external') {
            linkTarget = '_blank'
        };
        $(this).attr({'target':linkTarget});
    });
	$(".nvh h5 label").overlabel();

	
	$("#tabs").tabs();
	
	fix_popups();

	// test: overlay feedback
	
	$('#feedback').click(function() { 
        $.blockUI({ message: $('#feedback_popup'), css: { width: '275px' } }); 
    }); 

    $('#yes').click(function() { 
        // update the block message 
        $.blockUI({ message: "<h1>Remote call in progress...</h1>" }); 

        $.ajax({ 
            url: 'wait.php', 
            cache: false, 
            complete: function() { 
                // unblock when remote call returns 
                $.unblockUI(); 
            } 
        }); 
    }); 

    $('#no').click(function() { 
        $.unblockUI(); 
        return false; 
    });


	// end test: overlay feedback



});


// 
// "Hijax" links after tab content has been loaded:
// 
// $('#example').tabs({
//     load: function(event, ui) {
//         $('a', ui.panel).click(function() {
//             $(ui.panel).load(this.href);
//             return false;
//         });
//     }
// });