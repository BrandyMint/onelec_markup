$( document ).ready(function() {

	var catlink = $('#catlink');
	var catalogmenu = $('#catalog-menu');


    function show_hide_menu(st) {
        if (catalogmenu.attr('status') == 0 && st == 1) {
            catalogmenu.css('display','block');
            catalogmenu.attr('status', 1);
        } else {
            catalogmenu.css('display','none');
            catalogmenu.attr('status', 0);
        }
    }
    

    catlink.click(function(){    	    	
        show_hide_menu(1);        
    });

    $(document).keydown(function(e) {
        if( e.keyCode === 27 ) {
            show_hide_menu(0);
        }
    });

    $(document).click(function(e){
        var target = $(e.target);
        if (!(target.is('#catalog-menu') || target.parents('#catalog-menu').length) && !target.is('#catlink')) {
            show_hide_menu(0);            
        }         
    });





    var scrollContent = $('#scrollContent');

    function resize_table() {
    	if (scrollContent.length) {    		
    		var h = $(window).height() - 100-100;    		 		    	    
    		scrollContent.css('height', (h<300?'100%':h+'px'));
    	}
    }
    

    $( window ).resize(function() {
    	resize_table();
    });

    resize_table();

    $("[rel='tooltip']").tooltip();

});