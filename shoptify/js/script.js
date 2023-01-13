var checkPageButton = document.querySelectorAll("#page .page__nav button");
var pageBody = document.querySelector(".page__body");
checkPageButton = [...checkPageButton];

for(let i=0;i<checkPageButton.length;i++) {
	checkPageButton[i].onclick = function() {
		if(i == 0) {
			let check = false;
			let pos = -1;
			for(let j = 0 ; j < checkPageButton.length;j++) {
				if(j != i && checkPageButton[j].className.includes("page__active")) {
					check = true;
					pos = j;
				}
			}
			if(check) {
				checkPageButton[pos].classList.remove("page__active");
				checkPageButton[i].classList.add("page__active");
				if(pos == 1) {
					pageBody.classList.remove("page__effect-active");
					pageBody.classList.remove("page__effect-response3");
					pageBody.classList.add("page__effect-response");	
				}
				if(pos == 2) {
					pageBody.classList.remove("page__effect-active2");
					pageBody.classList.remove("page__effect-active3");
					pageBody.classList.add("page__effect-response2");	
				}
			}
		}
		if(i == 1) {
			let check = false;
			let pos = -1;
			for(let j = 0 ; j < checkPageButton.length;j++) {
				if(j != i && checkPageButton[j].className.includes("page__active")) {
					check = true;
					pos = j;
				}
			}
			console.log(checkPageButton.length);
			if(check) {
				checkPageButton[pos].classList.remove("page__active");
				checkPageButton[i].classList.add("page__active");
				if(pos == 0) {
					pageBody.classList.remove("page__effect-response");
					pageBody.classList.remove("page__effect-response2");
					pageBody.classList.add("page__effect-active");	
				}
				if(pos == 2) {
					pageBody.classList.remove("page__effect-active2");
					pageBody.classList.remove("page__effect-active3");
					pageBody.classList.add("page__effect-response3");	
				}
			}
		}
		if(i == 2) {
			let check = false;
			let pos = -1;
			for(let j = 0 ; j < checkPageButton.length;j++) {
				if(j != i && checkPageButton[j].className.includes("page__active")) {
					check = true;
					pos = j;
				}
			}
			if(check) {
				checkPageButton[pos].classList.remove("page__active");
				checkPageButton[i].classList.add("page__active");
				if(pos == 0) {
					pageBody.classList.remove("page__effect-response");
					pageBody.classList.remove("page__effect-response2");
					pageBody.classList.add("page__effect-active2");	
				}
				if(pos == 1) {
					pageBody.classList.remove("page__effect-response3");
					pageBody.classList.remove("page__effect-active");
					pageBody.classList.add("page__effect-active3");	
				}
			}
		}
	}
}

var checkPageButton2 = document.querySelectorAll(".page__two .page__nav button");
var pageBody2 = document.querySelector(".page__two .page__body");
checkPageButton2 = [...checkPageButton2];

for(let i=0;i<checkPageButton2.length;i++) {
	checkPageButton2[i].onclick = function() {
		if(i == 0) {
			if(pageBody2.className.includes("page__effect-active")) {
				pageBody2.classList.remove("page__effect-active");
				pageBody2.classList.add("page__effect-response");
				checkPageButton2[i+1].classList.remove("page__active");
				checkPageButton2[i].classList.add("page__active");
			}
		}
		if(i == 1) {
			if(!pageBody2.className.includes("page__effect-active")) {
				pageBody2.classList.remove('page__effect-response');
				pageBody2.classList.add("page__effect-active");
				checkPageButton2[i-1].classList.remove("page__active");
				checkPageButton2[i].classList.add("page__active");
			}
		}
	}
}
var sellBodyButton = document.querySelector(".sell__button");
var sellButton = document.querySelector(".overlay__sell-body-x");
var buttonIframe = document.querySelector(".iframe");
console.log(buttonIframe);
var sell = document.querySelector(".overlay__sell");
sellBodyButton.onclick = function() {
	sell.style.display = "block";
	buttonIframe.src = "https://www.youtube.com/embed/ku68gM_eubI";
}
sell.onclick = function() {
	sell.style.display = "none";	
	buttonIframe.src = "";
}
sellButton.onclick = function() {
	sell.style.display = "none";	
	buttonIframe.src = "";
}

var cleanPage = document.querySelector(".clean__body");
var cleanPageNav = document.querySelectorAll(".clean button");
cleanPageNav = Array.from(cleanPageNav);

var a = setInterval(hasTime, 3000);
function hasTime() {
	if(!cleanPageNav[0].className.includes("page__active")) {
		cleanPageNav[1].classList.remove("page__active");
		cleanPageNav[0].classList.add("page__active");
		cleanPage.classList.remove("page__effect-active");
		cleanPage.classList.add("page__effect-response");
	}else {
		cleanPageNav[0].classList.remove("page__active");
		cleanPageNav[1].classList.add("page__active");
		cleanPage.classList.remove("page__effect-response");
		cleanPage.classList.add("page__effect-active");
	
	}
}
cleanPageNav[0].onclick = function() {
	if(!cleanPageNav[0].className.includes("page__active")) {
		cleanPageNav[1].classList.remove("page__active");
		cleanPageNav[0].classList.add("page__active");
		cleanPage.classList.remove("page__effect-active");
		cleanPage.classList.add("page__effect-response");
	}
		clearInterval(a);
		a = setInterval(hasTime, 3000);
}
cleanPageNav[1].onclick = function() {
	if(!cleanPageNav[1].className.includes("page__active")) {
		cleanPageNav[0].classList.remove("page__active");
		cleanPageNav[1].classList.add("page__active");
		cleanPage.classList.remove("page__effect-response");
		cleanPage.classList.add("page__effect-active");
	}
	clearInterval(a);
	a = setInterval(hasTime, 3000);
}

var blogBody = document.querySelector(".blog__body");
var blogBodyButton = document.querySelectorAll(".blog__button button");
var blogTime = setInterval(buttonTime, 3000);
function buttonTime() {
	if(!blogBodyButton[0].className.includes("blog-active1")) {
		blogBodyButton[0].classList.add("blog-active1");
		blogBodyButton[1].classList.remove("blog-active1");
		blogBody.classList.remove("blog-active1-effect");
		blogBody.classList.add("blog-response1-effect");
	}else {
		blogBodyButton[1].classList.add("blog-active1");
		blogBodyButton[0].classList.remove("blog-active1");
		blogBody.classList.remove("blog-response1-effect");
		blogBody.classList.add("blog-active1-effect");
	}
}

blogBodyButton[0].onclick = function() {
	if(!blogBodyButton[0].className.includes("blog-active1")) {
		blogBodyButton[0].classList.add("blog-active1");
		blogBodyButton[1].classList.remove("blog-active1");
		blogBody.classList.remove("blog-active1-effect");
		blogBody.classList.add("blog-response1-effect");
	}
	clearInterval(blogTime);
	blogTime = setInterval(buttonTime, 3000);
}
blogBodyButton[1].onclick = function() {
	if(!blogBodyButton[1].className.includes("blog-active1")) {
		blogBodyButton[1].classList.add("blog-active1");
		blogBodyButton[0].classList.remove("blog-active1");
		blogBody.classList.remove("blog-response1-effect");
		blogBody.classList.add("blog-active1-effect");
	}
	clearInterval(blogTime);
	blogTime = setInterval(buttonTime, 3000);
}