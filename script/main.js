var submit = document.querySelector('button');
var fullname = document.querySelector('#name');
var email = document.querySelector('#email');
var pass = document.querySelector('#password');
var tel = document.querySelector('#number');
var country = document.querySelector("#country")[0].value;



class checkForm {
	constructor(input, type){
	this.input = input;
    this.type = type;
    this.errors = [];
	}


	populateErrors(mess){
		this.errors.push(mess);
	}

	getError(){
		var status = this.input.validity
	
	if (status.typeMismatch) {
      this.populateErrors('Entry does not match the field type');
    }
    
    if (status.tooLong) {
      this.populateErrors('Entry is too long');
    }

    if (status.tooShort) {
      this.populateErrors('Entry is too short');
    }
    if (!this.input.value.match(/[A-Z]/g)) {
      this.populateErrors('Must contain at least one uppercase letter')
    }

	    return this.errors;
	}


}

submit.addEventListener('click', function(event){
		event.preventDefault();

		var checkPassword = new checkForm(pass, "password");
		var errorMessages = checkPassword.getError();
		var checkName = new checkForm(fullname, "name");
		var errorName = checkName.getError();
		var checkEmail = new checkForm(email, "email");
		var errorEmail = checkEmail.getError();
		// console.log(errorMessages);
		console.log(errorEmail);

	})