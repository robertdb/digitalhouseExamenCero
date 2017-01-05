// Desafio 1
function productoria(numeros){
	var resultado = 1;
	for(var i = 0; i < numeros.length; i++){
		resultado *= numeros[i];
	}
	return resultado;
}

// Desafio 2
function masMenos(vector){
	var nuevoVector = [];
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCero = 0;

	for (var i = 0; i < vector.length; i++) {
		if(vector[i] > 0)
			cantidadPositivos++;
		else
			if (vector[i] < 0)
				cantidadNegativos++;
			else
				cantidadCero++;
	}
	nuevoVector.push(cantidadPositivos / vector.length);
	nuevoVector.push(cantidadCero / vector.length);
	nuevoVector.push(cantidadNegativos / vector.length);
	return nuevoVector;
}

// Desafio 3
function escalera(altura){
	var escalera = [];
	var cantidadEspacio = altura - 1;
	var cantidadLadrillo = altura - cantidadEspacio; 
	for (var i = 0; i < altura; i++) {
		escalera.push(" ".repeat(cantidadEspacio) + "#".repeat(cantidadLadrillo));
		cantidadLadrillo++;
		cantidadEspacio--;
	}
	return escalera;
}

// Desafio 4
function seAbre(ingresos, cantidadMinimaDeAlumnos){
	var alumnosPresentes = 0;
	for (var i = 0; i < ingresos.length; i++) {
		if(ingresos[i] <= 0)
			alumnosPresentes++;
	}
	return(alumnosPresentes >= cantidadMinimaDeAlumnos);
}
function aperturas(conjuntoDeIngresos, cantidadMinimaDeAlumnos){
	var validacion = [];
	for (var i = 0; i < conjuntoDeIngresos.length; i++) {
		validacion.push(seAbre(conjuntoDeIngresos[i], cantidadMinimaDeAlumnos));
	}
	return validacion;
}

// Desafio 5
function alturaArbolUtopico(cantidadDeCiclos){
	var altura = 1;
	var factorPrimavera = 2;
	var factorVerano = 1;
	var esPrimavera = true;
	for (var i = 0; i < cantidadDeCiclos; i++) {
		if (esPrimavera === true) {
			altura = altura * factorPrimavera;
			esPrimavera = false;	
		}else{
			altura = altura + factorVerano;
			esPrimavera = true;	
		}		
	}
	return altura;
}

// Desafio 6
function factorial(numero){
	var factorial = 1;
	for (var i = 1; i <= numero; i++) {
		factorial *= i;
	}
	return factorial;	
}

