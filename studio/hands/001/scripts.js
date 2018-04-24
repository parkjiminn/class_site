// function change() {
//    var img1 = "2.png",
//        img2 = "1.png";
//    var imgElement = document.getElementById('test');
   
//    imgElement.src = (imgElement.src === img1)? img2 : img1;
// }
// $(function () {
//     var images = ['1.png', '4.png'];
//     $('.headImg').css({
//         'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')'
//     });
// });


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
        $(".test").show();
        $(".test2").hide();
    });

    $(".test2").on("click", function(){
        $(".test3").show();
        $(".test").hide();
        $(".test2").hide();
        $(".test4").hide();
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

function background(){
    var index = Math.round(Math.random() * 9);
    var ColorValue = "FFFFFF"; // default color - white (index = 0)
    if(index == 1)
    ColorValue = "FFCCCC"; //peach
    if(index == 2)
    ColorValue = "CCAFFF"; //violet
    if(index == 3)
    ColorValue = "A6BEFF"; //lt blue
    if(index == 4)
    ColorValue = "ccebff"; //lt blue2
    if(index == 5)
    ColorValue = "D5CCBB"; //tan
    if(index == 6)
    ColorValue = "c2d6d6"; //lt green
    if(index == 7)
    ColorValue = "e6b3cc"; //
    if(index == 8)
    ColorValue = "FFCC99"; //lt orange
    if(index == 9)
    ColorValue = "CCCCCC"; //lt grey

    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
}
