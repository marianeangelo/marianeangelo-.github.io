var etanol, gasolina;

function calcular(){
	etanol = parseFloat(formFlex.txtEtanol.value.replace(",","."));/*liga a var etanol ao campo etanol 
	no form e diz q aceita casas decimais/ o replace muda a , por . pq só aceita . */
	gasolina = parseFloat(formFlex.txtGasolina.value.replace(",","."));

	if(etanol < 0.7*gasolina){
		document.getElementById("status").src="etanol.jpg";//muda a imagem de neutro pra etanol
	}
		else{
			document.getElementById("status").src="gasolina.jpg";//muda a imagem de neutro pra gasolina
		}
	
}

function resetar(){//faz voltar a imagem neutra quando aperta limpar
	document.getElementById("status").src="neutro.jpg";
}