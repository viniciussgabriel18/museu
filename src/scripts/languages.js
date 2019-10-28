function AlteraEscolaridade(escol) {
    var Options = $('#escolaridade_id').find('option')

    for (i in Options) {
        Options[i].innerHTML = escol[i];
    }
}


function AlteraVisitantes (mes, ano, total){
    $('#visitMes').html(mes);
    $('#visitAno').html(ano);
    $('#visitTotal').html(total);
}

function standardcolor() {
    /**teste */
    document.getElementById('brasil').style.backgroundColor = "#00b440";
    document.getElementById('espanha').style.backgroundColor = "#d1d1d1";
    document.getElementById('eua').style.backgroundColor = "#d1d1d1";

}

/* Altera o idioma para ingles */
document.getElementById('eua').onclick = () => {

    /**teste */
    document.getElementById('brasil').style.backgroundColor = "#d1d1d1";
    document.getElementById('espanha').style.backgroundColor = "#d1d1d1";
    document.getElementById('eua').style.backgroundColor = "#686eab";

    document.querySelector('label[for=nome_id]').innerHTML = "Name";
    document.getElementById('nome_id').placeholder = "Type your name";

    document.querySelector('label[for=idade_id]').innerHTML = "Age";
    document.getElementById('idade_id').placeholder = "Age";

    document.querySelector('label[for=escolaridade_id]').innerHTML = "Schooling";

    document.querySelector('label[for=instituicao_id]').innerHTML = "Institution";
    document.getElementById('instituicao_id').placeholder = "Institution";


    document.querySelector('#turistaLabel').innerHTML = "Tourist";

    document.querySelector('label[for=comentario_id]').innerHTML = "Comments";

    document.querySelector('label[for=county_id]').innerHTML = "Country";
    document.querySelector('label[for=state_id]').innerHTML = "State";
    document.querySelector('label[for=city_id]').innerHTML = "City";

    var escol = ["Incomplete Elementary School", "Complete primary education",
        "Incomplete high school", "Complete high school", "Incomplete Higher Education",
        "Higher Education Complete"];

    AlteraEscolaridade(escol);
    AlteraVisitantes("Visitors to the Month: ", "Visitors in the year: ", "Total Visitors: ");
    $('button').html("Save");
}

/* Altera o idioma para Espanhol */
document.getElementById('espanha').onclick = () => {
    /**teste */
    document.getElementById('brasil').style.backgroundColor = "#d1d1d1";
    document.getElementById('espanha').style.backgroundColor = "#e02e16";
    document.getElementById('eua').style.backgroundColor = "#d1d1d1";

    document.querySelector('label[for=nome_id]').innerHTML = "Nombre";
    document.getElementById('nome_id').placeholder = "Escribe tu nombre";

    document.querySelector('label[for=idade_id]').innerHTML = "Edad";
    document.getElementById('idade_id').placeholder = "Edad";

    document.querySelector('label[for=escolaridade_id]').innerHTML = "Escolaridade";

    document.querySelector('label[for=instituicao_id]').innerHTML = "Institución";
    document.getElementById('instituicao_id').placeholder = "Institución";

    document.querySelector('#turistaLabel').innerHTML = "Turista";


    document.querySelector('label[for=comentario_id]').innerHTML = "Comentario";

    document.querySelector('label[for=county_id]').innerHTML = "País";
    document.querySelector('label[for=state_id]').innerHTML = "Departamento";
    document.querySelector('label[for=city_id]').innerHTML = "Ciudad";


    var escol = ["Escuela primaria incompleta", "Educación primaria completa",
        "Escuela secundaria incompleta", "Completado la escuela secundaria", "Educación superior incompleta",
        "Educación superior completa"];

    AlteraEscolaridade(escol);
    AlteraVisitantes("Visitantes en el mes: ", "Visitantes en el año: ", "Visitantes totales: ");
    $('button').html("Guardar");

}

/* Altera o Idioma Para Portugês */
document.getElementById('brasil').onclick = () => {
    /**teste */
    document.getElementById('brasil').style.backgroundColor = "#00b440";
    document.getElementById('espanha').style.backgroundColor = "#d1d1d1";
    document.getElementById('eua').style.backgroundColor = "#d1d1d1";

    document.querySelector('label[for=nome_id]').innerHTML = "Nome";
    document.getElementById('nome_id').placeholder = "Digite seu nome";

    document.querySelector('label[for=idade_id]').innerHTML = "Idade";
    document.getElementById('idade_id').placeholder = "Idade";

    document.querySelector('label[for=escolaridade_id]').innerHTML = "Escolaridade";

    document.querySelector('label[for=instituicao_id]').innerHTML = "Instituição";
    document.getElementById('instituicao_id').placeholder = "Instituição";

    document.querySelector('#turistaLabel').innerHTML = "Turista";

    document.querySelector('label[for=comentario_id]').innerHTML = "Comentario";

    document.querySelector('label[for=county_id]').innerHTML = "Pais";
    document.querySelector('label[for=state_id]').innerHTML = "Estado";
    document.querySelector('label[for=city_id]').innerHTML = "Cidade";

    $('button').html ("Salvar");

    var escol = ["Ensino Fundamental Incompleto", "Ensino Fundamental Completo",
        "Ensino Medio Completo", "Ensino Medio Incompleto", "Ensino Superior Incompleto",
        "Ensino Superior Completo"];
    
    AlteraEscolaridade(escol);
    AlteraVisitantes("Visititantes no Mes: ", "Visitantes no ano: ", "Visitantes Total: ");

}