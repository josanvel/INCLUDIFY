
	var url = document.location.toString();
	if (url.match('#')) {
		$('html, body').animate({ scrollTop: 0 }, 200);
	    $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
	    $('html, body').animate({ scrollTop: $('.navbar').offset().top }, 'slow');
	} 

	// Change hash for page-reload
	/*$('.nav-tabs a').on('shown.bs.tab', function (e) {
	    window.location.hash = e.target.hash;

	})*/


	$("#id_pais").bind('change', getCiudades);
	$("#id_fk_pais").bind('change', getCiudadesfk);

	$("#formSerMiembroInstitucion").validate({
		 submitHandler: function(form) {
		 	
		    //Cierras el primer modal 
		    $(solicitarMiembroInstitucion).modal('hide');
		    //Mostrar el otro modal con la nueva inormacion
		    $(comfirmarSolicitarMiembroInstitucion).modal('show'); 
		    //al aceptar ahi si se hace el form submiit
		    
		    //form.submit();
		  },
		  rules: {
			    cargoMiembro: "required",
			    descripcionCargo: {
			      required: true,
			      minlength: 5,
			      maxlength: 100
			    }
			},
			messages: {
			    cargoMiembro: "*Ingrese el cargo ",
			    descripcionCargo: {
			    	required: "*Ingrese la descripción del cargo",
			    	minlength: "*La descripcion del cargo debe contener al menos 5 caracteres.",
			    	maxlength: "*La descripcion del cargo debe contener máximo 100 caracteres."
			    }
			 }, 
			highlight: function(element) {
	            $(element).closest(".form-group").addClass('has-error');
	        }, unhighlight: function(element) {
	            $(element).closest(".form-group").removeClass('has-error');
	        }
	});

	function getCiudades() {
		$.ajax({
			data: {
				'csrfmiddlewaretoken': $("input[name=csrfmiddlewaretoken]").val(),
				'id_pais': $("#id_pais option:selected").val()
            },
            type: "post",
			url: "../institucion/getCiudades/",
            success: function (data) {
            	document.getElementById("id_ciudad").disabled = false;
            	$('#id_ciudad').html(data)
            },
            errors: function(e) {
	            alert(e);
	        }
		});
	}

	//Para emprendedor
	function getCiudadesfk() {
		document.getElementById("id_fk_ciudad").disabled = false;
		$.ajax({
			data: {
				'csrfmiddlewaretoken': $("input[name=csrfmiddlewaretoken]").val(),
				'id_pais': $("#id_fk_pais option:selected").val()
            },
            type: "post",
			url: "/getCiudades/",
            success: function (data) {
            	$('#id_fk_ciudad').html(data)
            },
            errors: function(e) {
	            alert(e);
	        }
		});
	}
	//$('#id_pais').trigger('change');

	//Carga la foto seleccionada para cambiarlo en un emprendedor
	$("#id_foto").bind('change', archivo);
	//Carga el logo seleccionado para cambiarlo en una institucion
	$("#id_logo").bind('change', archivo);
	//document.getElementById('id_foto').addEventListener('change', archivo, false);
	function archivo(evt) {
		var files = evt.target.files; // FileList object
		// Obtenemos la imagen del campo "file".
		for (var i = 0, f; f = files[i]; i++) {
			//Solo admitimos imágenes.
			if (!f.type.match('image.*')) {
				continue;
			}
			var reader = new FileReader();
			reader.onload = (function (theFile) {
        	return function (e) {
	          	document.getElementById('id1').className += 'thumbnail';
	          	document.getElementById('list').className += 'avatar';
	          	// Insertamos la imagen
	          	document.getElementById("list").innerHTML = ['<a href="#" class="thumbnail bottom-15" data-toggle="modal" data-target="#upload-avatar"> <img src="', e.target.result, '" title="', escape(theFile.name), '"/> </a>'].join('');
	        	};
      		})(f);
      		reader.readAsDataURL(f);
    	}
  	}