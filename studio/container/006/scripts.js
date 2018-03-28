$(function(){

 $(".draggable").on("click",function(){

  $(".swing").hide();
  $(".ground").hide();
  $(".wall").hide();
  $(".draggable").show();
});


 $(".swing").on("click",function(){

  $(".wall").hide();
  $(".ground").hide();
  $(".draggable").hide();
  $(".swing").show();

 });

 $(".ground").on("click",function(){

  $(".swing").hide();
  $(".wall").hide();
  $(".draggable").hide();
  $(".ground").show();

 });

 $(".wall").on("click",function(){

  $(".swing").hide();
  $(".ground").hide();
  $(".draggable").hide();
  $(".wall").show();

 });

 $( ".draggable" ).draggable();
 
});

