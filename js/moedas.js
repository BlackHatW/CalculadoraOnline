// cotação das principais moedas //

const moedas = 'USD-BRL,EUR-BRL,JPY-BRL,GBP-BRL,CHF-BRL,CAD-BRL,AUD-BRL,ZAR-BRL,CNY-BRL,ARS-BRL,EUR-USD,GBP-USD,USD-ARS,USD-JPY,USD-CHF,AUD-USD,USD-CAD,USD-CNH';

const options = {
  method: 'GET',
  mode: 'cors',
  cache: 'default'
}

window.onload = () => {
  fetch(`https://economia.awesomeapi.com.br/last/${moedas}`, options)
    .then((response) => {
      response.json()
        .then((data) => {
          for (let i in data) {
            let txt = `${i} , ${data[i].bid} , ${data[i].ask}`;
            console.log(txt);
          }
        })
    })
    .catch(e => console.log(`Deu Erro: ${e}`))
}