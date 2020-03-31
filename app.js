const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmpass = document.querySelector('#confirmpass');




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
const validateEmail = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}


// check every field function
const checkFields = (inputArray) => {
	inputArray.forEach(input => {
		if (input.value === '') {
			validateEmail(email);
			showError(input, `${input.id} is required`)
		} else {
			validateEmail(email);
			showSuccess(input);
		}
	})
}

// Main eventListener
form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkFields([username, email, password, confirmpass])
});