$(document).ready ( ()=> {
    $.getJSON("./src/services/DadosAutomaticos.php?opcao=mes", (response) => {
        $('#visitMes').html("Visitantes no Mes: "+response.quant);
    });

    $.getJSON("./src/services/DadosAutomaticos.php?opcao=ano", (response) => {
        $('#visitAno').html("Visitantes no Ano:" + response.quant);
    });

    $.getJSON("./src/services/DadosAutomaticos.php?opcao=total", (response) => {
        $('#visitTotal').html("Total de Visitantes:" + response.quant);
    });
});