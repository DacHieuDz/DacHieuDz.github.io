var iconClick = document.querySelector("#menu__icon-click");

var mobile = document.querySelector("#mobile");
var mobileBody = document.querySelector("#mobile__body");
var x = document.querySelector("#mobile__body-x");
var mobilebodyMenu = document.querySelector("#mobile__body-menu");
var mobiletagItem = document.querySelectorAll("#mobile__tag-item");
var mobileshopItem = document.querySelectorAll("#mobile__body-shop-item");
iconClick.onclick = function() {
	mobile.style.display = "block";
	mobileBody.classList.add("mobile__move");
}
x.onclick = function() {
	mobile.style.display = "none";
	mobileBody.classList.remove("mobile__move");
}
for(let i = 0 ; i < mobileshopItem.length;i++) {
	mobileshopItem[i].onclick = function() {
		var checkParent = mobileshopItem[i];
		var mobileTag = checkParent.nextElementSibling;
		var childMobileTag = mobileTag.children[i].children[0].nextElementSibling;
		if(mobileTag.className == "mobile__tag response-Home") {
			mobileTag.classList.remove("response-Home");
		}
		var parent = mobileshopItem[i].parentElement;
		if(mobileTag.className == "mobile__tag response-height-three") {
			mobileTag.classList.remove("response-height-three");
			mobileTag.classList.add("response-height-second");
		}else if(mobileTag.className == "mobile__tag grow-height-three") {
			mobileTag.classList.remove("grow-height-three");
			mobileTag.classList.add("response-Home");
			childMobileTag.classList.remove("grow-height");
		}else {
			if(mobileTag.className == "mobile__tag grow-height-second") {
				mobileTag.classList.remove("grow-height-second");
				mobileTag.classList.add("response-height-second");
			}else if(mobileTag.className == "mobile__tag response-height-second") {
				mobileTag.classList.remove("response-height-second");
				mobileTag.classList.add("grow-height-second");
			}else if(mobileTag.className == "mobile__tag") {
				mobileTag.classList.add("grow-height-second");
			}
		}
	}
}
for(let i = 0 ; i < mobiletagItem.length;i++) {
	mobiletagItem[i].onclick = function() {
		var checkParent = mobiletagItem[i];
		var mobileTagHeight = checkParent.parentElement;
		var isHave = false;
		mobiletagItem[i].classList.add("flag");
		if(mobileTagHeight.className == "mobile__tag grow-height-second") {
			mobileTagHeight.classList.remove("grow-height-second");
			mobileTagHeight.classList.add("grow-height-three");
		}else if(mobileTagHeight.className == "mobile__tag grow-height-three") {
			mobileTagHeight.classList.remove("grow-height-three");
			mobileTagHeight.classList.add("response-height-three");
		}else if(mobileTagHeight.className == "mobile__tag response-height-three") {
			mobileTagHeight.classList.remove("response-height-three");
			mobileTagHeight.classList.add("grow-height-three");
		}
		var checkShow = checkParent.querySelector(".grow-height");
		var checkHide = checkParent.querySelector(".response-height");
		var mobileBox = checkParent.querySelector(".mobile__box");
		if(checkShow) {
			mobileBox.classList.remove("grow-height");
			mobileBox.classList.add("response-height");
		}
		if(checkHide) {
			mobileBox.classList.remove("response-height");
			mobileBox.classList.add("grow-height");
		}
		if(!checkShow && !checkHide) {
			mobileBox.classList.add("grow-height");
		}
	}
}
