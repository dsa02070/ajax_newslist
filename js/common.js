$(function(){
  //script 영역 jquery ajax 사용 예
  $.ajax({
    url:'data.xml', //데이터파일에 대한 경로 값
    dataType : 'xml',
    success: function(data){ // 매개변수는 정해진 값이 아니다.
      // 실행문
      /*
      // 1번 특정데이터를 가져오는 방법1
      console.log($(data).find("item"));
      // 2번 특정데이터를 가져오는 방법2
      console.log($(data).find("item", data));
      */
      $('item', data).each(function(){
        // console.log($(this).find('link', data).text())
        //console.log($('link' ,this).text())
        // link text 가져오기
        let linkText = $('link', this).text();

        // description 가져오기
        let desText = $('description', this).text();
        $('dl').append('<dt><a href="'+linkText+'">'+linkText+'</a></dt><dd>'+desText+'</dd>')
      })
    }
  })

// button에 on class를 추가하여 dl노출을 toggle형태로 구현하시오
$('button').click(function(){
  // 실행구문
  // class 추가 방법 1번
  //$(this).toggleClass('on')

  // class 추가 방법 2번
  let thisClass = $(this).attr('class');
  console.log(thisClass);
  if( thisClass == '' || thisClass == undefined ){
    $(this).addClass('on')
  }else{
    $(this).removeClass('on')
  }

  // hasClass를 이용해서 class 추가 방법
/*
  let btnOn = $(this).hasClass('on');
  if( btnOn == false ){
    $(this).addClass('on')
  }else if( btnOn == true ){
    $(this).removeClass('on')
  }
  */
})


})
