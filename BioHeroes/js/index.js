$(document).ready(function(){
    $("#video").hide();
    $("iframe").hide();
    $("#fechar").hide();
    $("#botao_video").click(function(){
        
                $("#video").show();
                $("iframe").show();
                $("#fechar").show();
        
    });

    $("#fechar").click(function(){
        $("#video").hide();
        $("iframe").hide();
        $("#fechar").hide();
    })

    window.addEventListener('resize', function () {
        var tam = $(window).width();
        if (tam , 769) {
            
            $("#video").hide()
            $("iframe").hide()
            $("#fechar").hide()
        }
    });

    
});

