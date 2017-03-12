$(document).ready(function(){
    num1 = 0;
    num2 = 0;
    op = 0;
    total = 0;
    equalHitted = 0;
    //1
    $("button#d1").click(function(){
        if (equalHitted == 1){
        $("#visor").text("");
        equalHitted = 0;
        }
        $("#visor").text($("#visor").text() + "1");
    });
    //2
    $("button#d2").click(function(){
        if (equalHitted == 1){
        $("#visor").text("");
        equalHitted = 0;
        }
        $("#visor").text($("#visor").text() + "2");
    });
    //3
    $("button#d3").click(function(){
        if (equalHitted == 1){
        $("#visor").text("");
        equalHitted = 0;
        }
        $("#visor").text($("#visor").text() + "3");
    });
    //4
    $("button#d4").click(function(){
        if (equalHitted == 1){
        $("#visor").text("");
        equalHitted = 0;
        }
        $("#visor").text($("#visor").text() + "4");
    });
    //5
    $("button#d5").click(function(){
        if (equalHitted == 1){
        $("#visor").text("");
        equalHitted = 0;
        }
        $("#visor").text($("#visor").text() + "5");
    });
    //6
    $("button#d6").click(function(){
        if (equalHitted == 1){
        $("#visor").text("");
        equalHitted = 0;
        }
        $("#visor").text($("#visor").text() + "6");
    });
    //7
    $("button#d7").click(function(){
        if (equalHitted == 1){
        $("#visor").text("");
        equalHitted = 0;
        }
        $("#visor").text($("#visor").text() + "7");
    });
    //8
    $("button#d8").click(function(){
        if (equalHitted == 1){
        $("#visor").text("");
        equalHitted = 0;
        }
        $("#visor").text($("#visor").text() + "8");
    });
    //9
    $("button#d9").click(function(){
        if (equalHitted == 1){
        $("#visor").text("");
        equalHitted = 0;
        }
        $("#visor").text($("#visor").text() + "9");
    });
    //0
    $("button#d0").click(function(){
        if (equalHitted == 1){
        $("#visor").text("");
        equalHitted = 0;
        }
        $("#visor").text($("#visor").text() + "0");
    });

    //
    //
    //+
    $("button#sum").click(function(){
        op = 1;
        num1 = parseInt($("#visor").text());
        $("#visor").text("");
    });
    //-
    $("button#sub").click(function(){
        op = 2;
        num1 = parseInt($("#visor").text());
        $("#visor").text("");
    });
    //*
    $("button#mul").click(function(){
        op = 3;
        num1 = parseInt($("#visor").text());
        $("#visor").text("");
    });
    ///
    $("button#div").click(function(){
        op = 4;
        num1 = parseInt($("#visor").text());
        $("#visor").text("");
    });


    $("button#equal").click(function(){
        equalHitted++;
        num2 = parseInt($("#visor").text());
        switch (op) {
            case 1:
            $("#visor").text(num1 + num2);
            break;
            case 2:
            $("#visor").text(num1 - num2);
            break;
            case 3:
            $("#visor").text(num1 * num2);
            break;
            case 4:
            $("#visor").text(num1 / num2);
            break;
        }
    });

    //CLEAR
    $("button#clear").click(function(){
        $("#visor").text("");
        num1 = 0;
        num1 = 0;
        op = 0;
        total = 0;
        equalHitted = 0;
    });
});