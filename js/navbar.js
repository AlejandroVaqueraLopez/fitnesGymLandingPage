let navElement = document.getElementById("navElement");
let btnMenu = document.getElementById("btnMenu");
let navbarList = document.getElementById("navbarList");
let navbarToggle = false;
window.addEventListener("scroll",()=>{
	if(this.scrollY > 40){
		navElement.style.marginTop = `0px`;
	}else if(this.scrollY <= 40){
		navElement.style.marginTop = `${(40 - this.scrollY)}px`;
	}
});

window.addEventListener("resize",()=>{
	if(this.innerWidth > 800){
		navbarList.style.display = "flex";
	}else{
		navbarList.style.display = "none";
	}
});
btnMenu.addEventListener("click",()=>{
	navbarToggle = !navbarToggle;
	console.log(navbarToggle);
	if(navbarToggle == true){
		navbarList.style.display = "flex";
	}else{
		navbarList.style.display = "none";
	}
});
