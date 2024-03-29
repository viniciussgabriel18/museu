/* Renderiza as cidades em paises */
function renderCidades (pais_id){
    var SelectCidades = document.getElementById('city_id');

    $.getJSON ("./src/services/BuscaPaises.php?busca=cidadePais&idPais="+pais_id, function (response){
        response.forEach (element => {
            let Options = document.createElement('option');
            Options.innerHTML = element.nome;
            Options.value = element.id;
            SelectCidades.appendChild (Options);
        });
    });
}

// function semNome (select, texto){
//     var option = document.createElement ('option');
//     option.innerHTML = texto;
//     option.value = undefined;
//     select.appendChild(option);

// }

/* Busca as informações dos Paises Para o banco e renderiza  */

$(document).ready (()=> {
    $.getJSON ("./src/services/BuscaPaises.php?busca=country", function (response){
        let SelectPaises = document.getElementById ('country_id');
            
            response.forEach(element => {
                let Options = document.createElement ('option');
                Options.innerHTML = element.nome;
                Options.value = element.id;
                SelectPaises.appendChild (Options);
            });
    });
});



/* Esculta modificações dos selects dos Paises */
$('#country_id').change (()=>{

    var idCountry = document.getElementById('country_id').value;
    
    document.getElementById('state_id').innerHTML =  "";
    document.getElementById('city_id').innerHTML = "";

    
    /*Solicita estados de um pais */
    $.getJSON("./src/services/BuscaPaises.php?busca=states&idPais="+idCountry, function (response) {

        if (response == null){
            $('#estado').hide();
            renderCidades (idCountry);
        }else {
            $('#estado').show();

            let SelectStates = document.getElementById('state_id');
            
            response.forEach(element => {
                let Options = document.createElement('option');
                Options.innerHTML = element.nome;
                Options.value = element.id;
                SelectStates.appendChild(Options);
            });
        }
    });
});

/* Esculta alteraçao no select dos paises e renderiza as cidades */
$('#state_id').change(() => {
    var idState = document.getElementById('state_id').value;

    $.getJSON("./src/services/BuscaPaises.php?busca=cities&idState=" + idState, function (response) {
        let SelectCities = document.getElementById('city_id');
        SelectCities.innerHTML = "";
        
        response.forEach(element => {
            let Options = document.createElement('option');
            Options.innerHTML = element.nome;
            Options.value = element.id;
            SelectCities.appendChild(Options);
        });
    });
});


