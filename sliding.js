function on_cliked_button() {
	if (document.getElementById("hide").value == "Esconder"){
	document.getElementById("guide").classList.remove('col-md-3');
	document.getElementById("guide").classList.add('col-md-1');
	document.getElementById("guide").classList.add('col-md-offset-2');
	document.getElementById("parrafo-actividad").classList.add('hidden');
	document.getElementById("tituloGuia").classList.add('hidden');
	document.getElementById("hide").innerText ="guía";
	document.getElementById("hide").value ="guía";}
	else
		{
			document.getElementById("guide").classList.add('col-md-3');
			document.getElementById("guide").classList.remove('col-md-1');
			document.getElementById("guide").classList.remove('col-md-offset-2');
			document.getElementById("parrafo-actividad").classList.remove('hidden');
			document.getElementById("tituloGuia").classList.remove('hidden');
			document.getElementById("hide").innerText ="Esconder";
			document.getElementById("hide").value ="Esconder";
		}

	
}