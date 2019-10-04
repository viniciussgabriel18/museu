$.getJSON ("./src/services/BuscaPaises.php?busca=country", function (response){

    let SelectPaises = document.getElementById ('country_id');
        
        response.forEach(element => {
            let Options = document.createElement ('option');
            Options.innerHTML = element.name;
            Options.value = element.id;
            SelectPaises.appendChild (Options);
        });
});

$('#country_id').change (()=>{
    var idCountry = document.getElementById('country_id').value;
    let SelectCities = document.getElementById('city_id');
    let SelectStates = document.getElementById('state_id');
    SelectCities.innerHTML = "";
    SelectStates.innerHTML = "";
    $.getJSON("./src/services/BuscaPaises.php?busca=states&idPais="+idCountry, function (response) {
        let SelectStates = document.getElementById('state_id');
        SelectStates.innerHTML = "";
        response.forEach(element => {
            let Options = document.createElement('option');
            Options.innerHTML = element.name;
            Options.value = element.id;
            SelectStates.appendChild(Options);
        });
    });
});

$('#state_id').change(() => {
    var idState = document.getElementById('state_id').value;
    console.log (idState);
    $.getJSON("./src/services/BuscaPaises.php?busca=cities&idState="+ idState, function (response) {
        let SelectCities = document.getElementById('city_id');
        console.log (response);
        SelectCities.innerHTML = "";
        response.forEach(element => {
            let Options = document.createElement('option');
            Options.innerHTML = element.name;
            Options.value = element.id;
            SelectCities.appendChild(Options);
        });
    });
});
