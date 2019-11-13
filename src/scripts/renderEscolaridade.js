$.getJSON("./src/services/BuscaEscolaridade.php?", function (response){
    var select = document.getElementById ("escolaridade_id");
    console.log (response);
    

    response.forEach(element => {
        var option = document.createElement('option');
        option.innerHTML = element.descricao;
        option.value = element.id;
        select.appendChild (option);
    });
})

