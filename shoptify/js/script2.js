var inputTag = document.querySelector("input");
var buttonEyeTag = document.querySelector(".login__form-eye");

buttonEyeTag.onclick = function() {
	if(inputTag.type == "password") {
		inputTag.type = "text";
	}else {
		inputTag.type = "password";
	}
}