$(function(){
    // $(".matext").hide();
    // $(".mdtext").hide();
    // $(".nytext").hide();
    // $(".stext").hide();
    $(".backma").hide();
    $(".backmd").hide();
    $(".backny").hide();
    $(".backs").hide();
    $(".logoma").hide();
    $(".logomd").hide();
    $(".logony").hide();
    $(".logos").hide();

    $(".ma").on("click", function(){
        // $(".matext").show();
        $(".backma").show();
        $(".logoma").show();
        // $(".mdtext").hide();
        // $(".nytext").hide();
        // $(".stext").hide();
        $(".backmd").hide();
        $(".backny").hide();
        $(".backs").hide();
        $(".logomd").hide();
        $(".logony").hide();
        $(".logos").hide();
        $(".ma").css("font-weight","900"); 
        $(".ma").css("font-size","larger");
        $(".md").css("font-weight","normal"); 
        $(".md").css("font-size","initial");
        $(".ny").css("font-weight","normal"); 
        $(".ny").css("font-size","initial");
        $(".seoul").css("font-weight","normal"); 
        $(".seoul").css("font-size","initial");

    });

    $(".md").on("click", function(){
        // $(".mdtext").show();
        $(".backmd").show();
        $(".logomd").show();
        // $(".matext").hide();
        // $(".nytext").hide();
        // $(".stext").hide();
        $(".backma").hide();
        $(".backny").hide();
        $(".backs").hide();
        $(".logoma").hide();
        $(".logony").hide();
        $(".logos").hide();
        $(".md").css("font-weight","900"); 
        $(".md").css("font-size","larger");
        $(".ma").css("font-weight","normal"); 
        $(".ma").css("font-size","initial");
        $(".ny").css("font-weight","normal"); 
        $(".ny").css("font-size","initial");
        $(".seoul").css("font-weight","normal"); 
        $(".seoul").css("font-size","initial");
    });

    $(".ny").on("click", function(){
        // $(".nytext").show();
        $(".backny").show();
        $(".logony").show();
        // $(".matext").hide();
        // $(".mdtext").hide();
        // $(".stext").hide();
        $(".backma").hide();
        $(".backmd").hide();
        $(".backs").hide();
        $(".logoma").hide();
        $(".logomd").hide();
        $(".logos").hide();
        $(".ny").css("font-weight","900"); 
        $(".ny").css("font-size","larger");
        $(".md").css("font-weight","normal"); 
        $(".md").css("font-size","initial");
        $(".ma").css("font-weight","normal"); 
        $(".ma").css("font-size","initial");
        $(".seoul").css("font-weight","normal"); 
        $(".seoul").css("font-size","initial");
        // $("body").css("background","#FFCCCC"); //peach
    });

    $(".seoul").on("click", function(){
        // $(".stext").show();
        $(".backs").show();
        $(".logos").show();
        // $(".matext").hide();
        // $(".mdtext").hide();
        // $(".nytext").hide();
        $(".backma").hide();
        $(".backmd").hide();
        $(".backny").hide();
        $(".logoma").hide();
        $(".logomd").hide();
        $(".logony").hide();
        $(".seoul").css("font-weight","900"); 
        $(".seoul").css("font-size","larger");
        $(".ma").css("font-weight","normal"); 
        $(".ma").css("font-size","initial");
        $(".md").css("font-weight","normal"); 
        $(".md").css("font-size","initial");
        $(".ny").css("font-weight","normal"); 
        $(".ny").css("font-size","initial");
    });

});

// function background(){
//     var index = Math.round(Math.random() * 5);
//     var ColorValue = "990000"; // default color - red (index = 0)
//     if(index == 1)
//     ColorValue = "004d00"; //green
//     if(index == 2)
//     ColorValue = "FFFFFF"; //white
//     if(index == 3)
//     ColorValue = "002699"; //blue
//     if(index == 4)
//     ColorValue = "ffd633"; //yellow
//     if(index == 5)
//     ColorValue = "4d2600"; //brown
//     // if(index == 6)
//     // ColorValue = "FFFFFF"; //white
//     // if(index == 7)
//     // ColorValue = "e6b3cc"; //
//     // if(index == 8)
//     // ColorValue = "FFCC99"; //lt orange
//     // if(index == 9)
//     // ColorValue = "CCCCCC"; //lt grey

//     document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
// }