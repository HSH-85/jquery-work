$(document).ready(function(){
  $("body").dbclick(function(){
    alert("Double Click")
  })
  $("#btn_1").click(function(){
    $("p").hide()
  })
  $("p").mouseenter(function(){
    $(this).css("background-color", "gold")
  })
  $("p").mouseleace(function(){
    $(this).css("background-color", "white")
  })
  $("p").mousedown(function(){
    $(this).css("background-color", "pink")
  })
  $("p").mouseup(function(){
    $(this).css("background-color", "gray")
  })
})