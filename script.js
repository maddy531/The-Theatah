

// makes seats keep itc color
$("body").on('click','.btn',function(){
    $(this).addClass('active');
});

$ref = $(".btn-group");

$("body").on('click',$ref.selector+' .btn',function(){
    if($(this).hasClass('active')){
        $(this).addClass('focus')
    }
});
$("btn").hover(function(){
  $(this)

});
