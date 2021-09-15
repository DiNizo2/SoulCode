// #region Validações

function valida_nome(x) {

    var nome = x.value

    if (isNaN(nome) && nome.length >= 5) {
        x.style.border = "3px solid green"
        return true;
    }

    else {
        x.style.border = "3px solid red"
        return false;
    }

}

function valida_senha(x) {

    var senha = x.value

    if (senha.length >= 5) {
        x.style.border = "3px solid green"
        return true;
    }

    else {
        x.style.border = "3px solid red"
        return false;
    }

}


function valida_cidade(x) {

    var cidade = x.value.toUpperCase()

    if (isNaN(cidade) && cidade == "RIO BRANCO" || cidade == "MACEIÓ" || cidade == "MACAPÁ" || cidade == "MANAUS" || cidade == "SALVADOR" || cidade == "FORTALEZA" || cidade == "BRASÍLIA" || cidade == "VITÓRIA" || cidade == "GOIÂNIA" || cidade == "SÃO LUIS" || cidade == "CUIABÁ" || cidade == "CAMPO GRANDE" || cidade == "BELO HORIZONTE" || cidade == "BELÉM" || cidade == "JOÃO PESSOA" || cidade == "CURITIBA" || cidade == "RECIFE" || cidade == "TERESINA" || cidade == "RIO DE JANEIRO" || cidade == "NATAL" || cidade == "PORTO ALEGRE" || cidade == "PORTO VELHO" || cidade == "BOA VISTA" || cidade == "FLORIANÓPOLIS" || cidade == "SÃO PAULO" || cidade == "ARACAJU" || cidade == "PALMAS") {
        x.style.border = "3px solid green"
        return true;
    }

    else {
        x.style.border = "3px solid red"
        return false;
    }

}



function valida_email(field) {
    var usuario = field.value.substring(0, field.value.indexOf("@"));
    var dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
        field.style.border = "3px solid green"
        return true;
    }
    else {
        field.style.border = "3px solid red"
        return false;
    }
}

function valida_estado(x) {
    if (x.value == "") {
        x.style.border = "3px solid red"
        return false;
    }
    else {
        x.style.border = "3px solid green"
        return true;
    }
}


class Pessoa { //classe pessoa, todos os objetos pessoa seguirão esse modelo 

    constructor(nome_construtor, email_construtor, estado_construtor, cidade_construtor, senha_construtor) {
        this.nome = nome_construtor; //no objeto pessoa(i) todos os this.variável vão receber o parametro na ordem do construtor 
        this.email = email_construtor;
        this.estado = estado_construtor;
        this.cidade = cidade_construtor;
        this.senha = senha_construtor;

    }
    //Ola (nome ) , seu login é (email) , você tem (idade) se define como uma pessoa do sexo(sexo) e pode usar (CPF) como senha"
    mostrar_dados() {
        // return this.nome + " " + this.email + " " + this.data_nascimento + " " + this.cpf + " " + this.sexo + " " + this.idade
        return `Olá ${this.nome},<br>
        Verifique seu email para para concluir seu cadastro ${this.email}.<br>
        Clique no botão verde para descobrir qual é o posto de troca mais próximo de você.`
    }
}

$("#home").hide();
$("#rotas").hide()
$("#esconde").hide()
function alerta() {

    var nome_input = document.getElementById("nome"); //está recebendo dados do input
    var email_input = document.getElementById("email");
    var estado_input = document.getElementById("estado");
    var cidade_input = document.getElementById("cidade");
    var senha_input = document.getElementById("senha");
    var formValido = true;

    //validando todos os dados do input segundo as funções valida

    if (!valida_nome(nome_input)) {
        formValido = false;
    }

    if (!valida_email(email_input)) {
        formValido = false;
    }

    if (!valida_estado(estado_input)) {
        formValido = false;
    }

    if (!valida_cidade(cidade_input)) {
        formValido = false;
    }

    if (!valida_senha(senha_input)) {
        formValido = false;
    }

    //se qualquer erro retorna falso e não envia o form

    if (!formValido) {
        $("#exampleModalCenter").modal();
        document.getElementById("exampleModalLongTitle").innerHTML = "Erro ao Cadastrar !"
        document.getElementById("texto_moda").innerHTML = "Verifique os campos em vermelho e tente novamente.";
        $("#esconde").show();
        $("#home").hide();
        $("#rotas").hide();
        return formValido;
    }
    else {
        // //mostrar div  do form válido em verde com os dados da pessoa
        var nome = nome_input.value;
        var email = email_input.value;
        var estado = estado_input.value;
        var cidade = cidade_input.value;
        var senha = senha_input.value;

        //variavél novo objeto - pessoa_1 está recebendo uma instância da classe pessoa tornando-se um objeto  (pessoa_1.nome, pessoa_1.email, etcccc)     
        var pessoa_1 = new Pessoa(nome, email, estado, cidade, senha);
        $("#exampleModalCenter").modal();
        document.getElementById("exampleModalLongTitle").innerHTML = "Cadastrado com Sucesso !!!"
        document.getElementById("texto_moda").innerHTML = pessoa_1.mostrar_dados(); //imprimindo os dados se tudo estiver correto 
        $("#home").show();
        $("#rotas").show();
        $("#esconde").hide()
        return true;
    }
}