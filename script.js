document.getElementById('btn-submit').onclick = function(){
  var text = document.getElementById('newName').value;

  var li = document.createTextNode( text );
  var newEl = document.createElement("li");
  newEl.appendChild(li);

  document.getElementById('newPatr').appendChild(newEl);
}


$("body").on('click','.btn',function(){
    $(this).addClass('active');
});




// $ref = $(".btn-group");

// $("body").on('click',$ref.selector+' .btn',function(){
//     if($(this).hasClass('active')){
//         $(this).addClass('focus')
//     }
// });


// We want the submit button click to activate the focus(or whatever is triggering the default bootstrap color)

// We want any other click to deselect the seat, aka deactivating and removing the focus.

// if $(this).removeClass('active')
//   if !(submit button selected) -- perhaps nest if statements?
// else $(this).addClass('active') if (submit button selected)
