$(function() {
    
    var active = $('a[data-toggle="tab"]').parents('.active').length;
    var tabClicked = false;
    
    // Closes current active tab (toggle and pane):
    var close = function() {
        $('a[data-toggle="tab"]').parent().removeClass('active');
        $('.tab-pane.active').removeClass('active');
        active = false;
    }
    
    // Closing active tab on clicking on toggle:
    $('[data-toggle=tab]').click(function(){
        if ($(this).parent().hasClass('active')){
            $($(this).attr("href")).toggleClass('active');
            active = false;
        } else {
            tabClicked = true;
            active = this;
        }
    });
    
    // Closing active tab on clicking outside tab context (toggle and pane):
    $(document).on('click.bs.tab.data-api', function(event) {
        if(active && !tabClicked && !$(event.target).closest('.tab-pane.active').length) {
            close();
        }
        
        tabClicked = false;
    });
    
    // Closing active tab on ESC key release:
    $(document).keyup(function(e){
        if(active && e.keyCode === 27) { // ESC
            close();
        }
    });
});