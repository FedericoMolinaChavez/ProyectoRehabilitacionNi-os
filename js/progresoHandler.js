function getId()
	{
		var value = localStorage.getItem("key");
		return value;
	}

function getValues(id)
	{
		pet = "progresoHandler.php";
		$.ajax({
		beforeSend: function()
			{
				//alert(nom);
			},
		url: pet,
		type: 'POST',
		data: ("id= "+ id),
		success:function(html)
			{
				var respuesta = "respuesta"

				alert(html);
				//alert ((html.trim()));
				
				//alert(html.trim().localeCompare(respuesta));
			},
		always: function(html)
			{
				//alert(html);
			}

	});
	}

function graph(values)
	{

	}

function main()
	{
		var id = getId();
		var values = getValues(id);
		graph(values);

	}