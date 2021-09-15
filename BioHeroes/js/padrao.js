$(document).ready(function(){
    // VOLTAR AO TOPO
    $("#topo2, #topo").hide()
        window.addEventListener("scroll", function () {
        if ($(window).scrollTop() > 400){
            $("#topo2, #topo").show();
        } else {
            $("#topo2, #topo").hide();
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
        });
    
    
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
    });
});