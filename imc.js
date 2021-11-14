const calcular = document.getElementById('calcular');

function imc (){
   
    const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');

if (nome !==''&& altura !==''&& peso !=='' ){

 const valorIMC = (peso / (altura * altura)).toFixed(1);

 let classificacao ="";

 if(valorIMC< 18.5){
     classificacao ='  só a capa do caderno só o Pó o Dó ! como é que pode ??!';

 }else if (valorIMC < 25) {
     classificacao = ' no peso ideal ! Bora entrar no Shape!!';
    }else if (valorIMC < 30) {
        classificacao = ' engordando já em  !!';
    }else if (valorIMC < 35) {
        classificacao = '  gordão mano , que tá acontecendo ? ';
    }else if (valorIMC < 40) {
        classificacao = ' Obeso tio , tá até dificil de calcular voce , de tanto numero que to tendo que contar aqui ! ';
    }else  {
        classificacao = 'Muuuuito acima do peso meu truta ! ! ! ';


 }


    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está  ${classificacao}`;

}else {

    resultado.textContent = 'preencha todos os campos!!!';
} 

}   

calcular.addEventListener('click',imc);

// id padrão para puxar com JavascriptgetElementById ( Pega o elemento pelo nome do Id 
// . Acessa valores ( Value) Propriedades do elemento 
//.comando para realizar algo 
// AddEventListener = Prestar atenção quando alguém clicar 
// Fora da função a constante vira global
//${} Maneira de chamar variavel 