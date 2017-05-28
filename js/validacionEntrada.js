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
	window.alert("entra aqui");
	$.ajax
	({
		type: 'POST',
		url : 'prueba.php',
		data : {user : document.forms["myform"]["User"].value , Password: document.forms["myform"]["Password"].value},
		dataType : 'json',
		success: function(json)
			{
				print("ok");
			}
	});

	window.alert(document.forms["myform"]["Password"].value);
	
}