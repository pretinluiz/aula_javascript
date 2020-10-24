

function clicou(){
    document.getElementById("agradecimento").innerHTML="obrigado por clicar</b>";
  // console.log(document.getElementById("agradecimento"))
   // alert ("obrigado por clicar");
}

function redirecionar(){
   window.open("https://globallab.org/");
  //  window.location.href = "https://globallab.org/";
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML="obrigado por passar o mouse";
   elemento.innerHTML= "obrigado por passar o mouse";
  //  alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passar o mouse aqui";
    elemento.innerHTML="passe o mouse aqui ";
}


function load (){
    alert("pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
}
  

/*
function soma(n1, n2){
    return n1+n2;
}
*/
/*
 var validar = 0;
function validadade(idade){
    if (idade>= 18){
        validar = true

    }else{
        validar = false
    }
    return validar
}
var idade = prompt("qual sua idade")
validadade (idade)
console.log(validadade(idade));
*/

/*
alert(soma(5,10));
/*
var d = new Date();
alert(d.getday());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=1; count <= 5; count++){
    alert(count);
};
*/  
/*
var count = 0;
while (count <= 5){
    console.log (count)
    alert(count);
    count++;
};
*/
/*
var idade = prompt("qual sua idade")
if (idade >=18){
    alert ("maior de idade");
}else{
    alert("menor de idade");
};
*/


/*var fruta = [{nome:"maça", cor:"vermelha"},{nome:"uva",cor:"roxa"}]
console.log(fruta);
alert(fruta[1].nome);
*/
/*
var fruta = {nome:"maça", cor:"vermelho"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça","pera","laranja"]
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString())
//console.log(lista.join(" - "))


//var nome = "luiz eduardo araujo";
//var n1 = 5;
//var n2 =3;
//var frase = "japão é o melhor time do mundo"
//alert(nome + " tem "+ idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1* n2);
//console.log(frase.toLocaleLowerCase());
//alert(frase.replace("japão","brasil"));