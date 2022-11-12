
function IMC (altura, peso){

    //verifica se os inputs estão vazios
   if (document.getElementById('altura').value != "" || document.getElementById('peso').value != ""){
       //deixa a div .info com display none, para que apareça a div #resultado
       const info = document.querySelector(".info");
       info.setAttribute("class", "hide");
       
       const infoIMC = document.getElementById('resultado');
       infoIMC.setAttribute("class", "info");

       const imc = (peso / Math.pow(altura, 2)).toFixed(2);

       //verificações do IMC
       if (imc <= 18.5){
           resultado.innerHTML = "<h1> Seu IMC é: " + imc + "</h1>" + "<p> Isso significa que você está abaixo do peso ideal, de acordo com a classificação do índice. </p>";
       }

       else if (imc >= 18.5 && imc <= 24.9){
           resultado.innerHTML = "<h1> Seu IMC é: " + imc + "</h1>" + "<p> Isso significa que você está dentro do peso ideal, de acordo com a classificação do índice. </p>";
       }

       else if (imc >= 25 && imc <= 29.9){
           resultado.innerHTML = "<h1> Seu IMC é: " + imc + "</h1>" + "<p> Isso significa que você está acima do peso desejado (sobrepeso), de acordo com a classificação do índice. </p>";
       }

       else if (imc >= 30){
           resultado.innerHTML = "<h1> Seu IMC é: " + imc + "</h1>" + "<p> Isso significa que você está com grau de obesidade, de acordo com a classificação do índice. </p>";
       }
    }
    
   else {
        alert ("Por favor, informe os dados!");   
    }
}

btn.addEventListener ('click', () => {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    IMC (altura, peso);
})
