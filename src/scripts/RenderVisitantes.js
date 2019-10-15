$(document).ready ( ()=> {
    $.getJSON("./src/services/DadosAutomaticos.php?opcao=mes", (response) => {
        $('#visitMesVal').html(response.quant);
    });

    $.getJSON("./src/services/DadosAutomaticos.php?opcao=ano", (response) => {
        $('#visitAnoVal').html(response.quant);
    });

    $.getJSON("./src/services/DadosAutomaticos.php?opcao=total", (response) => {
        $('#visitTotalVal').html(response.quant);
    });

    $('#visitAno').html ("Visitantes no ano: ");
    $('#visitMes').html ("Visititantes no Mes: ");
    $('#visitTotal').html ("Visitantes Total: ");
});