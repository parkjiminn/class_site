$(function(){



  $(".blackt").on("click",function(){

  $(".white").hide();
  $(".mix").hide();
  $(".black").show();
  $(".blackt").show();
  $(".whitet").show();
  $(".mixt").show();
 });
  $(".whitet").on("click",function(){

  $(".black").hide();
  $(".mix").hide();
  $(".white").show();
  $(".blackt").show();
  $(".whitet").show();
  $(".mixt").show();
 });
  $(".mixt").on("click",function(){

  $(".white").hide();
  $(".black").hide();
  $(".mix").show();
  $(".blackt").show();
  $(".whitet").show();
  $(".mixt").show();
 });



});