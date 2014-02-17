$( document ).ready(function() {


    if ($(document).height() <= $(window).height()) {
        $("footer").addClass("navbar-fixed-bottom");
    }        

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
            
            var bodyw = [];
            $('#scrollContent > tr:first > td').each (function(i, row) {              
              bodyw.push(this.clientWidth);
            }); 

            $('.fixedHeader th').each(function(){                
                $(this).css('width', bodyw[$(this).index()]+'px');
            });
            

    	}
    }
    

    $( window ).resize(function() {
    	resize_table();
    });

    resize_table();

    $("[rel='tooltip']").tooltip();

});