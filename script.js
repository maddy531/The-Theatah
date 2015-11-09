$("body").on('click','.btn',function(){
    $(this).addClass('active');
});


/* What you can do */
$ref = $(".btn-group");

$("body").on('click',$ref.selector+' .btn',function(){
    if($(this).hasClass('active')){
        $(this).addClass('focus')
    }
});
