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
    // console.log(this.errors);
    // console.log(this.input);
	}

	populateErrors(mess){
		this.errors.push(mess);
	}

	getError(){
		var status = this.input.validity

	if(this.type == 'password'){
    	if (!this.input.value.match(/[A-Z]/g)) {
      		this.populateErrors('Must contain at least one uppercase letter')
    	}
    	if(!this.input.value.match(/[a-z]/g)){
    		this.populateErrors('Must contain at least one lowercase letter')
    	}
    	if(!this.input.value.match(/\d/g)){
    		this.populateErrors('Must contain at least one number')
    	}
    	if(!this.input.value.match(/[a-zA-Z0-9]{8,}/g)){
    		this.populateErrors('Entry is too short must be 8 character or more')
    	}
    }
    if(this.type == 'email'){
    	if(!this.input.value.match(/\@/g)){
    		this.populateErrors('Must have a @ symbol in the email')
    	}
    	if(!this.input.value.match(/\./g)){
    		this.populateErrors('Email must folow this format "example@service.com"')
    	}
    }	
	
	if (status.typeMismatch) {
      this.populateErrors('Entry does not match the field type');
    }
    
    if (status.tooLong) {
      this.populateErrors('Entry is too long');
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
		var checkPhone = new checkForm(tel, "number");
		var errorTel = checkPhone.getError();
		// console.log(checkForm.errors);
		if (errorMessages.length > 0) {
    		errorMessages.forEach( (err) => {
      		pass.insertAdjacentHTML('afterend', '<p class="error">' + err + '</p>')
    		})

    	}
    	if (errorName.length > 0){
    		errorName.forEach( (e) => {
    		 fullname.insertAdjacentHTML('afterend', '<p class="error">' + e + '</p>')
    		})
    	}
    	if (errorEmail.length > 0){
    		errorEmail.forEach( (er) =>{
    			email.insertAdjacentHTML('afterend', '<p class="error">' + er + '</p>')
    		})
    	}
	})