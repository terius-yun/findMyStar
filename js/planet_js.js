var para = document.location.href.split('=');
//ㄴ> url에서 =를 기준으로 나누어 주소를 추출


var dec = decodeURI(para)
//ㄴ> url에 인코딩된 문자열을 디코딩 (기존에 외계어같은 문자들을 변환)

var loadName = dec.split(',');
// ㄴ> 디코딩된 url에서 ,기준으로 배열을 나눔
var name = loadName[1];
//ㄴ> 이름만 추출


$(".userName").text(name);
//ㄴ>유저의 이름을 표출

$('#returnHomeBotton').on('click',returnHome)

function returnHome(){
  location.href = 'index.html'
}