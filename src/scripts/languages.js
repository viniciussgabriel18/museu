function removeOptions (){
    for  (var i = 0; i <= 6; i++){
        querySelector
    }
}

function AlteraEscolaridade (escolaridade){
    var select = document.getElementById ('escolaridade_id');
    for (var i of escolaridade){
        var listElement = document.createElement('option')
        listElement.innerHTML = i;
        select.appendChild(listElement);
    }
}


/* Altera o idioma para ingles */
document.getElementById('eua').onclick = () => {

    document.querySelector('label[for=nome_id]').innerHTML = "Name";
    document.getElementById('nome_id').placeholder = "Type your name";
    
    document.querySelector('label[for=idade_id]').innerHTML = "Age";
    document.getElementById('idade_id').placeholder = "Age";
    
    document.querySelector('label[for=escolaridade_id]').innerHTML = "";
    
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

    var list = ['aaa', 'bbb', 'ccc'];
    removeOptions ();
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
    
}