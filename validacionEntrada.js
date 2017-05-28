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
		success:function(html)
			{
				alert(html);
			}}
	);
}