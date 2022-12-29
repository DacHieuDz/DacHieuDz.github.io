var searchButton = document.querySelector(".menu .menu__search button");
var overlay = document.querySelector(".overlay");
var technoBox = document.querySelector(".techno__box");
var technoInfo = document.querySelector(".techno__info");
var technoButton = document.querySelector(".techno__info-button");
searchButton.onclick = function() {
	if(!overlay.className.includes("overlay-active")){
		overlay.classList.add("overlay-active");
		overlay.classList.remove("overlay-response");
		technoInfo.classList.remove("techno__response");
		technoInfo.classList.add("techno__move");
		technoBox.classList.remove("techno__info-response");
		technoBox.classList.add("techno__info-move");
	}
}
technoButton.onclick = function() {
	technoBox.classList.remove("techno__info-move");
	technoBox.classList.add("techno__info-response");
	function box() {
		technoInfo.classList.remove("techno__move");
		technoInfo.classList.add("techno__response");
	}
	function lay() {
		overlay.classList.remove("overlay-active");
		overlay.classList.add("overlay-response");
	}
	setTimeout(box, 1000);
	setTimeout(lay, 2000);
}
overlay.onclick = function() {
	technoBox.classList.remove("techno__info-move");
	technoBox.classList.add("techno__info-response");
	function box() {
		technoInfo.classList.remove("techno__move");
		technoInfo.classList.add("techno__response");
	}
	function lay() {
		overlay.classList.remove("overlay-active");
		overlay.classList.add("overlay-response");
	}
	setTimeout(box, 1000);
	setTimeout(lay, 2000);
}