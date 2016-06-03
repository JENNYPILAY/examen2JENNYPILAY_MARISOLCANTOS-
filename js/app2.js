//2. Agregar overlay Ligthbox para galeria
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//2.1 con imagen
$overlay.append($image); /*lo que se encuentra dento de imagen se va  a cambiar dentro d4e overlay*/

//2.2 un texto
$overlay.append($caption); /*tendremos un parrafp*/

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

