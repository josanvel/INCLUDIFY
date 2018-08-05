$("#formRegistrarInst").validate({
	 submitHandler: function(form) {
		form.submit();
	  },
	  rules: {
			ruc: {
				maxlength: 13,
				minlength: 13,
			},
			email:{
				email: true
			},
			password1:{
				minlength: 6
			},
			password2:{
				equalTo: "#id_password1"
			},
			correo_contacto:{
				email: true
			},
			telefono_contacto:{
		    	maxlength: 16
		    },
		    web:{
		    	url: true
		    }
		},
		messages: {
			ruc: {
				maxlength: "*Debe contener máximo 13 caracteres.",
				minlength: "*Debe contener mínimo 13 caracteres.",
			},
			email:{
				email:"*El correo debe estar en el formato nombre@dominio."
			},
			password1:{
				minlength: "*Debe contener mínimo 6 caracteres.",
			},
			password2:{
				equalTo: "*Los dos campos de contraseña no coinciden.",
			},
			correo_contacto:{
				required:false,
				email: "*El correo del contacto debe estar en el formato nombre@dominio."
			},
			telefono_contacto:{
		    	required:false,
		    	maxlength: "*Debe contener máximo 16 caracteres.",
		    },
		    web:{
		    	required:false,
		    	url: "*Debe ingresar un url válido. http(s)://www.nombre.dominio",
		    }		    
		}, 
		highlight: function(element) {
			$(element).closest(".form-group").addClass('has-error');
		}, unhighlight: function(element) {
			$(element).closest(".form-group").removeClass('has-error');
		}
});

/*FUNCION QUE PERMITE SOLO NUMEROS*/
$("#id_ruc,#id_telefono_contacto").keypress(function(event){
	var inputValue = event.charCode;
	if (inputValue != 0) {
		if (inputValue < 48 || inputValue > 57) {
			event.preventDefault();
		}
	}
});

/*FUNCION QUE PERMITE SOLO LETRAS*/
$("#id_first_name,#id_last_name").keypress(function(event){
	var inputValue = event.which;
	// allow letters and whitespaces only.
	if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)) { 
		event.preventDefault(); 
	}
});