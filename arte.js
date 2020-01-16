var intervalo= 3000;

function arte1(){
	document.getElementById("arte").src="arte1.jpg";
	setTimeout("arte2()",intervalo); //chama a proxima funçao com um intervalo de tempo
}

function arte2(){
	document.getElementById("arte").src="arte2.jpeg";
	setTimeout("arte3()",intervalo); //chama a proxima funçao com um intervalo de tempo
}

function arte3(){
	document.getElementById("arte").src="arte3.jpg";
	setTimeout("arte4()",intervalo); //chama a proxima funçao com um intervalo de tempo
}

function arte4(){
	document.getElementById("arte").src="arte4.jpg";
	setTimeout("arte5()",intervalo); //chama a proxima funçao com um intervalo de tempo
}

function arte5(){
	document.getElementById("arte").src="arte5.jpg";
	setTimeout("arte6()",intervalo); //chama a proxima funçao com um intervalo de tempo
}

function arte6(){
	document.getElementById("arte").src="arte6.jpg";
	setTimeout("arte7()",intervalo); //chama a proxima funçao com um intervalo de tempo
}

function arte7(){
	document.getElementById("arte").src="arte7.jpg";
	setTimeout("arte8()",intervalo); //chama a proxima funçao com um intervalo de tempo
}

function arte8(){
	document.getElementById("arte").src="arte8.jpeg";
	setTimeout("arte9()",intervalo); //chama a proxima funçao com um intervalo de tempo
}

function arte9(){
	document.getElementById("arte").src="arte9.jpg";
	setTimeout("arte10()",intervalo); //chama a proxima funçao com um intervalo de tempo
}

function arte10(){
	document.getElementById("arte").src="arte10.jpg";
	setTimeout("arte1()",intervalo); //chama a proxima funçao com um intervalo de tempo
}