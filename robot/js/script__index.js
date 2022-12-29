var buttonIndexOverlay = document.querySelector(".index__overlay-body-x");
var overlayBody = document.querySelector(".index__overlay-body");
var indexOverlay = document.querySelector(".index__overlay");
buttonIndexOverlay.onclick = function() {
	overlayBody.classList.add("overlay__button");
	indexOverlay.classList.add("overlay__index");
}