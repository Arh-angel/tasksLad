let formElement = document.forms.formElement;

const oneInput = formElement.one;
const twoInput = formElement.two;

formElement.onfocus = function(evt) {
  let activeElement = formElement.querySelector('.focused');

	if (activeElement) {
	    activeElement.classList.remove('focused');
    }
    evt.target.classList.add('focused');
};

formElement.onblur = function(evt) {
	let activeElement = formElement.querySelector('.focused');

  if (activeElement) {
   	activeElement.classList.remove('focused');
  }
};

oneInput.addEventListener("focus", (e) => formElement.onfocus(e));
oneInput.addEventListener("blur", (e) => formElement.onfocus(e));

twoInput.addEventListener("focus", (e) => formElement.onfocus(e));
twoInput.addEventListener("blur", (e) => formElement.onfocus(e));
