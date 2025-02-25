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
    }else {
        console.log('las variables no tienen el mismo valor');
    }
}

compararVariables(numeroUn, stringUn);

compararVariables(numeroTreinta, stringTreinta);    

compararVariables(numeroDiez, stringDiez);