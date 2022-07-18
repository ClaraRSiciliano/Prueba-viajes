// Al hacer doble click en los titulos de de las secciones "Quienes somos" y "Destacados" , cambian de color
$('#qs').on('dblclick',function(){
    $('#qs').css({'color':'aquamarine'});
});

$('#dstcds').on('dblclick',function(){
    $('#dstcds').css({'color':'aquamarine'});
});



// Ocultar texto de las cards al hacer click en cualquiera de las imagenes - Sección destacados
$('.card-img-top').on('click', function(){
    $('.card-text').toggle('fast', function(){

    });
});

// alerta al presionar boton de enviar - Sección contacto
var botonmensaje = $('#enviarmensaje');
botonmensaje.on('click', function(){
    alert("¡Tu mensaje fue enviado exitosamente!");
});


