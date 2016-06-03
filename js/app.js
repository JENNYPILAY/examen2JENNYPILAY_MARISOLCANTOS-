//2. Agregar overlay Ligthbox para galeria
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//2.1 con imagen
$overlay.append($image);

//2.2 un texto
$overlay.append($caption);

//agregar el overlay al body
$("body").append($overlay);


$("#galeria li a").click(function(event)
{
	event.preventDefault();
	var href=$(this).attr("href");

	//1.1 Mostrar el light box con la imagen a la que se dio click
	$image.attr("src",href);

	var texto = $(this).children("img").attr("alt");
	$caption.text(texto);

	$overlay.show();
	console.log(href);
});


$overlay.click(function()
{
	$overlay.hide();
});

//crear elemento select
var $select = $("<select></select>");
$("#menu").append($select);

//recorrer el menu con la funcion each
$("#menu a").each(function()
{
	var $anchor = $(this);
	//crear una opcion para el select por cada elemento
	var $option=$("<option></option>");
	//obtener cada valor de la opcion del atributo href
	$option.val($anchor.attr("href"));
	//obtener el texto de cada opcion
	$option.text($anchor.text());
	//agregar option al select
	$select.append($option);

	//obtener si el link en la pagina actual (tiene clase selected)
	if($(this).hasClass("selected"))
	{
		$option.prop("selected",true);
	}

});



var local1 =
{
	ciudad:"Guayaquil",numSalas: 5, direccion:"los ceibos norte"
};
var local2 =
{
	ciudad:"Quito",numSalas: 6 , direccion:"avda los shyris"
};
var local3 =
{
	ciudad:"Playas",numSalas: 10, direccion:"km 1 y medio via data"
};
var local4 =
{
	ciudad:"Santa elena",numSalas: 5, direccion:"frente upse"
};
var local5 =
{
	ciudad:"Cuenca",numSalas: 8, direccion:"avda los cuencanos"
};

var local =[];
local.push(local1);local.push(local2);local.push(local3);local.push(local4);local.push(local5);

for (var i=0; i < local.length; i ++)
{
listHTML = '<ul><li>' + local[i].ciudad + '<br>'+local[i].numSalas+ '<br>'+local[i].direccion+ '<br>'+'</li></ul>';
				var infoDiv = document.getElementById("info-locales"); 
				infoDiv.innerHTML+=listHTML;
			}

var pelicula1 =
{
	nombre:"Alicia a través del espejo", actor: "Jhonny DEpp", director:"James Bobin",genero:"fantasia", sinopsis:"alicia ha pasado los últimos años siguiendo los pasos de su padre y navegando en alta mar"
};
var pelicula2 =
{
	nombre:"Un doctor en la campiña",actor: "Nicolas Gaurin", director:"thomas Lilti ",genero:"accion", sinopsis:"Jean-Pierre, el médico que les ausculta, les cura y les tranquiliza a cualquier hora del día, los siete días de la semana. "
};
var pelicula3 =
{
	nombre:"Xmen Apocalisisis",actor:"James McAvoy" , director:"Bryan Singer",genero:"accion", sinopsis:"10 años despues de los hechos ocurridos en dias pasados aparece apocalipsis, el primer y mas poderoso mutante de los xmen..."
};
var pelicula4 =
{
	nombre:"The ones below",actor:"David Farr ", director:"David Farr ",genero:"accion", sinopsis:"Kate y Justin forman una exitosa pareja que esperan su primer hijo. Kate está llena de temores sobre su maternidad."
};
var pelicula5 =
{
	nombre:"Gods of the Egypt",actor: "Nikolaj Coster-Waldau", director:"Alex Proyas",genero:"fantasia", sinopsis:"Trata sobre los dioses"
};

var pelicula =[];
pelicula.push(pelicula1);pelicula.push(pelicula2);pelicula.push(pelicula3);pelicula.push(pelicula4);pelicula.push(pelicula5);

for (var m=0; m < pelicula.length; m++)
{
listHTML2 = '<ul><li>' + pelicula[m].nombre + '<br>'+pelicula[m].numSalas+ '<br>'+pelicula[m].direccion+'<br>'+'</li></ul>';
				var infoDiv2 = document.getElementById("info-peliculas"); 
				infoDiv2.innerHTML+=listHTML2;
			}




var $password = $("#password");
var $confirmPassword=$("#confirm_password");

$("form span").hide();


function usuarioIngresado() {
	return($("#username").val().length > 0);
}


function puedeEnviar() {
	$("#submit").prop("disabled");
}

puedeEnviar();