let formElement = document.forms.formElement;

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

for(let i = 0; i < formElement.length; i++) {
  formElement.elements[i].addEventListener("focus", (e) => formElement.onfocus(e));
  formElement.elements[i].addEventListener("blur", (e) => formElement.onfocus(e));
}
