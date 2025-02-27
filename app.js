let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

function compararVariables(variableUno, variableDos) {
    if (variableUno === variableDos) {
        console.log('las variables son iguales tanto en valor como en tipo');
    } else if (variableUno == variableDos) {
        console.log('las variables son iguales en valor pero no en tipo');
    } else {
        console.log('las variables no tienen el mismo valor');
    }
};

compararVariables(numeroUn, stringUn);

compararVariables(numeroTreinta, stringTreinta);

compararVariables(numeroDiez, stringDiez);


let respuestaUsuario = parseInt(prompt('¿¿Te gusta estudiar JavaScript? Responde con el número 1 para SÍ o 2 para NO.?'));

if (respuestaUsuario == 1) {
    console.log('¡Muy bien! Sigue estudiando y tendrás mucho éxito');
    alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito');
}
else if(respuestaUsuario == 2) {   
    console.log('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
    alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
}else{
    console.log('Respuesta no válida');
    alert('Respuesta no válida');
};
