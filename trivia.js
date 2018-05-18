var q1js = document.getElementById("qu1");
var q2js = document.getElementById("qu2");
var q3js = document.getElementById("qu3");

var nameTittle = document.getElementById('name');
var numCorrect = document.getElementById('respBien');
var num = 0;
var pregunta1 ="¿Quién es el que no debe ser nombrado?";
var resp1 = "\n1. López Obrador\n2. Tu ex\n3. Lord Voldemort";
var pregunta2 = "¿Quién es el Elegido?";
var resp2 = "\n1. Neo (matrix)\n2. Harry Potter\n3. Mi novio";
var pregunta3= "¿Quién es Rémulo?";
var resp3 = "\n1. Remulus Lupin\n2. Uno de los hermanos que fundaron Roma\n3. Un druida (WOW)";
var trivia1= document.getElementById('triviaGame')
var invisible= document.getElementById('cajaRespuestas')

function triviaGame() {

var name=prompt ("¿Cómo te llamas?");
name = name.toUpperCase();
alert("¡Bienvenido a la trívia sobre Harry Potter más divertida que encontrarás, " + name + "!");
var answer = confirm( name + "\n¿Quieres jugar?");
if(answer==true){
	//empiezan las preguntas
	alert('¡Exelente! \nVamos a empezar\nrecuerda sólo poner el NÚMERO de la respuesta');

	switch ( prompt(pregunta1 + resp1)){
		case '1':
		q1js.innerHTML = "Tu respuesta a " + pregunta1 + " fue López Obrador. \nLa respuesta correcta es Lord Voldemort";
		//alert('Cerca, pero incorrecta');
		break;
		case '2':
		q1js.innerHTML = "Tu respuesta a " + pregunta1 + " fue tu ex. \nLa respuesta correcta es Lord Voldemort";
		//alert('Muy cerca, pero incorrecta');
		break;
		case '3':
		q1js.innerHTML = "Tu respuesta a " + pregunta1 + " fue Lord Voldemort. \nLa respuesta es correcta";
		//alert('Acertaste');
		num = num + 1;
		break;
		default:
		//alert('No recibí tu respuesta, la daré por incorrecta');
		q1js.innerHTML = "No recibimos respuesta a " + pregunta1 + " \nPor lo tanto la respuesta es incorrecta, la respuesta es Lord Voldemort";
		break;
	}
	switch ( prompt(pregunta2 + resp2)){
		case '1':
		q2js.innerHTML = "Tu respuesta a " + pregunta2 + " fue Neo. \nLa respuesta correcta es Harry Potter";
		//alert('Muy cerca, pero incorrecta');
		break;
		case '2':
		q2js.innerHTML = "Tu respuesta a " + pregunta2 + " fue Harry Potter. \nLa respuesta es correcta";
		num = num+1;
		//alert('Cerca, pero incorrecta');
		break;
		case '3':
		q2js.innerHTML = "Tu respuesta a " + pregunta2 + " fue un druida. \nLa respuesta correcta es Harry Potter";
		//alert('Acertaste');
		break;
		default:
		q2js.innerHTML = "No recibimos respuesta a " + pregunta2 + " \nPor lo tanto la respuesta es incorrecta, la respuesta es Harry Potter";
		//alert('No recibí tu respuesta, la daré por incorrecta');
		break;
	}
	switch ( prompt(pregunta3 + resp3)){
		case '1':
		q3js.innerHTML = "Tu respuesta a " + pregunta3 + "fue Remulus Lupin. \nLa respuesta es correcta";
		//alert('Acertaste');
		num = num + 1;
		break;
		case '2':
		q3js.innerHTML = "Tu respuesta a " + pregunta3 + " fue uno de los hermanos que fundaron Roma. \nLa respuesta correcta es Remulus Lupin";
		//alert('Muy cerca, pero incorrecta');
		break;
		case '3':
		q3js.innerHTML = "Tu respuesta a " + pregunta3 + " fue un druida. \nLa respuesta correcta es Remulus Lupin";
		//alert('Cerca, pero incorrecta');
		break;
		default:
		q3js.innerHTML = "No recibimos respuesta a " + pregunta3 + " \nPor lo tanto la respuesta es incorrecta, la respuesta es Remulus Lupin";
		//alert('No recibí tu respuesta, la daré por incorrecta');
		break;
	}
  invisible.style.display = "block";
	numCorrect.innerHTML = "Tuviste " + num + " respuestas correctas";
  nameTittle.innerHTML = name + ' tus resultados son:';


} else{
	// :(
	alert('¡Lástima! \n Nos vemos pronto\n :(');
	document.write("No quisiste jugar");
};
triviaGame.innerHTML=tu;

}
//q1js.innerHTML = pregunta1;
