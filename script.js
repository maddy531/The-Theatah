$(document).ready(function)( ){

$("body").on('click','.btn',function(){
    $(this).addClass('active');
});


$ref = $(".btn-group");

$("body").on('click',$ref.selector+' .btn',function(){
    if($(this).hasClass('active')){
        $(this).addClass('focus');
    });


/*  Thought maybe duplicate button color change function but have it generate a text box
(incomplete)
START

$ref = $(".btn-group-focus");
	
$("body").on('hover',$ref.selector+' .btn', function(){
	if($this).hasClass

	}    END  */
/*

From example in book on pg 332
START*/

$(function(){
	$('btn').toggle().fadeToggle();
	var $li = $('li');
	$li.hide().each(function(index){
		$(this).delay(700).fadeIn(700);
	});
	$li.on('hover', function(){
		$(this).fadeOut(700);
	});
});

});

/*END  */

/*  From the Bootstrap site
START

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(".button-primary:active").popover({ trigger: "manual" , html: true, animation:false})
	.on("mouseenter", function () {
	    var _this = this;
	    $(this).popover("show");
	    $(".popover").on("mouseleave", function () {
	        $(_this).popover('hide');
	    });
	}).on("mouseleave", function () {
	    var _this = this;
	    setTimeout(function () {
	        if (!$(".popover:hover").length) {
	            $(_this).popover("hide");
	        }
	    }, 300); 

END */

/* START
ss
// jQuery Plugin
(function($){

    // Swap text with any attribute
    $.fn.swapAttr = function(attribute) {

        if (!attribute) { var attribute = 'title'; }

        return this.each(function(){

            $(this).hover(function(){

                var $this           = $(this);
                var text            = $this.text();
                var attributeValue  = $this.attr(attribute);
                var defaultWidth    = $this.width();

                if (attributeValue) {
                    $this.text(attributeValue).attr('data-defaultText', text);

                    if(defaultWidth > $this.width()) {
                        $this.width(defaultWidth);
                    }
                }

            },function(){

                var $this           = $(this);
                var defaultText     = $this.attr('data-defaultText');

                $this.text(defaultText).removeAttr('data-defaultText').width('auto');
            });

        });
    };

})(jQuery);

$(document).ready(function(){
    $('a').swapAttr().css({'color':'#ccc'});
    $('#link2').swapAttr('rel');
});

END */


});


	
	
