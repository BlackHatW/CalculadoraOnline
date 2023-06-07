// Código destinado a eventos de navegação da pagina principal // 
// Este site é uma de aplicação web SPA // 
let menu_itens = document.querySelectorAll(".menu-list-itens"); 
let app_calculadora = document.querySelector(".app-calculadora"); 
let app_conversor = document.querySelector(".app-conversor"); 
let app_bolsa = document.querySelector(".app-cotação-moedas"); 
let sobre = document.querySelector(".sobre"); 
let app_atual = "Calculadora";


// Função de navegação //
for(let i of menu_itens){
     i.addEventListener("click", function navegação(){
        switch(i.id){
            case "calculadora":
                app_atual = i.id ; 
                app_calculadora.style.display = "grid" ; 
                app_conversor.style.display = "none" ; 
                app_bolsa.style.display = "none" ; 
                sobre.style.display = "none" ; 
             break;
            case "conversor":
                 app_atual = i.id ; 
                 app_calculadora.style.display = "none" ; 
                 app_conversor.style.display = "grid" ; 
                 app_bolsa.style.display = "none" ; 
                 sobre.style.display = "none" ; 
             break;
            case "cotação-moedas":
                 app_atual = i.id ; 
                 app_calculadora.style.display = "none" ; 
                 app_conversor.style.display = "none" ; 
                 app_bolsa.style.display = "grid" ; 
                 sobre.style.display = "none" ; 
             break;
            case "sobre":
                 app_atual = i.id ; 
                 app_calculadora.style.display = "none" ; 
                 app_conversor.style.display = "none" ; 
                 app_bolsa.style.display = "none" ; 
                 sobre.style.display = "grid" ; 
             break;
        }
     });
}