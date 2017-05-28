function validateForm()
	{
		
		var x = document.forms["myform"]["Username"].value;
		var pat = /@+/i
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
	$.ajax
	({
		type: "POST",
		url: 'prueba.php',
		dataType: 'json',
		data: {user: document.forms["myform"]["Username"].value, password: document.forms["myform"]["Password"].value},
		success:function(html)
			{
				alert(html);
			}}
	);
}