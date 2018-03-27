$(function(){

 $(".move").on("click",function(){

  $(".hang").hide();
  $(".ground").hide();
  $(".wall").hide();
  $(".move").show();
});


 $(".hang").on("click",function(){

  $(".wall").hide();
  $(".ground").hide();
  $(".move").hide();
  $(".swing").show();

 });

 $(".ground").on("click",function(){

  $(".hang").hide();
  $(".wall").hide();
  $(".move").hide();
  $(".ground").show();

 });

 $(".wall").on("click",function(){

  $(".hang").hide();
  $(".ground").hide();
  $(".move").hide();
  $(".wall").show();

 });

});

