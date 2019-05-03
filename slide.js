var intervalo = 3000;

function slide1(){
	document.getElementById("banner").src="banner1.jpg";
	setTimeout("slide2()", intervalo); //chama a proxima funçao com um intervalo de tempo
}

function slide2(){
	document.getElementById("banner").src="banner2.jpg";
	setTimeout("slide3()", intervalo); //chama a proxima funçao com um intervalo de tempo
}

function slide3(){
	document.getElementById("banner").src="banner3.jpg";
	setTimeout("slide1()", intervalo); //retorna a primeira funçao pro slide ficar eterno
}