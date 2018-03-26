$(function(){

 $(".black").on("click",function(){

  $(".white").hide();
  $(".mix").hide();
  $(".black").show();
});


 $(".white").on("click",function(){

  $(".mix").hide();
  $(".black").hide();
  $(".white").show();

 });

 $(".mix").on("click",function(){

  $(".white").hide();
  $(".black").hide();
  $(".mix").show();

 });

});