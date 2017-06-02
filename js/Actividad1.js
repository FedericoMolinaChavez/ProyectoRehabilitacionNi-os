var numeroDeErrores = 0;
var nivel = 1;
var numErrores = 0;
var numeroIntentos = "";
var numeroSlide = 1;
var idact = 1;
var idPaciente =0;
//alert(idPaciente);
function RegularNivel(resultado) //esta función se encarga de reducir el nivel de la actividad.
	{
		if (resultado == false)
			{
				if (numeroDeErrores == 3)
					{
						numeroDeErrores = 0;
						if (nivel != 0)
							{
								nivel = nivel -1;
							}
						
					}
				else
					{
						numeroDeErrores = numeroDeErrores + 1;
					}
			}
		else 
			{
				if (numeroDeErrores == 0)
					{
						if (nivel == 3)
							{

							}
						else
							{
								nivel = nivel + 1;
							}
						
					}
			}
	}

function Diapositiva1 (nivel, resultado) //Se encarga de realiazar la logica de la actividad en cuestion.
	{
		if (resultado == "oso")
			{
				numeroIntentos += numErrores + " ";
				numErrores = 0;
				RegularNivel(true);
				return 2;
			}
		else 
			{
				numErrores = numErrores + 1;
				RegularNivel(false);
				if (nivel == 0)
					{
						document.getElementById("cosito").innerHTML = "oso";
					}
				return 1;
			}
	}
function Diapositiva2 (nivel, resultado) //Se encarga de realiazar la logica de la actividad en cuestion.
	{
		//alert(nivel);
		document.getElementById("cosito").innerHTML = "";
		if (resultado == "gato")
			{
				numeroIntentos += numErrores + " ";
				numErrores = 0;
				RegularNivel(true);
				return 3;
			}
		else
		{
			numErrores = numErrores + 1;
			RegularNivel(false);
			if (nivel == 0)
					{
						document.getElementById("cosito").innerHTML = "gato";
					}
			return 2;
		}
	}
function Diapositiva3 (nivel, resultado) //Se encarga de realiazar la logica de la actividad en cuestion.
	{
		document.getElementById("cosito").innerHTML = "";
		if (resultado == "perro")
			{
				numeroIntentos += numErrores + " ";
				numErrores = 0;
				RegularNivel(true);
				return 4;
			}
		else 
			{
				numErrores = numErrores + 1;
				RegularNivel(false);
				if (nivel == 0)
					{
						document.getElementById("cosito").innerHTML = "perro";
					}
				return 3;
			}
	}
function Diapositiva4 (nivel, resultado) //Se encarga de realiazar la logica de la actividad en cuestion.
	{
		document.getElementById("cosito").innerHTML = "";
		if (resultado == "caballo")
			{
				numeroIntentos += numErrores + " ";
				numErrores = 0;
				RegularNivel(true);
				return 5;
			}
		else
			{
				numErrores = numErrores + 1;
				if (nivel == 0)
					{
						document.getElementById("cosito").innerHTML = "caballo";
					}
				RegularNivel(false);
				return 4
			}
	}
function Diapositiva5 (nivel, resultado) //Se encarga de realiazar la logica de la actividad en cuestion.
	{
		document.getElementById("cosito").innerHTML = "";
		if (resultado == "unicornio")
			{
				numeroIntentos += numErrores + " ";
				numErrores = 0;
				RegularNivel(true);
				return 6;
			}
		else
			{
				numErrores = numErrores + 1;
				RegularNivel(false);
				if (nivel == 0)
					{
						document.getElementById("cosito").innerHTML = "unicornio";
					}
				return 5;
			}
	}

function work()
	{
		document.getElementById('imagen').src = "Images/Actividad1/uno.jpg";
		idPaciente = localStorage.getItem("key");
		actividad (nivel)
	}
function actividad (nivel) //funcion principal que se encarga de recorrer los diferentes slides.
	{
		
		
			if (numeroSlide == 1)
			{
				var resultado = document.getElementById('answer').value;
				
				numeroSlide = Diapositiva1 (nivel, resultado)
				if (numeroSlide == 2)
					{
						document.getElementById('imagen').src = "Images/Actividad1/segunda.jpg";

					}
				return 0;

			}
			if (numeroSlide == 2)
				{
					var resultado = document.getElementById('answer').value;
					numeroSlide = Diapositiva2 (nivel, resultado)
					if (numeroSlide == 3)
						{
							document.getElementById('imagen').src = "Images/Actividad1/tercera.jpg";
						}
					return 0;
				}
			if (numeroSlide == 3)
				{
					var resultado = document.getElementById('answer').value;
					numeroSlide = Diapositiva3 (nivel, resultado)
					if (numeroSlide == 4)
						{
							document.getElementById('imagen').src = "Images/Actividad1/cuarta.jpg";
						}
					return 0;
				}
			if (numeroSlide == 4)
				{
					var resultado = document.getElementById('answer').value;
					numeroSlide = Diapositiva4 (nivel, resultado)
					if (numeroSlide == 5)
						{
							document.getElementById('imagen').src = "Images/Actividad1/quinta.png";
						}
					return 0;
				}
			if (numeroSlide == 5)
				{
					var resultado = document.getElementById('answer').value;
					numeroSlide = Diapositiva5(nivel, resultado)
					if (numeroSlide == 6)
					{
						salida = false;
						myAjax();
					}
				return 0;				
				}

		
		
	}
function myAjax()
	{
		var pet = "actividad.php";
	
	$.ajax({
		beforeSend: function()
			{
				alert(pet);
			},
		url: pet,
		type: 'POST',
		data: ("nivel= "+ nivel +  "&numeroIntentos=" + numeroIntentos+ "&idActividad="+ idact + "&idPaciente=" + idPaciente),
		success:function(html)
			{
						//alert ((html.trim()));
						localStorage["key"] = "success";
						location.href = "main.html";
					
				
				
				//alert(html.trim().localeCompare(respuesta));
			},
		always: function(html)
			{
				alert(html);
			}

	});
	
	}