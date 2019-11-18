// Define as cores padrões dos botões quando o documento é carregado
$(document).ready (() => {
    document.getElementById('brasil').style.backgroundColor = "#00b440";
    document.getElementById('espanha').style.backgroundColor = "#d1d1d1";
    document.getElementById('eua').style.backgroundColor = "#d1d1d1";

});

// Função que altera as cores dos botões
function AlterColorButton (brasil, espanha, eua){
    document.getElementById('brasil').style.backgroundColor = brasil;
    document.getElementById('espanha').style.backgroundColor = espanha;
    document.getElementById('eua').style.backgroundColor = eua;

}

// Puxa as labels do banco de dados e altera no Front de acordo com o evento que chamou
function AlterLabel (idioma){
    $.getJSON("./src/services/BuscaLabel.php?id="+idioma, function (elemento){
        document.querySelector('label[for=nome_id]').innerHTML = elemento[0].nome;
        document.querySelector('label[for=idade_id]').innerHTML = elemento[0].idade;
        document.querySelector('label[for=escolaridade_id]').innerHTML = elemento[0].escolaridade;
        document.querySelector('label[for=instituicao_id]').innerHTML = elemento[0].instituicao;
        document.querySelector('#turistaLabel').innerHTML = elemento[0].turista;
        document.querySelector('label[for=comentario_id]').innerHTML = elemento[0].comentario;
        document.querySelector('label[for=county_id]').innerHTML = elemento[0].pais;
        document.querySelector('label[for=state_id]').innerHTML = elemento[0].estado;
        document.querySelector('label[for=city_id]').innerHTML = elemento[0].cidade;
        $('button').html (elemento[0].botao);
    });
}

// Puxa as informações dos visitates do banco de dados e renderiza
function AlterVisitantes (idioma){
    $.getJSON("./src/services/BuscaLabel.php?id="+idioma, function (elemento){
        $('#visitMes').html(elemento[0].visitMes);
        $('#visitAno').html(elemento[0].visitAno);
        $('#visitTotal').html(elemento[0].visitTotal);
    });
}

function AlterPlaceholder (idioma){
    // console.log ("Vincius");
    $.getJSON("./src/services/BuscaLabel.php?id="+idioma, function (elemento){
        console.log (elemento);

        document.getElementById('nome_id').placeholder = elemento[0].nomePlaceholder;
        document.getElementById('idade_id').placeholder = elemento[0].idadePlaceholder;
        document.getElementById('instituicao_id').placeholder = elemento[0].instituicaoPlaceholder;
    });
}

$.getJSON("./src/services/BuscaEscolaridade.php?", function (response){
    var select = document.getElementById ("escolaridade_id");
    
    response.forEach(element => {
        var option = document.createElement('option');
        option.innerHTML = element.descricao;
        option.value = element.id;
        select.appendChild (option);
    });
})

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
    AlterVisitantes (3);
    AlterPlaceholder(3);
    
    
});


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
    AlterVisitantes (2)
    AlterPlaceholder (2)
});

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
    AlterVisitantes (1)
    AlterPlaceholder (1)

});