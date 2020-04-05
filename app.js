const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');




// show error function
const showError = (input, messege) => {
	const inputSection = input.parentElement;
	inputSection.className = 'input-section error';
	const small = inputSection.querySelector('small');
	small.innerText = messege;
}

//show success function
const showSuccess = (input) => {
	const inputSection = input.parentElement;
	inputSection.className = 'input-section success';
};

// email validator function
const validateEmail = email => {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(email.value.trim())) {
		showSuccess(email);
	} else {
		showError(email, "Invalid email!");
	}
}


// check every field function
const checkFields = (inputArray) => {
	inputArray.forEach(input => {
		if (input.value.trim() === '') {
			showError(input, `${input.id} is required`)
		} else {
			showSuccess(input);
		}
	});
}

// validate Passwords
const checkPasswords = (input1, input2) => {
	if (input1.value !== input2.value) {
		showError(input2, 'Password did not match!');
	}
}


//***** Main eventListener *****//

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkFields([username, email, password, confirmPassword]);
	validateEmail(email);
	checkPasswords(password, confirmPassword);
});