$(document).ready(function(){
var $seat;

// makes seats keep itc color
$("body").on('click','.btn',function(){
    $seat = $(this);
    $seat.addClass('active');
});

$ref = $(".btn-group");

$("body").on('click',$ref.selector+' .btn',function(){
    if($(this).hasClass('active')){
        $(this).addClass('focus')
    }
});


var $textInput = $('input:text');
$('#theform').on('submit', function(e){
    e.preventDefault();
    var name = $textInput.val();
    $textInput.val(null)
    var $theUl = $('#theUL');
    $theUl.append("<li>Taken by, " + name + "!</li>");
    // $seat.text(name);
    $seat.addClass('unavailable');
});

});
