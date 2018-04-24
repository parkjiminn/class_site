$(function(){
    $(".test2").hide();
    $(".test4").hide();
    $(".test6").hide();
    $(".test8").hide();
    $(".test10").hide();
    $(".test12").hide();
    $(".test14").hide();

    $(".test").on("click", function(){
        $(".test2").show();
        $(".test").hide();
        $("body").css("background","#CCAFFF"); //violet
    });

    $(".test2").on("click", function(){
        $(".test").show();
        $(".test2").hide();
    });

    $(".test3").on("click", function(){
        $(".test4").show();
        $(".test3").hide();
        $("body").css("background","#FFCCCC"); //peach
    });

    $(".test4").on("click", function(){
        $(".test3").show();
        $(".test4").hide();
    });

    $(".test5").on("click", function(){
        $(".test6").show();
        $(".test5").hide();
        $("body").css("background","#A6BEFF"); //lt blue
    });

    $(".test6").on("click", function(){
        $(".test5").show();
        $(".test6").hide();
    });

    $(".test7").on("click", function(){
        $(".test8").show();
        $(".test7").hide();
        $("body").css("background","#D5CCBB"); //tan 
    });

    $(".test8").on("click", function(){
        $(".test7").show();
        $(".test8").hide();
    });

    $(".test9").on("click", function(){
        $(".test10").show();
        $(".test9").hide();
        $("body").css("background","#CCCCCC"); //lt grey
    });

    $(".test10").on("click", function(){
        $(".test9").show();
        $(".test10").hide();
    });

    $(".test11").on("click", function(){
        $(".test12").show();
        $(".test11").hide();
        $("body").css("background","#FFCC99"); //lt orange
    });

    $(".test12").on("click", function(){
        $(".test11").show();
        $(".test12").hide();
    });

    $(".test13").on("click", function(){
        $(".test14").show();
        $(".test13").hide();
        $("body").css("background","#e6b3cc"); //lt pink
    });

    $(".test14").on("click", function(){
        $(".test13").show();
        $(".test14").hide();
    });

});

function play(){
       var audio = document.getElementById("sound");
       audio.play();
}
function play2(){
       var audio = document.getElementById("sound2");
       audio.play();
}
function play3(){
       var audio = document.getElementById("sound3");
       audio.play();
}
function play4(){
       var audio = document.getElementById("sound4");
       audio.play();
}
function play5(){
       var audio = document.getElementById("sound5");
       audio.play();
}
function play6(){
       var audio = document.getElementById("sound6");
       audio.play();
}
function play7(){
       var audio = document.getElementById("sound7");
       audio.play();
}

