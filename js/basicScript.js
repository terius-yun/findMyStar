//팝업창 보이기
$('#dotMenu').on('click', contactUsFadeIn);

function contactUsFadeIn(){
$('#contactUs').fadeIn(500);
}; //팝업창 보이기

//팝업창 생성이후 다른공간을 누르면 사라지기
$(document).mouseup(function(e){
var container = $('#contactUs')

if (container.has(e.target).length == 0) {
    container.fadeOut(500);
  }
}); //팝업창 생성이후 다른공간을 누르면 사라지기
