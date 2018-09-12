/*=============================================
Agregar artículo
=============================================*/
$("#btnAgregarArticulo").click(function(){

    $("#agregarArticulo").toggle(400);  

})


/*=============================================
Subir imagen a tráves del Input
=============================================*/
$("#subirFoto").change(function(){

     imagen=this.files[0];

     //Validar tamaño de la imagen

     imagenSize=imagen.size;

     if (Number(imagenSize) > 2000000) {

        $("#arrastreImagenArticulo").before('<div class="alert alert-warning alerta text-center">El archivo excede el peso permitido, 2MB</div>')
         
     }else{

        $(".alerta").remove();

     }

	// Validar tipo de la imagen

	imagenType = imagen.type;

	if(imagenType == "image/jpeg" || imagenType == "image/png"){

		$(".alerta").remove();
	}

	else{

		$("#arrastreImagenArticulo").before('<div class="alert alert-warning alerta text-center">El archivo debe ser formato JPG o PNG</div>')

	}

})
