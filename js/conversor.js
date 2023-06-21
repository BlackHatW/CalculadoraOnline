const select_grandesa = document.querySelector('.grandesa');
const select_prefixo = document.querySelectorAll('.prefixo');
const text_box = document.querySelectorAll('.text-box');

let file_json = undefined ;

function select_load(){
     select_grandesa.innerHTML = "";
     select_prefixo[0].innerHTML= "";
     select_prefixo[1].innerHTML= "";

     for(let i in file_json){
        select_grandesa.innerHTML += `<option value="${i}" >${i}</option>`;
     }
 
     for(let i in file_json){
         if (i == select_grandesa.value ){
              let u = file_json[i].unidades;
              for(let item in u ){
                  
                  select_prefixo[0].innerHTML += `<option>${u[item]}</option>`;
                  select_prefixo[1].innerHTML += `<option>${u[item]}</option>`;
              }
         }
     }

   
}

function converter(){
    let grandesa = select_grandesa.value ;
    let  unidade1 = select_prefixo[0].value ;
    let unidade2 = select_prefixo[1].value ;
    let valor = parseFloat(text_box[0].value);
    let convertedValue = 0 ;
    
    if (unidade1 == unidade2){
        convertedValue = valor ;
        return convertedValue ;
    }

    switch(grandesa){

        case "comprimento":
            if (unidade1 === 'milímetro' && unidade2 === 'centímetro') { convertedValue = valor / 10; }
            if (unidade1 === 'milímetro' && unidade2 === 'metro') { convertedValue = valor / 1000; }
            if (unidade1 === 'milímetro' && unidade2 === 'quilômetro') { convertedValue = valor / 1000000; }
            if (unidade1 === 'milímetro' && unidade2 === 'milhas') { convertedValue = valor / (1.609 * (10 ** 6)); }
            if (unidade1 === 'milímetro' && unidade2 === 'jardas') { convertedValue = valor / 914; }
            if (unidade1 === 'milímetro' && unidade2 === 'pé') { convertedValue = valor / 305; }
            if (unidade1 === 'milímetro' && unidade2 === 'polegada') { convertedValue = valor / 24.5; }
            if (unidade1 === 'milímetro' && unidade2 === 'milhas náuticas') { convertedValue = valor / (1.852 * (10 ** 6)); }

            if (unidade1 === 'centímetro' && unidade2 === 'milímetro') { convertedValue = valor * 10; }
            if (unidade1 === 'centímetro' && unidade2 === 'metro') { convertedValue = valor / 100; }
            if (unidade1 === 'centímetro' && unidade2 === 'quilômetro') { convertedValue = valor / 100000; }
            if (unidade1 === 'centímetro' && unidade2 === 'milhas') { convertedValue = valor / 160934; }
            if (unidade1 === 'centímetro' && unidade2 === 'jardas') { convertedValue = valor / 91.44; }
            if (unidade1 === 'centímetro' && unidade2 === 'pé') { convertedValue = valor / 30.48; }
            if (unidade1 === 'centímetro' && unidade2 === 'polegada') { convertedValue = valor / 2.54; }
            if (unidade1 === 'centímetro' && unidade2 === 'milhas náuticas') { convertedValue = valor / 185200; }

            if (unidade1 === 'metro' && unidade2 === 'milímetro') { convertedValue = valor * 1000; }
            if (unidade1 === 'metro' && unidade2 === 'centímetro') { convertedValue = valor * 100; }
            if (unidade1 === 'metro' && unidade2 === 'quilômetro') { convertedValue = valor / 1000; }
            if (unidade1 === 'metro' && unidade2 === 'milhas') { convertedValue = valor / 1609; }
            if (unidade1 === 'metro' && unidade2 === 'jardas') { convertedValue = valor * 1.094; }
            if (unidade1 === 'metro' && unidade2 === 'pé') { convertedValue = valor * 3.281; }
            if (unidade1 === 'metro' && unidade2 === 'polegada') { convertedValue = valor * 39.37; }
            if (unidade1 === 'metro' && unidade2 === 'milhas náuticas') { convertedValue = valor / 1852; }

            if (unidade1 === 'quilômetro' && unidade2 === 'milímetro') { convertedValue = valor * 1000000; }
            if (unidade1 === 'quilômetro' && unidade2 === 'centímetro') { convertedValue = valor * 100000; }
            if (unidade1 === 'quilômetro' && unidade2 === 'metro') { convertedValue = valor * 1000; }
            if (unidade1 === 'quilômetro' && unidade2 === 'milhas') { convertedValue = valor / 1.609; }
            if (unidade1 === 'quilômetro' && unidade2 === 'jardas') { convertedValue = valor * 1094; }
            if (unidade1 === 'quilômetro' && unidade2 === 'pé') { convertedValue = valor * 3281; }
            if (unidade1 === 'quilômetro' && unidade2 === 'polegada') { convertedValue = valor * 39370; }
            if (unidade1 === 'quilômetro' && unidade2 === 'milhas náuticas') { convertedValue = valor / 1.852; }

            if (unidade1 === 'milhas' && unidade2 === 'milímetro') { convertedValue = valor * (1.609 * (10 ** 6)); }
            if (unidade1 === 'milhas' && unidade2 === 'centímetro') { convertedValue = valor * 160934; }
            if (unidade1 === 'milhas' && unidade2 === 'metro') { convertedValue = valor * 1609; }
            if (unidade1 === 'milhas' && unidade2 === 'quilômetro') { convertedValue = valor * 1.609; }
            if (unidade1 === 'milhas' && unidade2 === 'jardas') { convertedValue = valor * 1760; }
            if (unidade1 === 'milhas' && unidade2 === 'pé') { convertedValue = valor * 5280; }
            if (unidade1 === 'milhas' && unidade2 === 'polegada') { convertedValue = valor * 63360; }
            if (unidade1 === 'milhas' && unidade2 === 'milhas náuticas') { convertedValue = valor / 1.151; }

            if (unidade1 === 'jardas' && unidade2 === 'milímetro') { convertedValue = valor * 914; }
            if (unidade1 === 'jardas' && unidade2 === 'centímetro') { convertedValue = valor * 91.44; }
            if (unidade1 === 'jardas' && unidade2 === 'metro') { convertedValue = valor / 1.094; }
            if (unidade1 === 'jardas' && unidade2 === 'quilômetro') { convertedValue = valor / 1094; }
            if (unidade1 === 'jardas' && unidade2 === 'milhas') { convertedValue = valor / 1760; }
            if (unidade1 === 'jardas' && unidade2 === 'pé') { convertedValue = valor * 3; }
            if (unidade1 === 'jardas' && unidade2 === 'polegada') { convertedValue = valor * 36; }
            if (unidade1 === 'jardas' && unidade2 === 'milhas náuticas') { convertedValue = valor / 2025; }

            if (unidade1 === 'pé' && unidade2 === 'milímetro') { convertedValue = valor * 304.8; }
            if (unidade1 === 'pé' && unidade2 === 'centímetro') { convertedValue = valor * 30.48; }
            if (unidade1 === 'pé' && unidade2 === 'metro') { convertedValue = valor / 3.281; }
            if (unidade1 === 'pé' && unidade2 === 'quilômetro') { convertedValue = valor / 3281; }
            if (unidade1 === 'pé' && unidade2 === 'milhas') { convertedValue = valor / 5280; }
            if (unidade1 === 'pé' && unidade2 === 'jardas') { convertedValue = valor / 3; }
            if (unidade1 === 'pé' && unidade2 === 'polegada') { convertedValue = valor * 12; }
            if (unidade1 === 'pé' && unidade2 === 'milhas náuticas') { convertedValue = valor / 6076; }

            if (unidade1 === 'polegada' && unidade2 === 'milímetro') { convertedValue = valor * 25.4; }
            if (unidade1 === 'polegada' && unidade2 === 'centímetro') { convertedValue = valor * 2.54; }
            if (unidade1 === 'polegada' && unidade2 === 'metro') { convertedValue = valor / 39.37; }
            if (unidade1 === 'polegada' && unidade2 === 'quilômetro') { convertedValue = valor / 39370; }
            if (unidade1 === 'polegada' && unidade2 === 'milhas') { convertedValue = valor / 63360; }
            if (unidade1 === 'polegada' && unidade2 === 'jardas') { convertedValue = valor / 36; }
            if (unidade1 === 'polegada' && unidade2 === 'pé') { convertedValue = valor / 12; }
            if (unidade1 === 'polegada' && unidade2 === 'milhas náuticas') { convertedValue = valor / 72913; }

            if (unidade1 === 'milhas náuticas' && unidade2 === 'milímetro') { convertedValue = valor * (1.852 * (10 ** 6)); }
            if (unidade1 === 'milhas náuticas' && unidade2 === 'centímetro') { convertedValue = valor * 185200; }
            if (unidade1 === 'milhas náuticas' && unidade2 === 'metro') { convertedValue = valor * 1852; }
            if (unidade1 === 'milhas náuticas' && unidade2 === 'quilômetro') { convertedValue = valor * 1.852; }
            if (unidade1 === 'milhas náuticas' && unidade2 === 'milhas') { convertedValue = valor * 1.151; }
            if (unidade1 === 'milhas náuticas' && unidade2 === 'jardas') { convertedValue = valor * 2025; }
            if (unidade1 === 'milhas náuticas' && unidade2 === 'pé') { convertedValue = valor * 6076; }
            if (unidade1 === 'milhas náuticas' && unidade2 === 'polegada') { convertedValue = valor * 72913; }

        break;

        case "temperatura":
            if (unidade1 === 'celsius' && unidade2 === 'fahrenheit') { convertedValue = (valor * 9 / 5) + 32; }
            if (unidade1 === 'celsius' && unidade2 === 'kelvin') { convertedValue = valor + 273.15; }
        
            if (unidade1 === 'fahrenheit' && unidade2 === 'celsius') { convertedValue = (valor - 32) * 5 / 9; }
            if (unidade1 === 'fahrenheit' && unidade2 === 'kelvin') { convertedValue = ((valor - 32) * 5 / 9) + 273.15; }
        
            if (unidade1 === 'kelvin' && unidade2 === 'celsius') { convertedValue = valor - 273.15; }
            if (unidade1 === 'kelvin' && unidade2 === 'fahrenheit') { convertedValue = ((valor - 273.15) * 5 / 9) + 32; }
        break;

        case "massa":
            if (unidade1 === 'miligrama' && unidade2 === 'grama') { convertedValue = valor / 1000; }
            if (unidade1 === 'miligrama' && unidade2 === 'quilograma') { convertedValue = valor / 1000000; }
            if (unidade1 === 'miligrama' && unidade2 === 'tonelada') { convertedValue = valor / 1000000000; }
            if (unidade1 === 'miligrama' && unidade2 === 'libra') { convertedValue = valor / 453592; }
            if (unidade1 === 'miligrama' && unidade2 === 'onça') { convertedValue = valor / 28350; }
        
            if (unidade1 === 'grama' && unidade2 === 'miligrama') { convertedValue = valor * 1000; }
            if (unidade1 === 'grama' && unidade2 === 'quilograma') { convertedValue = valor / 1000; }
            if (unidade1 === 'grama' && unidade2 === 'tonelada') { convertedValue = valor / 1000000; }
            if (unidade1 === 'grama' && unidade2 === 'libra') { convertedValue = valor / 454; }
            if (unidade1 === 'grama' && unidade2 === 'onça') { convertedValue = valor / 28.35; }
        
            if (unidade1 === 'quilograma' && unidade2 === 'miligrama') { convertedValue = valor * 1000000; }
            if (unidade1 === 'quilograma' && unidade2 === 'grama') { convertedValue = valor * 1000; }
            if (unidade1 === 'quilograma' && unidade2 === 'tonelada') { convertedValue = valor / 1000; }
            if (unidade1 === 'quilograma' && unidade2 === 'libra') { convertedValue = valor * 2.205; }
            if (unidade1 === 'quilograma' && unidade2 === 'onça') { convertedValue = valor * 35.27; }
        
            if (unidade1 === 'tonelada' && unidade2 === 'miligrama') { convertedValue = valor * 1000000000; }
            if (unidade1 === 'tonelada' && unidade2 === 'grama') { convertedValue = valor * 1000000; }
            if (unidade1 === 'tonelada' && unidade2 === 'quilograma') { convertedValue = valor * 1000; }
            if (unidade1 === 'tonelada' && unidade2 === 'libra') { convertedValue = valor * 2205; }
            if (unidade1 === 'tonelada' && unidade2 === 'onça') { convertedValue = valor * 35274; }
        
            if (unidade1 === 'libra' && unidade2 === 'miligrama') { convertedValue = valor * 453592; }
            if (unidade1 === 'libra' && unidade2 === 'grama') { convertedValue = valor * 454; }
            if (unidade1 === 'libra' && unidade2 === 'quilograma') { convertedValue = valor / 2.205; }
            if (unidade1 === 'libra' && unidade2 === 'tonelada') { convertedValue = valor / 2205; }
            if (unidade1 === 'libra' && unidade2 === 'onça') { convertedValue = valor * 16; }
        
            if (unidade1 === 'onça' && unidade2 === 'miligrama') { convertedValue = valor * 28350; }
            if (unidade1 === 'onça' && unidade2 === 'grama') { convertedValue = valor * 28.35; }
            if (unidade1 === 'onça' && unidade2 === 'quilograma') { convertedValue = valor / 35.274; }
            if (unidade1 === 'onça' && unidade2 === 'tonelada') { convertedValue = valor / 35274; }
            if (unidade1 === 'onça' && unidade2 === 'libra') { convertedValue = valor / 16; }
        
        break;

        case "tempo":
            if (unidade1 === 'segundo' && unidade2 === 'minuto') { convertedValue = valor / 60 ; }
            if (unidade1 === 'segundo' && unidade2 === 'hora') { convertedValue = valor / 3600; }
            if (unidade1 === 'segundo' && unidade2 === 'dia') { convertedValue = valor / 86400; }
            if (unidade1 === 'segundo' && unidade2 === 'semana') { convertedValue = valor / 604800;}
            if (unidade1 === 'segundo' && unidade2 === 'mês') { convertedValue = valor / 2628000; }
            if (unidade1 === 'segundo' && unidade2 === 'ano') { convertedValue = valor / 31536000; }

            if (unidade1 === 'minuto' && unidade2 === 'segundo') { convertedValue = valor * 60 ; }
            if (unidade1 === 'minuto' && unidade2 === 'hora') { convertedValue = valor / 60; }
            if (unidade1 === 'minuto' && unidade2 === 'dia') { convertedValue = valor / 1440; }
            if (unidade1 === 'minuto' && unidade2 === 'semana') { convertedValue = valor / 10080;}
            if (unidade1 === 'minuto' && unidade2 === 'mês') { convertedValue = valor / 43800; }
            if (unidade1 === 'minuto' && unidade2 === 'ano') { convertedValue = valor / 525600; }

            if (unidade1 === 'hora' && unidade2 === 'segundo') { convertedValue = valor * 3600 ; }
            if (unidade1 === 'hora' && unidade2 === 'minuto') { convertedValue = valor * 60; }
            if (unidade1 === 'hora' && unidade2 === 'dia') { convertedValue = valor / 24; }
            if (unidade1 === 'hora' && unidade2 === 'semana') { convertedValue = valor / 168 ;}
            if (unidade1 === 'hora' && unidade2 === 'mês') { convertedValue = valor / 730; }
            if (unidade1 === 'hora' && unidade2 === 'ano') { convertedValue = valor / 8760; }

            if (unidade1 === 'dia' && unidade2 === 'segundo') { convertedValue = valor * 86400 ; }
            if (unidade1 === 'dia' && unidade2 === 'minuto') { convertedValue = valor * 1440; }
            if (unidade1 === 'dia' && unidade2 === 'hora') { convertedValue = valor * 24; }
            if (unidade1 === 'dia' && unidade2 === 'semana') { convertedValue = valor / 7 ;}
            if (unidade1 === 'dia' && unidade2 === 'mês') { convertedValue = valor / 30.417 ; }
            if (unidade1 === 'dia' && unidade2 === 'ano') { convertedValue = valor / 365; }

            if (unidade1 === 'semana' && unidade2 === 'segundo') { convertedValue = valor * 604800; }
            if (unidade1 === 'semana' && unidade2 === 'minuto') { convertedValue = valor * 10080; }
            if (unidade1 === 'semana' && unidade2 === 'hora') { convertedValue = valor * 168; }
            if (unidade1 === 'semana' && unidade2 === 'dia') { convertedValue = valor  * 7 ;}
            if (unidade1 === 'semana' && unidade2 === 'mês') { convertedValue = valor / 4.345 ; }
            if (unidade1 === 'semana' && unidade2 === 'ano') { convertedValue = valor / 52.143; }

            if (unidade1 === 'mês' && unidade2 === 'segundo') { convertedValue = valor * 2628000; }
            if (unidade1 === 'mês' && unidade2 === 'minuto') { convertedValue = valor * 43800; }
            if (unidade1 === 'mês' && unidade2 === 'hora') { convertedValue = valor * 730.001; }
            if (unidade1 === 'mês' && unidade2 === 'dia') { convertedValue = valor * 30.417 ;}
            if (unidade1 === 'mês' && unidade2 === 'semana') { convertedValue = valor * 4.345 ; }
            if (unidade1 === 'mês' && unidade2 === 'ano') { convertedValue = valor / 12; }

            if (unidade1 === 'ano' && unidade2 === 'segundo') { convertedValue = valor * 31536000; }
            if (unidade1 === 'ano' && unidade2 === 'minuto') { convertedValue = valor * 525600; }
            if (unidade1 === 'ano' && unidade2 === 'hora') { convertedValue = valor * 8760; }
            if (unidade1 === 'ano' && unidade2 === 'dia') { convertedValue = valor * 365 ;}
            if (unidade1 === 'ano' && unidade2 === 'semana') { convertedValue = valor * 52.143 ; }
            if (unidade1 === 'ano' && unidade2 === 'mês') { convertedValue = valor * 12; }

        break;

        case "volume":

            if (unidade1 === 'onças fluídas' && unidade2 === 'galão') { convertedValue = valor / 128; }
            if (unidade1 === 'onças fluídas' && unidade2 === 'litro') { convertedValue = valor / 33.814; }
            if (unidade1 === 'onças fluídas' && unidade2 === 'mililitro') { convertedValue = valor * 29.574; }
            if (unidade1 === 'onças fluídas' && unidade2 === 'pinta') { convertedValue = valor / 16; }
            if (unidade1 === 'onças fluídas' && unidade2 === 'metro cúbico') { convertedValue = valor / 33814.0227; }

            if (unidade1 === 'galão' && unidade2 === 'onças fluídas') { convertedValue = valor * 128; }
            if (unidade1 === 'galão' && unidade2 === 'litro') { convertedValue = valor * 3.785; }
            if (unidade1 === 'galão' && unidade2 === 'mililitro') { convertedValue = valor * 3785; }
            if (unidade1 === 'galão' && unidade2 === 'pinta') { convertedValue = valor * 8; }
            if (unidade1 === 'galão' && unidade2 === 'metro cúbico') { convertedValue = valor  / 264.172; }

            if (unidade1 === 'litro' && unidade2 === 'onças fluídas') { convertedValue = valor * 33.814; }
            if (unidade1 === 'litro' && unidade2 === 'galão') { convertedValue = valor / 3.785; }
            if (unidade1 === 'litro' && unidade2 === 'mililitro') { convertedValue = valor * 1000; }
            if (unidade1 === 'litro' && unidade2 === 'pinta') { convertedValue = valor * 1.75975; }
            if (unidade1 === 'litro' && unidade2 === 'metro cúbico') { convertedValue = valor  / 1000; }

            if (unidade1 === 'mililitro' && unidade2 === 'onças fluídas') { convertedValue = valor / 29.574; }
            if (unidade1 === 'mililitro' && unidade2 === 'galão') { convertedValue = valor / 3785; }
            if (unidade1 === 'mililitro' && unidade2 === 'litro') { convertedValue = valor / 1000; }
            if (unidade1 === 'mililitro' && unidade2 === 'pinta') { convertedValue = valor * 0.00175975; }
            if (unidade1 === 'mililitro' && unidade2 === 'metro cúbico') { convertedValue = valor / 1000000; }

            if (unidade1 === 'pinta' && unidade2 === 'onças fluídas') { convertedValue = valor * 16 ; }
            if (unidade1 === 'pinta' && unidade2 === 'galão') { convertedValue = valor / 8; }
            if (unidade1 === 'pinta' && unidade2 === 'litro') { convertedValue = valor / 1.75975; }
            if (unidade1 === 'pinta' && unidade2 === 'mililitro') { convertedValue = valor / 0.00175975; }
            if (unidade1 === 'pinta' && unidade2 === 'metro cúbico') { convertedValue = valor / 1759.75; }

            if (unidade1 === 'metro cúbico' && unidade2 === 'onças fluídas') { convertedValue = valor * 33814.0227; }
            if (unidade1 === 'metro cúbico' && unidade2 === 'galão') { convertedValue = valor  * 264.172; }
            if (unidade1 === 'metro cúbico' && unidade2 === 'litro') { convertedValue = valor * 1000; }
            if (unidade1 === 'metro cúbico' && unidade2 === 'mililitro') { convertedValue = valor * 1000000; }
            if (unidade1 === 'metro cúbico' && unidade2 === 'pinta') { convertedValue = valor * 1759.75; }
        break;
    }

    return convertedValue ;
}




const options1 = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }


window.onload = () => {
    fetch(`http://127.0.0.1:5500/js/dados.json`, options1)
    .then( (response)=>{
        response.json() 
        .then( (data)=> {
            file_json = data ;
            select_load() ;
        })
    })
    .catch( (e) =>{ console.log(`Deu erro: ${e}`) } );
}


select_grandesa.addEventListener("change", ()=>{
    select_prefixo[0].innerHTML= "";
    select_prefixo[1].innerHTML= "";

    for(let i in file_json){
        if (i == select_grandesa.value ){
             let u = file_json[i].unidades;
             for(let item in u ){
                 
                 select_prefixo[0].innerHTML += `<option>${u[item]}</option>`;
                 select_prefixo[1].innerHTML += `<option>${u[item]}</option>`;
             }
        }
    }

});


text_box[0].addEventListener("keyup", ()=>{
    let valor  = text_box[0].value ;
    if(isNaN(valor)){
         text_box[1].value = "Error!" ;
    }
    else{
         text_box[1].value =  converter()   /// Recebe o valor do campo 1 Convertido e armazena no campo de texto //
    }
});

select_prefixo.forEach( (elemento)=> {
    elemento.addEventListener('change', ()=>{

        let valor  = text_box[0].value ;
        if(isNaN(valor)){
             text_box[1].value = "Error!" ;
        }
        else{
             text_box[1].value =  converter()   /// Recebe o valor do campo 1 Convertido e armazena no campo de texto //
        }
    });
});

