var menuButton = document.querySelector("#menu__button");

menuButton.onclick = function() {
	var menuBar = document.querySelector("#menu__bar-list");
	if(menuBar.style.height == "0px") {
		menuBar.style.height = "auto";
	}else {
		menuBar.style.height = "0";
	}
}
var menuList = document.querySelectorAll("#menu__bar-list-item");
for(let i=0;i<menuList.length;i++) {
	let menuPlus = menuList[i].querySelector("#fa-plus");
	console.log(menuList[i]);
	menuPlus.onclick = function() {
		var menuHome = menuList[i].children[2];
		if(menuHome.style.height == "0px") {
			menuHome.style.height = "auto";
		}else {
			menuHome.style.height = "0px";
		}
	}
}
var commentClick = document.querySelector("#comment-click");
commentClick.onclick = function() {
	var valueSpan = commentClick.nextElementSibling;
	if(valueSpan.innerHTML.toString().length == 0) {
		valueSpan.innerHTML = "Oops! There was a problem.";
	}else {
		valueSpan.innerHTML = "";
	}
}