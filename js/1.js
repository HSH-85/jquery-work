$(document).ready(function(){
  $("h1").click(function(){ //그냥 쓰면 태그
    $(this).hide();
  })
  $(".abc").click(function(){ //.을 쓰면 클래스
    $(".abc").hide();
  })
  $("#name").click(function(){  //#을 쓰면 id
    $("#name").hide();
  })
})