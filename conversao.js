//Conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString); //Compara sem converter explicitamente
console.log(numero == numeroString); // Compara e converte
console.log(numero + numeroString);//Converte numero para String

//Conversão explícita
console.log(numero + Number(numeroString));
