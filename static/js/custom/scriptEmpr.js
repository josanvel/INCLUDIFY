$("#formRegistrarEmpr").validate({
	 submitHandler: function(form) {
	    form.submit();
	  },
	  rules: {
		    cedula: {
		      	maxlength: 10,
		      	minlength: 10
		    },
		    email:{
		    	email: true
		    },
		    password1:{
		    	minlength: 6
		    },
		    password2:{
		    	equalTo: "#id_password1"
		    }
		},
		messages: {
		    cedula: {
		    	maxlength: "*Debe contener máximo 10 caracteres.",
		    	minlength: "*Debe contener mínimo 10 caracteres.",
		    },
		    email:{
		    	email:"*El correo debe estar en el formato nombre@dominio."
		    },
		    password1:{
		    	minlength: "*Debe contener mínimo 6 caracteres.",
		    },
		    password2:{
		    	equalTo: "*Los dos campos de contraseña no coinciden.",
		    }		    
		}, 
		highlight: function(element) {
            $(element).closest(".form-group").addClass('has-error');
        }, unhighlight: function(element) {
            $(element).closest(".form-group").removeClass('has-error');
        }
});


$("#formEditarEmpr").validate({
	 submitHandler: function(form) {
	    form.submit();
	  },
	  rules: {
		    cedula: {
		      	maxlength: 10,
		      	minlength: 10
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
		    telefono:{
		    	maxlength: 16
		    },
		    web:{
		    	url: true
		    }

		},
		messages: {
		    cedula: {
		    	maxlength: "*Debe contener máximo 10 caracteres.",
		    	minlength: "*Debe contener mínimo 10 caracteres.",
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
		    telefono:{
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
$("#id_cedula,#id_telefono").keypress(function(event){
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