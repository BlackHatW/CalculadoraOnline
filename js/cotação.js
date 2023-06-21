// cotação das principais moedas //
const tabela = document.querySelector("#cotações");


const moedas = 'USD-BRL,EUR-BRL,JPY-BRL,GBP-BRL,CHF-BRL,CAD-BRL,AUD-BRL,ZAR-BRL,CNY-BRL,ARS-BRL,EUR-USD,GBP-USD,USD-ARS,USD-JPY,USD-CHF,AUD-USD,USD-CAD,USD-CNH';

const options = {
  method: 'GET',
  mode: 'cors',
  cache: 'default'
}


function preencherTabela(codigo, name, bid, ask, pctChange, high, low, create_date){
    let cotação_tempo = document.querySelector("#cotação-tempo");
    cotação_tempo.innerText = "Atualizado em: " + create_date ;
    let  t_body = tabela.querySelector("tbody")
    let  t_row =   document.createElement("tr");
    let t_data0 =  document.createElement("td") ; t_data0.innerText = codigo ;
    let t_data1 =  document.createElement("td") ; t_data1.innerText = name ;
    let t_data2 =  document.createElement("td");  t_data2.innerText = bid ;
    let t_data3 =  document.createElement("td");  t_data3.innerText = ask ;
    let t_data4 =  document.createElement("td");  t_data4.innerText = pctChange ;
    let t_data5 =  document.createElement("td");  t_data5.innerText = high ;
    let t_data6 =  document.createElement("td");  t_data6.innerText = low ;
    t_body.appendChild(t_row);
    t_row.appendChild(t_data0);
    t_row.appendChild(t_data1);
    t_row.appendChild(t_data2);
    t_row.appendChild(t_data3);
    t_row.appendChild(t_data4);
    t_row.appendChild(t_data5);
    t_row.appendChild(t_data6);

}


  fetch(`https://economia.awesomeapi.com.br/last/${moedas}`, options)
    .then((response) => {
      response.json()
        .then((data) => {
          for (let i in data) {
              preencherTabela(i ,data[i].name  ,data[i].bid ,data[i].ask ,data[i].pctChange ,data[i].high ,data[i].low, data[i].create_date);
          }
        })
    })
    .catch(e => console.log(`Deu Erro: ${e}`))
