$(function(){
    $(".test2").hide();
    $(".test3").hide();
    $(".test4").hide();
    $(".test5").hide();
    $(".test6").hide();
    $(".test7").hide();
    $(".test8").hide();
    $(".test9").hide();
    $(".test10").hide();
    $(".test11").hide();
    $(".test12").hide();
    $(".test13").hide();
    $(".test14").hide();

    $(".test").on("click", function(){
        $(".test2").show();
        $(".test").hide();
    });

    $(".test2").on("click", function(){
        $(".test3").show();
        $(".test").hide();
        $(".test2").hide();
        $(".test4").hide();
        $("body").css("background","#CCAFFF"); //violet
    });

    $(".test3").on("click", function(){
        $(".test4").show();
        $(".test").hide();
        $(".test2").hide();
        $(".test3").hide();
    });

    $(".test4").on("click", function(){
        $(".test5").show();
        $(".test").hide();
        $(".test2").hide();
        $(".test3").hide();
        $(".test4").hide();
        $("body").css("background","#FFCCCC"); //peach
    });

    $(".test5").on("click", function(){
        $(".test6").show();
        $(".test").hide();
        $(".test2").hide();
        $(".test3").hide();
        $(".test4").hide();
        $(".test5").hide();
    });

    $(".test6").on("click", function(){
        $(".test7").show();
        $(".test").hide();
        $(".test2").hide();
        $(".test3").hide();
        $(".test4").hide();
        $(".test5").hide();
        $(".test6").hide();
        $("body").css("background","#A6BEFF"); //lt blue
    });

    $(".test7").on("click", function(){
        $(".test8").show();
        $(".test").hide();
        $(".test2").hide();
        $(".test3").hide();
        $(".test4").hide();
        $(".test5").hide();
        $(".test6").hide();
        $(".test7").hide();
    });

    $(".test8").on("click", function(){
        $(".test9").show();
        $(".test").hide();
        $(".test2").hide();
        $(".test3").hide();
        $(".test4").hide();
        $(".test5").hide();
        $(".test6").hide();
        $(".test7").hide();
        $(".test8").hide();
        $("body").css("background","#D5CCBB"); //tan 
    });

    $(".test9").on("click", function(){
        $(".test10").show();
        $(".test").hide();
        $(".test2").hide();
        $(".test3").hide();
        $(".test4").hide();
        $(".test5").hide();
        $(".test6").hide();
        $(".test7").hide();
        $(".test8").hide();
        $(".test9").hide();
    });

    $(".test10").on("click", function(){
        $(".test11").show();
        $(".test").hide();
        $(".test2").hide();
        $(".test3").hide();
        $(".test4").hide();
        $(".test5").hide();
        $(".test6").hide();
        $(".test7").hide();
        $(".test8").hide();
        $(".test9").hide();
        $(".test10").hide();
        $("body").css("background","#FFCC99"); //lt orange
    });

    $(".test11").on("click", function(){
        $(".test12").show();
        $(".test").hide();
        $(".test2").hide();
        $(".test3").hide();
        $(".test4").hide();
        $(".test5").hide();
        $(".test6").hide();
        $(".test7").hide();
        $(".test8").hide();
        $(".test9").hide();
        $(".test10").hide();
        $(".test11").hide();
    });

    $(".test12").on("click", function(){
        $(".test13").show();
        $(".test").hide();
        $(".test2").hide();
        $(".test3").hide();
        $(".test4").hide();
        $(".test5").hide();
        $(".test6").hide();
        $(".test7").hide();
        $(".test8").hide();
        $(".test9").hide();
        $(".test10").hide();
        $(".test11").hide();
        $(".test12").hide();
        $("body").css("background","#e6b3cc"); //lt pink
    });

    $(".test13").on("click", function(){
        $(".test14").show();
        $(".test").hide();
        $(".test2").hide();
        $(".test3").hide();
        $(".test4").hide();
        $(".test5").hide();
        $(".test6").hide();
        $(".test7").hide();
        $(".test8").hide();
        $(".test9").hide();
        $(".test10").hide();
        $(".test11").hide();
        $(".test12").hide();
        $(".test13").hide();
    });

    $(".test14").on("click", function(){
        $(".test").show();
        $(".test2").hide();
        $(".test3").hide();
        $(".test4").hide();
        $(".test5").hide();
        $(".test6").hide();
        $(".test7").hide();
        $(".test8").hide();
        $(".test9").hide();
        $(".test10").hide();
        $(".test11").hide();
        $(".test12").hide();
        $(".test13").hide();
        $(".test14").hide();
        $("body").css("background","#c2d6d6"); //lt green
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
