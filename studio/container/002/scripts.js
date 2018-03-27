$(function(){

 $(".moving").on("click",function(){

  $(".swing").hide();
  $(".ground").hide();
  $(".wall").hide();
  $(".moving").show();
  $(".moving2").show();
});

 $(".moving2").on("click",function(){

  $(".swing").hide();
  $(".ground").hide();
  $(".wall").hide();
  $(".moving").show();
  $(".moving2").show();
});


 $(".swing").on("click",function(){

  $(".wall").hide();
  $(".ground").hide();
  $(".moving").hide();
  $(".moving2").hide();
  $(".swing").show();

 });

 $(".ground").on("click",function(){

  $(".swing").hide();
  $(".wall").hide();
  $(".moving").hide();
  $(".moving2").hide();
  $(".ground").show();

 });

 $(".wall").on("click",function(){

  $(".swing").hide();
  $(".ground").hide();
  $(".moving").hide();
  $(".moving2").hide();
  $(".wall").show();

 });

});

