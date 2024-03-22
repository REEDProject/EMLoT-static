Cufon.replace('.nvg a', {fontSize: '16px'});

Cufon.replace('.c h3, .hdp h1', {fontSize: '22px'});

Cufon.replace('.nvl a', {fontSize: '14px'});

Cufon.replace('.nvh h4', {fontSize: '14px'});

// Cufon.replace('.tsn a', {fontSize: '16px'});

// Cufon.replace('.ct h2');


$(document).ready(function() {
    $('html').addClass('j');
    $('a[rel]').click(function () {
        var linkTarget = $(this).attr('rel');
        if (linkTarget == 'external') {
            linkTarget = '_blank'
        };
        $(this).attr({'target':linkTarget});
    });
	$(".nvh h5 label").overlabel();


	// $("#tabs").tabs();
	
	
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