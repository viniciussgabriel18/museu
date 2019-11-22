// Define as cores padrões dos botões quando o documento é carregado
$(document).ready (() => {
    document.getElementById('brasil').style.backgroundColor = "#00b440";
    document.getElementById('espanha').style.backgroundColor = "#d1d1d1";
    document.getElementById('eua').style.backgroundColor = "#d1d1d1";

    AlterLabel (1);
    AlterTitulos (1);

    $.getJSON ("./src/services/BuscaLabel.php?idioma="+1, (elemento) => {
        var selectPais = document.getElementById ('country_id');
        var selectEstado = document.getElementById ('state_id');
        var selectCidade = document.getElementById ('city_id');

        criaOption (selectPais, elemento[0].labelPais, "selectpais");
        // criaOption (selectEstado, elemento[0].labelEstado, "selectestado");
        // criaOption (selectCidade, elemento[0].labelCidade, "selectcidade");
    });
    
});

// Função que altera as cores dos botões
function AlterColorButton (brasil, espanha, eua){
    document.getElementById('brasil').style.backgroundColor = brasil;
    document.getElementById('espanha').style.backgroundColor = espanha;
    document.getElementById('eua').style.backgroundColor = eua;
}

// Puxa as labels do banco de dados e altera no Front de acordo com o evento que chamou
function AlterLabel (idioma){
    $.getJSON("./src/services/BuscaLabel.php?idioma="+idioma, function (elemento){
        document.querySelector('label[for=nome_id]').innerHTML = elemento[0].nome;
        document.querySelector('label[for=idade_id]').innerHTML = elemento[0].idade;
        document.querySelector('label[for=escolaridade_id]').innerHTML = elemento[0].escolaridade;
        document.querySelector('label[for=instituicao_id]').innerHTML = elemento[0].instituicao;
        document.querySelector('label[for=profissao_id]').innerHTML = elemento[0].profissao;
        document.querySelector('label[for=comentario_id]').innerHTML = elemento[0].comentario;
        document.querySelector('label[for=county_id]').innerHTML = elemento[0].pais;
        document.querySelector('label[for=state_id]').innerHTML = elemento[0].estado;
        document.querySelector('label[for=city_id]').innerHTML = elemento[0].cidade;        

        // var selectPais = document.getElementById ('country_id');
        // var selectEstado = document.getElementById ('state_id');
        // var selectCidade = document.getElementById ('city_id');

        alterLabelPais (elemento[0]);

        $('button').html (elemento[0].botao);
        $('#visitMes').html(elemento[0].visitMes);
        $('#visitAno').html(elemento[0].visitAno);
        $('#visitTotal').html(elemento[0].visitTotal);
    });
}

// Altera o idioma dos placeholers dos inputs
function AlterPlaceholder (idioma){
    $.getJSON("./src/services/BuscaLabel.php?idioma="+idioma, function (elemento){
        document.getElementById('nome_id').placeholder = elemento[0].nomePlaceholder;
        document.getElementById('idade_id').placeholder = elemento[0].idadePlaceholder;
        document.getElementById('instituicao_id').placeholder = elemento[0].instituicaoPlaceholder;
        document.getElementById ('profissao').placeholder = elemento[0].profissao;
    });
}

// Altera o titulo do museu e as informações no rodapé
function AlterTitulos (idioma) {
    $.getJSON ("./src/services/BuscaTitulos.php?idioma="+idioma, (elemento) => {
        document.getElementById('titulo').innerHTML = elemento[0].tituloMuseu;
        document.getElementById('msg').innerHTML = elemento[0].textoBemVindo;
        document.getElementById ('tfooter').innerHTML = elemento[0].textFooter;
        document.getElementById('msg2').innerHTML = elemento[0].textoPrincipal;
    });
}

function criaOption (select, elemento, selectid){

    var option = document.createElement ('option');
    option.innerHTML = elemento;
    option.value = elemento.id;
    option.setAttribute ('id', selectid);
    select.appendChild(option);
}

function alterLabelPais (elemento){
    if ( $('#coutry_id selected').val () == undefined){
        $('#selectpais').html (elemento.labelPais);
    }
    
    if ( $('#state_id selected').val () == undefined){
        $('#selectestado').html (elemento.labelEstado);
    }
    
    if ( $('#city_id selected').val () == undefined){
        $('#selectcidade').html (elemento.labelCidade);
    }
}

//Busca os as descrições das escolaridades no servidor e renderiza
$.getJSON("./src/services/BuscaEscolaridade.php?", function (response){
    var select = document.getElementById ("escolaridade_id");
    
    response.forEach(element => {
        var option = document.createElement('option');
        option.innerHTML = element.descricao;
        option.value = element.id;
        select.appendChild (option);
    });
})

// Realiza a rotina para alterar o idima da pagina para Inglês
$('#eua').click (function (){

    AlterColorButton ("#d1d1d1", "#d1d1d1", "#686eab");
    $('#escolaridade_id').html("");

    $.getJSON("./src/services/BuscaEscolaridade.php?", function (response){
        var select = document.getElementById ("escolaridade_id");        
        
        response.forEach(element => {
            var option = document.createElement('option');
            option.innerHTML = element.descricao_eng;
            option.value = element.id;
            select.appendChild (option);
        });
    });

    AlterLabel (3);
    AlterPlaceholder(3);
    AlterTitulos (3);
    
});

// Realiza a rotina para alterar o idima da pagina para Espanhol
$('#espanha').click (function (){

    AlterColorButton ("#d1d1d1", "#e02e16", "#d1d1d1" );
    $('#escolaridade_id').html("");

    $.getJSON("./src/services/BuscaEscolaridade.php?", function (response){
        var select = document.getElementById ("escolaridade_id");        
        
        response.forEach(element => {
            var option = document.createElement('option');
            option.innerHTML = element.descricao_esp   ;
            option.value = element.id;
            select.appendChild (option);
        });
    })

    AlterLabel (2);   
    AlterPlaceholder (2)
    AlterTitulos(2);

});

// Realiza a rotina para alterar o idima da pagina para Portugues

$('#brasil').click (function (){
    
    AlterColorButton ("#00b440", "#d1d1d1", "#d1d1d1" );
    $('#escolaridade_id').html("");

    $.getJSON("./src/services/BuscaEscolaridade.php?", function (response){
        var select = document.getElementById ("escolaridade_id");        
        
        response.forEach(element => {
            var option = document.createElement('option');
            option.innerHTML = element.descricao   ;
            option.value = element.id;
            select.appendChild (option);
        });
    })

    AlterLabel (1);    
    AlterPlaceholder (1)
    AlterTitulos (1);

});