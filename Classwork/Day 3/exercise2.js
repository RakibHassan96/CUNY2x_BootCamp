function js_style(){
	paragraph.style.fontSize = "30pt";
	document.body.style.backgroundColor = "pink";
	button.style.fontSize = "50pt";
}

function getFormValue(){
	var firstName = document.querySelector('input[name=first]').value;
	var lastName = document.querySelector('input[name=last]').value;

	alert(firstName + " " + lastName);
}