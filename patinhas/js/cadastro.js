// Validação de formulário
$(document).ready(function(){
    var cpf = 0
    // Nome
    $("#nome").blur(function () {
        if (isNaN($("#nome").val())) {
            $("#nome").css({ borderColor: "green" });
        } else {
            $("#nome").css({ borderColor: "red" })
        }
    });
    
    // Sobrenome
    $("#sobrenome").blur(function () {
        if (isNaN($("#sobrenome").val())) {
            $("#sobrenome").css({ borderColor: "green" });
        } else {
            $("#sobrenome").css({ borderColor: "red"})
        }
    });

    // cpf
    $("#cpf").blur(function () {
        var primeiroDigito
        var segundoDigito
        var verifica
        cpf = []
        cpf = $(this).val()
        cpf = cpf.replace(/\.|-/g, "")
        primeiroDigito = 0
        segundoDigito = 0
        for (i = 0; i <= 8; i++) {
            primeiroDigito += cpf[i] * (10 - i)
        }
        primeiroDigito = (primeiroDigito * 10) % 11
        if (primeiroDigito == 10 || primeiroDigito == 11)
            primeiroDigito = 0

        for (i = 0; i <= 9; i++) {
            segundoDigito += cpf[i] * (11 - i)
        }
        segundoDigito = (segundoDigito * 10) % 11
        if (segundoDigito == 10 || segundoDigito == 11) {
            segundoDigito = 0
        }
        if (cpf[0] == 1 && cpf[1] == 1 && cpf[2] == 1 && cpf[3] == 1 && cpf[4] == 1 && cpf[5] == 1 && cpf[6] == 1 && cpf[7] == 1 && cpf[8] == 1 && cpf[9] == 1 && cpf[10] == 1) {
            $(this).css({ borderColor: "red"})
        }
        else if (cpf[0] == 0 && cpf[1] == 0 && cpf[2] == 0 && cpf[3] == 0 && cpf[4] == 0 && cpf[5] == 0 && cpf[6] == 0 && cpf[7] == 0 && cpf[8] == 0 && cpf[9] == 0 && cpf[10] == 0) {
            $(this).css({ borderColor: "red"})
        }
        else if (primeiroDigito != cpf[9] || segundoDigito != cpf[10] || verifica == true) {
            $(this).css({ borderColor: "red"})
        } else {
            $(this).css({ borderColor: "green"})
        }
    });
});
// VALIDAÇÃO DE SENHA
function alerta(){
    var senha = document.getElementById("senha");
    var caracteres = document.getElementById("senha").value;
    if(caracteres.length < 4){
        senha.style.borderColor = 'red';
    } else{
        senha.style.borderColor = 'green';
    }
}

// VALIDAÇÃO DE EMAIL
function alerta2(){
    var email = document.getElementById("email");
    var caracteres = document.getElementById("email").value;
    
    if(caracteres.length < 4 || !isNaN(caracteres) || caracteres.indexOf('@') == -1 || caracteres.indexOf('@') == 0){
        email.style.borderColor = 'red';
    } else{
        email.style.borderColor = 'green';
    }
}

var situacao = 0;
function validacao(){
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var cpf1 = document.getElementById("cpf");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    
    if (nome.style.borderColor === "green" && sobrenome.style.borderColor === "green" && cpf1.style.borderColor === "green" && email.style.borderColor === "green" && senha.style.borderColor === "green"){
        alert("Dados cadastrados!");
    }else{
        alert("Dados inválidos, tente novamente.");
    }
}