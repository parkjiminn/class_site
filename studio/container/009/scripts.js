$(function(){

 $(".ground").on("click",function(){

  $(".swing").hide();
  $(".hang").hide();
  $(".wall").hide();
  $(".draggable").hide();
  $(".ground").show();
 });

 $(".wall").on("click",function(){

  $(".swing").hide();
  $(".hang").hide();
  $(".ground").hide();
  $(".draggable").hide();
  $(".wall").show();
 });

 $( ".draggable" ).draggable();

 $(".hang").on("click",function(){

  $(".hang").addClass("swing")
 });
 
});

