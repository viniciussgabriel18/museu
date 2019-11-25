$('#table').hide();

$('#gerar').click (()=> {

    $('#table').show();

    var data_inicial = document.getElementById('data_inicial').value;
    var data_final = document.getElementById('data_final').value;
    

    var tbody = document.getElementById('tbody');
    tbody.innerHTML = "";

    $.getJSON ("../src/services/relatorios.php?dataInicial="+data_inicial+"&dataFinal="+data_final, function (response){

        response.forEach(element => {
            var tr = document.createElement('tr');
            
            var td = document.createElement('td');
            td.innerHTML = element.data_cadastro;
            tr.appendChild(td);

            var td = document.createElement('td');
            td.innerHTML = element.nome;
            tr.appendChild(td);

            var td = document.createElement('td');
            td.innerHTML = element.idade;
            tr.appendChild(td);

            var td = document.createElement('td');
            td.innerHTML = element.escolaridade;
            tr.appendChild(td);

            var td = document.createElement('td');
            td.innerHTML = element.instituicao;
            tr.appendChild(td);

            var td = document.createElement('td');
            td.innerHTML = element.profissao;
            tr.appendChild(td);

            var td = document.createElement('td');
            td.innerHTML = element.pais;
            tr.appendChild(td);

            var td = document.createElement('td');
    
            td.innerHTML = element.estado;
            tr.appendChild(td);

            var td = document.createElement('td');
            td.innerHTML = element.cidade;
            tr.appendChild(td);

            tbody.appendChild(tr);
        });
                
    });
});


