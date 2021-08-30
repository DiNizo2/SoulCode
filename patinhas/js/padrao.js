$(document).ready(function(){
    // VOLTAR AO TOPO
    $("#topo2").hide()
        window.addEventListener("scroll", function () {
        if ($(window).scrollTop() > 400){
            $("#topo2").show();
        } else {
            $("#topo2").hide();
        }
    });

    
    
    // Botoes da fonte
    var fontSize = parseInt($("body").css("font-size"));
    var auxFont = 0
    
        $("#btnFontMaior").click(function() {
            if (auxFont < 3){
                fontSize = fontSize + 1
                auxFont++
                $("body").css({"font-size": fontSize});
                $("p").css({"font-size": fontSize});
                $("button").css({"font-size": fontSize});
                $(".btn").css({"font-size": fontSize});
                $("li").css({"font-size": fontSize});
            }
        })
    
    
    $("#btnFontMenor").click(function() {
        if (auxFont > 0) {
            fontSize = fontSize - 1
            auxFont--
            $("body").css({"font-size": fontSize});
            $("p").css({"font-size": fontSize});
            $("button").css({"font-size": fontSize});
            $(".btn").css({"font-size": fontSize});
            $("li").css({"font-size": fontSize});
        }
    })

    // Botão Noturno
    var noturnoFlag = false;
    $("#noturno").click(function () {
        if (noturnoFlag == false) {
            $("body").css("background", "#6a7379");
            noturnoFlag = true
        } else if (noturnoFlag == true) {
            $("body").css("background", "#edf4f8");
            noturnoFlag = false
        }
    });


    // PRIORIDADE DO SUBMENU
    $("#serviços").click(function(){
        $("#botoes").css({position: "static"});
    });
    $(".dropdown-item, body").click(function(){
        $("#botoes").css({position: "sticky"});
    });
});

