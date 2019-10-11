function AlteraEscolaridade(escol){
    var Options = $('#escolaridade_id').find('option')
    
    for (i in Options){
        Options[i].innerHTML = escol[i];
    }
}

/* Altera o idioma para ingles */
document.getElementById('eua').onclick = () => {

    document.querySelector('label[for=nome_id]').innerHTML = "Name";
    document.getElementById('nome_id').placeholder = "Type your name";
    
    document.querySelector('label[for=idade_id]').innerHTML = "Age";
    document.getElementById('idade_id').placeholder = "Age";
    
    document.querySelector('label[for=escolaridade_id]').innerHTML = "Schooling";
    
    document.querySelector('label[for=instituicao_id]').innerHTML = "Institution";
    document.getElementById('instituicao_id').placeholder = "Institution";
    

    document.querySelector('label[for=turista_id]').innerHTML = "Tourist";
    document.getElementById('turista_id').placeholder = "Tourist";
    document.querySelector('label[for=sim_id]').innerHTML = "Yes"
    document.querySelector('label[for=nao_id]').innerHTML = "Not"
    
    document.querySelector('label[for=comentario_id]').innerHTML = "Comments";

    document.querySelector('label[for=county_id]').innerHTML = "Country";
    document.querySelector('label[for=state_id]').innerHTML = "State";
    document.querySelector('label[for=city_id]').innerHTML = "City";

    var escol = ["Incomplete Elementary School", "Complete primary education",
        "Incomplete high school", "Complete high school", "Incomplete Higher Education",
        "Higher Education Complete"];

    AlteraEscolaridade (escol);
}

/* Altera o idioma para Espanhol */
document.getElementById('espanha').onclick = () => {
    
    document.querySelector('label[for=nome_id]').innerHTML = "Nombre";
    document.getElementById('nome_id').placeholder = "Escribe tu nombre";

    document.querySelector('label[for=idade_id]').innerHTML = "Edad";
    document.getElementById('idade_id').placeholder = "Edad";
    
    document.querySelector('label[for=escolaridade_id]').innerHTML = "Escolaridade";

    document.querySelector('label[for=instituicao_id]').innerHTML = "Institución";
    document.getElementById('instituicao_id').placeholder = "Institución";

    document.querySelector('label[for=turista_id]').innerHTML = "Turista";
    document.getElementById('turista_id').placeholder = "Turista";
    document.querySelector('label[for=sim_id]').innerHTML = "Si"
    document.querySelector('label[for=nao_id]').innerHTML = "No"

    document.querySelector('label[for=comentario_id]').innerHTML = "Comentario";
    
    document.querySelector('label[for=county_id]').innerHTML = "País";
    document.querySelector('label[for=state_id]').innerHTML = "Departamento";
    document.querySelector('label[for=city_id]').innerHTML = "Ciudad";

    var escol = ["Escuela primaria incompleta", "Educación primaria completa",
        "Escuela secundaria incompleta", "Completado la escuela secundaria", "Educación superior incompleta",
        "Educación superior completa"];

    AlteraEscolaridade(escol);
}

/* Altera o Idioma Para Portugês */
document.getElementById('brasil').onclick = () => {
    document.querySelector('label[for=nome_id]').innerHTML = "Nome";
    document.getElementById('nome_id').placeholder = "Digite seu nome";

    document.querySelector('label[for=idade_id]').innerHTML = "Idade";
    document.getElementById('idade_id').placeholder = "Idade";

    document.querySelector('label[for=escolaridade_id]').innerHTML = "Escolaridade";

    document.querySelector('label[for=instituicao_id]').innerHTML = "Instituição";
    document.getElementById('instituicao_id').placeholder = "Instituição";

    document.querySelector('label[for=turista_id]').innerHTML = "Turista";
    document.getElementById('turista_id').placeholder = "Turista";
    document.querySelector('label[for=sim_id]').innerHTML = "Sim"
    document.querySelector('label[for=nao_id]').innerHTML = "Não"

    document.querySelector('label[for=comentario_id]').innerHTML = "Comentario";

    document.querySelector('label[for=county_id]').innerHTML = "Pais";
    document.querySelector('label[for=state_id]').innerHTML = "Estado";
    document.querySelector('label[for=city_id]').innerHTML = "Cidade";

    var escol = ["Ensino Fundamental Completo", "Ensino Fundamental Completo",
        "Ensino Medio Completo", "Ensino Medio Incompleto", "Ensino Superior Incompleto",
        "Ensino Superior Completo"];

    AlteraEscolaridade(escol);    
}