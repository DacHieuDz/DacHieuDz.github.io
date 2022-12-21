var menuButton = document.querySelector("#menu__button");

menuButton.onclick = function() {
	var menuBar = document.querySelector("#menu__bar-list");
	var deleteall = document.querySelectorAll(".add");
	if(menuBar.className.includes("add")) {	
		for(var i=0;i<deleteall.length;i++) {
			deleteall[i].classList.remove("add");
			deleteall[i].classList.add("response");
		}
	}else {
		menuBar.classList.remove("response");
		menuBar.classList.add("add");
	}
}
var menuList = document.querySelectorAll("#menu__bar-list-item");
for(let i=0;i<menuList.length;i++) {
	menuList[i].onclick = function() {
		let menuHome = menuList[i].children[2];
		if(menuHome.className.includes("add")) {
			menuHome.classList.remove("add");
			menuHome.classList.add("response");
		}else {
			menuHome.classList.remove("response");
			menuHome.classList.add("add");
		}
	}
}
