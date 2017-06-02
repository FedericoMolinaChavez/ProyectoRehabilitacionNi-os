function validateForm()
	{
		
		var x = document.forms["myform"]["Username"].value;
		var pat = /@+/i;
	if (x == "" || !pat.exec(x))
		{
		window.alert("El valor es vacio");
		return false;
		}
	else
		{
			myAjax();
		}
	}

function myAjax()
{

	var pet = "prueba.php";
	var nom = document.forms["myform"]["Username"].value;
	var pass = document.forms["myform"]["Password"].value;
	$.ajax({
		beforeSend: function()
			{
				//alert(nom);
			},
		url: pet,
		type: 'POST',
		data: ("user= "+ nom +  "&password=" + pass),
		success:function(html)
			{
				var respuesta = "respuesta"

				if ((html.trim().localeCompare(respuesta)) == 0)
					{
						//alert(pass);
						localStorage["key"] = pass;
						location.href = "main.html";
					}
				//alert ((html.trim()));
				
				//alert(html.trim().localeCompare(respuesta));
			},
		always: function(html)
			{
				//alert(html);
			}

	});
	
	
}