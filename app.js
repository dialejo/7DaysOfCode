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

/* 4 reto
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
*/

/*
	1.	Alimentos Frescos – Frutas, verduras, carnes, embutidos, lácteos, huevos.
	2.	Panadería y Pastelería – Pan, galletas, bizcochos, postres.
	3.	Abarrotes – Arroz, pastas, aceites, enlatados, salsas, azúcar.
	4.	Bebidas – Agua, jugos, gaseosas, café, té, bebidas alcohólicas.
	5.	Congelados – Carnes, mariscos, comidas preparadas, helados.
	6.	Snacks y Dulces – Chocolates, papas fritas, frutos secos.
	7.	Cuidado Personal – Higiene, cosmética, protección solar.
	8.	Limpieza y Hogar – Detergentes, papel higiénico, ambientadores.
	9.	Mascotas – Alimentos, higiene, accesorios.
	10.	Bebés – Pañales, alimentos, productos de higiene.
	11.	Electrodomésticos y Tecnología – Pequeños electrodomésticos, baterías.
	12.	Ferretería y Automotriz – Herramientas, productos para autos.
*/


let frutasVegetales =[];
let congelados = [];
let bebidas =[];
let abarrotes = [];
let panaderia = [];
let snacks = [];
let cuidadoPersonal = [];
let limpiezaHogar = [];
let mascotas = [];

let respuestaUsuario = prompt('¿Qué tipo de productos deseas agregar a tu lista de compras? \n 1. Alimentos Frescos \n 2. Congelados \n 3. Bebidas \n 4. Abarrotes \n 5. Panadería \n 6. Snacks y Dulces \n 7. Cuidado Personal \n 8. Limpieza y Hogar \n 9. Mascotas');

if (respuestaUsuario == 1) {
    let respuestaUsuarioFrutas = prompt('¿Qué frutas o verduras deseas agregar a tu lista de compras?');
    while (respuestaUsuarioFrutas != 'salir' && respuestaUsuarioFrutas !== null) {
        frutasVegetales.push(respuestaUsuarioFrutas);
        respuestaUsuarioFrutas = prompt('¿Qué frutas o verduras deseas agregar a tu lista de compras?');
    }
    console.log(frutasVegetales);
} else if (respuestaUsuario == 2) {
    let respuestaUsuarioCongelados = prompt('¿Qué productos congelados deseas agregar a tu lista de compras?');
    while (respuestaUsuarioCongelados != 'salir' && respuestaUsuarioCongelados !== null) {
        congelados.push(respuestaUsuarioCongelados);
        respuestaUsuarioCongelados = prompt('¿Qué productos congelados deseas agregar a tu lista de compras?');
    }
    console.log(congelados);
} else if (respuestaUsuario == 3) {
        let respuestaUsuarioBebidas = prompt('¿Qué bebidas deseas agregar a tu lista de compras?');
        while (respuestaUsuarioBebidas != 'salir' && respuestaUsuarioBebidas !== null) {
            bebidas.push(respuestaUsuarioBebidas);
            respuestaUsuarioBebidas = prompt('¿Qué bebidas deseas agregar a tu lista de compras?');
        }
        console.log(bebidas);
}else if (respuestaUsuario == 4) {
    let respuestaUsuarioAbarrotes = prompt('¿Qué abarrotes deseas agregar a tu lista de compras?');
    while (respuestaUsuarioAbarrotes != 'salir' && respuestaUsuarioAbarrotes !== null) {
        abarrotes.push(respuestaUsuarioAbarrotes);
        respuestaUsuarioAbarrotes = prompt('¿Qué abarrotes deseas agregar a tu lista de compras?');
    }
    console.log(abarrotes);        
} else if (respuestaUsuario == 5) {
        let respuestaUsuarioPanaderia = prompt('¿Qué productos de panadería deseas agregar a tu lista de compras?');
        while (respuestaUsuarioPanaderia != 'salir' && respuestaUsuarioPanaderia !== null) {
            panaderia.push(respuestaUsuarioPanaderia);
            respuestaUsuarioPanaderia = prompt('¿Qué productos de panadería deseas agregar a tu lista de compras?');
        }
        console.log(panaderia);
}else if (respuestaUsuario == 6) { 
    let respuestaUsuarioSnacks = prompt('¿Qué snacks o dulces deseas agregar a tu lista de compras?');
    while (respuestaUsuarioSnacks != 'salir' && respuestaUsuarioSnacks !== null) {
        snacks.push(respuestaUsuarioSnacks);
        respuestaUsuarioSnacks = prompt('¿Qué snacks o dulces deseas agregar a tu lista de compras?');
    }
    console.log(snacks);
}else if (respuestaUsuario == 7) {
        let respuestaUsuarioCuidadoPersonal = prompt('¿Qué productos de cuidado personal deseas agregar a tu lista de compras?');
        while (respuestaUsuarioCuidadoPersonal != 'salir' && respuestaUsuarioCuidadoPersonal !== null) {
            cuidadoPersonal.push(respuestaUsuarioCuidadoPersonal);
            respuestaUsuarioCuidadoPersonal = prompt('¿Qué productos de cuidado personal deseas agregar a tu lista de compras?');
        }
        console.log(cuidadoPersonal);
    } else if (respuestaUsuario == 8) {
            let respuestaUsuarioLimpiezaHogar = prompt('¿Qué productos de limpieza y hogar deseas agregar a tu lista de compras?');
            while (respuestaUsuarioLimpiezaHogar != 'salir' && respuestaUsuarioLimpiezaHogar !== null) {
                limpiezaHogar.push(respuestaUsuarioLimpiezaHogar);
                respuestaUsuarioLimpiezaHogar = prompt('¿Qué productos de limpieza y hogar deseas agregar a tu lista de compras?');
            }
            console.log(limpiezaHogar);
    } else if (respuestaUsuario == 9) {
        let respuestaUsuarioMascotas = prompt('¿Qué productos para mascotas deseas agregar a tu lista de compras?');
        while (respuestaUsuarioMascotas != 'salir' && respuestaUsuarioMascotas !== null) {
            mascotas.push(respuestaUsuarioMascotas);
            respuestaUsuarioMascotas = prompt('¿Qué productos para mascotas deseas agregar a tu lista de compras?');
        }
        console.log(mascotas);
    };

    alert(`lista productos de frutas y verduras: ${frutasVegetales}`);
    alert('¡Lista de compras generada con éxito!');
    alert('¡Gracias por utilizar nuestra aplicación!');