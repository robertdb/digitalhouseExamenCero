function productoriaTest(){
	var numeros = [1,4,7,9,3];
	var resultado = productoria(numeros);
	if(resultado === 756)
		document.getElementById("productoriaTest").innerHTML = "productoriaTest ok";
	else
		document.getElementById("productoriaTest").innerHTML = "productoriaTest failed";
}

function masMenosTest(){
	var vector = [1,2,0,-1];
	nuevoVector = masMenos(vector);
	var pos = 0.5;
	var neg = 0.25;
	var zero = 0.25;
	if (nuevoVector[0] === pos && nuevoVector[1] === neg && nuevoVector[2] === zero)
		document.getElementById("masMenosTest").innerHTML = "masMenosTest ok";
	else
		document.getElementById("masMenosTest").innerHTML = "masMenosTest failed";
}

function escaleraDe3Test() {
	var vector = escalera(3);
	document.getElementById("escaleraDe3Test").innerHTML = "la altura es de: " + vector.length + "<br>";
	document.getElementById("escaleraDe3Test0").innerHTML = vector[0] + "<br>";
	document.getElementById("escaleraDe3Test1").innerHTML = vector[1] + "<br>";
	document.getElementById("escaleraDe3Test2").innerHTML = vector[2] + "<br>";

}

function aperturaTest(){
	var lunes = [10,-5,3,0];
	var martes = [-3,0];
	var miercoles = [-13];
	var jueves = [1,2,12,34,-10];
	var ingresos = [lunes,martes,miercoles,jueves];
	var validacion = aperturas(ingresos, 2);
	if (validacion[0] === true && validacion[1] === true && 
		validacion[2] === false && validacion[3] === false)
		document.getElementById("aperturaTest").innerHTML = "aperturaTest ok";
	else
		document.getElementById("aperturaTest").innerHTML = "aperturaTest failed";	

}

function alturaArbolUtopicoTest() {
	
	var altura1 = alturaArbolUtopico(0);
	var altura2 = alturaArbolUtopico(1);
	var altura3 = alturaArbolUtopico(2);
	var altura4 = alturaArbolUtopico(3);
	var altura5 = alturaArbolUtopico(4);

	if (altura1 === 1 && altura2 === 2 && altura3 === 3 && altura4 == 6 && altura5 == 7)
		document.getElementById("alturaArbolUtopicoTest").innerHTML = "alturaArbolUtopicoTest ok";
	else
		document.getElementById("alturaArbolUtopicoTest").innerHTML = "alturaArbolUtopicoTest failed"; 
}

function factorialTest(){
	var numero = document.getElementById("numero").value;
	document.getElementById("factorial").innerHTML = "El factorial es: " + factorial(numero);
}