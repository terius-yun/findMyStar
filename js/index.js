      //한글만 입력가능하게 만드는 코드 여기부터
      // $("#name-input").on("keyup", function() {
      //     // $(this).val($(this).val().replace(/[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g,""));
      //       //여기까지 한글만 입력가능하게 만드는 코드
      //       $(this).val($(this).val().replace(/[^\!-z]/g,""));//영문만입력가능 코드
      // });

      //글이 입력되면 #name-input과 #findStar의 색을 초록색으로 비어있다면 빨간색으로 표시
      $('#name-input').on('input', checkInput);
      function checkInput(){
        var userName = $('#name-input').val();
        if(userName === ''){//빈칸이라면 아래
          $('#beforeNameInput2').css('color', 'rgba(255,41,86,1)');
          $('#name-input').css('background-color', 'rgba(244,177,175,1)');//이름칸 속 색
          $('#name-input').css('border-color', 'rgba(255,107,136,1)');//이름칸 테두리 색
          $('#findStar').css('background-color', 'rgba(255,41,86,1)');//버튼 색
        }else {//빈칸이아니라면 아래
          $('#beforeNameInput2').css('color', 'rgba(11,182,140,1)');
          $('#name-input').css('background-color', 'rgba(168,207,192,1)');//속 색
          $('#name-input').css('border-color', 'rgba(11,182,140,1)');// 테두리 색
          $('#findStar').css('background-color', 'rgba(11,182,140,1)');//버튼 색
        }
      }

      //버튼 클릭시 글들과 입력,버튼 모두 사라지며 로딩 아이콘 및 ads 생성
      $('#findStar').on('click', appearLoading);
      function appearLoading(){

      var userName = $('#name-input').val()

      if (userName != "") {
      $('#contents').css('display', 'none')
      $('.activeThings').css('display', 'none')
      }else {
        }
      }

      $('#findStar').on('click', loadingIconFadeIn);
      function loadingIconFadeIn(){

      var userName = $('#name-input').val()

      if (userName != "") {
      $('#loadingIcon').fadeIn(100);
      $('#loadingText').fadeIn(100);
      $('#loadingTopAds').fadeIn(100);
      }else {
      }
      } //버튼 클릭시 글들이 사라지며 로딩 ads 아이콘 생성


      //loadingIcon 클릭시 팝업창 보이기
      $('#loadingIcon').on('click', contactUsFadeIn);

      function contactUsFadeIn(){
      $('#contactUs').fadeIn(500);
      }; //loadingIcon 클릭시 팝업창 보이기



  // 행성찾기를 하는 코드 시작
        $('#findStar').on('click', seachPlanet);//찾기를 누를때 함수 실행

          function seachPlanet(){
          var userName = $('#name-input').val() //userName의 값에 기입된 이름을 넣는다
          // var userNameCheck = RegExp(/^[가-힣]{2,4}$/);//한글만 적기 정규식, 글자수 제한
          // var userNameCheck = RegExp(/^[A-Za-z_\-]{2,20}$/);//영문만 적기 정규식, 글자수 제한
          // if(userNameCheck.test(userName)){
            if(userName != ""){

            //sleep 함수 대체 코드 생성
            function sleep(ms) {
            return new Promise(resolve=>setTimeout(resolve, ms));
          }

            (async function() {

            await sleep(3000);// 지연 시간 설정

              function random_plant(){}

              var number = 0;
                        //별들 목록
              random_plant[number++] =  "yourPlanet1.html"
              random_plant[number++] =  "yourPlanet2.html"
              random_plant[number++] =  "yourPlanet3.html"


              var random_number = Math.floor(Math.random() * number);
              //ㄴ>난수 생성
              location.href =  random_plant[random_number] + '?index=' + userName;
              //ㄴ> 유저네임을 붙혀 새로운 페이지로 이동
            })();// 정확히 닫아줘야한다.

          }else{
            alert('Please sumit your name.')
          }
        }
  // 행성찾기를 하는 코드 끝
