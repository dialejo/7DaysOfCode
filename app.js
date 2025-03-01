/* primer reto
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
*/
/* 2 reto
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
*/

/* 3 reto
let programasDeProgramación = [];

let respuestaUsuario = prompt('¿Quieres continuar con el area de Front-End (1) o seguir al area de Back-End (2)?');

if (respuestaUsuario == 1) {
    let respuestaUsuarioFront = prompt('¿Quieres aprender React (1), Vue (2) o JavaScript (3)?');
    if (respuestaUsuarioFront == 1) {
        programasDeProgramación.push('React');
        preguntaEspecialización();
        console.log(programasDeProgramación);
    }else if (respuestaUsuarioFront == 2) {
        programasDeProgramación.push('Vue');
        preguntaEspecialización();
        console.log(programasDeProgramación);
    }else if (respuestaUsuarioFront == 3) {
        programasDeProgramación.push('JavaScript');
        preguntaEspecialización();
        console.log(programasDeProgramación);
    }
}

if (respuestaUsuario == 2) {
    let respuestaUsuarioBack = prompt('¿Quieres aprender C# (1), Python (2) o Java (3)?');
    if (respuestaUsuarioBack == 1) {
        programasDeProgramación.push('Node');
        preguntaEspecialización();
        console.log(programasDeProgramación);
    } else if (respuestaUsuarioBack == 2) {
        programasDeProgramación.push('Python');
        preguntaEspecialización();
        console.log(programasDeProgramación);
    } else if(respuestaUsuarioBack == 3) {
        programasDeProgramación.push('Java');
        preguntaEspecialización();
        console.log(programasDeProgramación);
    }
}

function preguntaEspecialización(){
    let respuestaUsuarioEspecializacion = prompt('seguir especializándose en el área elegida (1) o desarrollarse para convertirse en Fullstack (2)')
    if (respuestaUsuarioEspecializacion == 1 || respuestaUsuarioEspecializacion == 2) {
        let programasUsuario = prompt('en qué tecnologías le gustaria especializarse');
        while (programasUsuario != 'salir' && programasUsuario !== null) {
            programasDeProgramación.push(programasUsuario);
            programasUsuario = prompt('en qué tecnologías le gustaria especializarse');
        }
    }
}
*/

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 1;
let respuestaUsuario = parseInt(prompt('Adivina el número secreto entre 1 y 10'));

if (respuestaUsuario === numeroSecreto) {
    console.log('¡Felicidades! Adivinaste el número secreto');
    alert('¡Felicidades! Adivinaste el número secreto');
}
else {
    while (respuestaUsuario !== numeroSecreto) {
        intentos++;
        if (respuestaUsuario < numeroSecreto) {
            respuestaUsuario = parseInt(prompt('El número secreto es mayor, intenta de nuevo'));
        }
        else if (respuestaUsuario > numeroSecreto) {
            respuestaUsuario = parseInt(prompt('El número secreto es menor, intenta de nuevo'));
        }
    }
    console.log(`¡Felicidades! Adivinaste el número secreto en ${intentos} intentos`);
    alert(`¡Felicidades! Adivinaste el número secreto en ${intentos} intentos`);
}