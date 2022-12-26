var asklistItem = document.getElementsByClassName("ask__body-list-item");

for(let i=0;i<asklistItem.length;i++) {
	let askPara = asklistItem[i].children[1];
	let askIcon = asklistItem[i].children[0];
	let plus = askIcon.children[0];
	let minus = askIcon.children[1];
	asklistItem[i].onclick = function() {
		let active = document.querySelector(".add");
		let check = false;
		if(active) {
			let plus_active = active.parentElement.children[0].children[0];
			let minus_active = active.parentElement.children[0].children[1];
			active.classList.remove("add");
			active.classList.add("response");
			plus_active.style.display = "inline-block";
			minus_active.style.display = "none";
		}
		if(active == askPara) {
			check = true;
		}
		if(!check && !asklistItem[i].toString().includes("add")) {
			askPara.classList.remove("response");
			askPara.classList.add("add");
			plus.style.display = "none";
			minus.style.display ="inline-block";
		}
	}
}