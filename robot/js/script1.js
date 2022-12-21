var commentClick = document.querySelector("#comment-click");
commentClick.onclick = function() {
	var valueSpan = commentClick.nextElementSibling;
	if(valueSpan.innerHTML.toString().length == 0) {
		valueSpan.innerHTML = "Oops! There was a problem.";
	}else {
		valueSpan.innerHTML = "";
	}
}