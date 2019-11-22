$('#gerar').click (()=> {
    var data_inicial = document.getElementById('data_inicial').value;
    var data_final = document.getElementById('data_final').value;



    
    var tbody = document.getElementsByTagName('tbody')[0];
    console.log (tbody);
    
    $.getJSON ("./src/services/relatorios.php?dataInical="+data_inicial+"&dataFinal="+data_final, function (response){
        response.forEach(element => {
            var tr = document.createElement ('tr');
            var th = document.createElement ('th');
            th.setAttribute('scope','row')
            tr.appendChild (th);
            var td = document.createElement ('td');
            td.innerHTML=element.nome;
            tr.appendChild(td);
            td.innerHTML=element.idade;
            tr.appendChild(td);
            td.innerHTML=element.escolaridade;
            tr.appendChild(td);
            td.innerHTML=element.instituicao;
            tr.appendChild(td);
            td.innerHTML=element.profissao;
            tr.appendChild(td);
            td.innerHTML=element.pais;
            tr.appendChild(td);
            td.innerHTML=element.estado;
            tr.appendChild(td);
            td.innerHTML=element.cidade;
            tbody.appendChild(tr);
        });
        
    });
});