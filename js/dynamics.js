//variables
var cont = 0;
var elementPosition = 0;
var layoutToggle = false;
//measure data(medidas)
let middleScreenHeight = 100 + (window.innerHeight / 2);
//to initialize the position in elements
let headerElementArray = document.querySelectorAll(".headerElementArray");
let transitionElementArray = document.querySelectorAll(".transitionElement");
let transitionReverseElementArray = document.querySelectorAll(".transitionReverseElement");
let footerElementArray = document.querySelectorAll(".footerElementArray");
//button that activates layout
let btnActivateLayout = document.getElementById("btnActivateLayout");
let btnGoUp = document.getElementById("btnGoUp");
//initialize the translateX of elements
setPosition(transitionElementArray);
setPositionReverse(transitionReverseElementArray);

//window scroll event
window.addEventListener("scroll",()=>{
	visibleGoUp();
	activateTransition(transitionElementArray);
	activateTransition(transitionReverseElementArray);
});
btnGoUp.addEventListener("click",()=>{
	activateGoUp()
});

//make btnGoUp visible 
function visibleGoUp(){
	if(window.scrollY > window.innerHeight){
		btnGoUp.style.display = "block";
	}else{
		btnGoUp.style.display = "none";
	}
} 
//make btnGoUp function 
function activateGoUp(){
	window.scrollTo(
		{
			top:0,
			behavior:"smooth"
		}
	);// x,y
}

//setting translateX in 0
function activateTransition(elementArray){
	cont = 0;
	for(cont = 0;cont < elementArray.length;cont++){
		elementPosition = elementArray[cont].getBoundingClientRect();
		if(elementPosition.top <= middleScreenHeight){
			elementArray[cont].style.transform = "translateX(0px)";
		}
	}
}

//setting translateX in initial
function setPosition(transitionElementArray){
	for(cont = 0; cont < transitionElementArray.length; cont++){
		transitionElementArray[cont].style.transform = `translateX(${window.innerWidth + 100}px)`;
	}
	cont = 0;
}

//setting translateX in reverse 
function setPositionReverse(transitionReverseElementArray){
	for(cont = 0; cont < transitionReverseElementArray.length; cont++){
		transitionReverseElementArray[cont].style.transform = `translateX(-${window.innerWidth + 100}px)`;
	}
	cont = 0;
}

btnActivateLayout.addEventListener("click",()=>{
	layoutToggle = !layoutToggle;//true or false;
	cont = 0;
	if(layoutToggle == true){
		btnActivateLayout.value = "ACTIVATED";
		setOutline(headerElementArray,true);
		setOutline(transitionElementArray,true);
		setOutline(transitionReverseElementArray,true);
		setOutline(footerElementArray,true);
	}else if(layoutToggle == false){
		btnActivateLayout.value = "ACTIVATE";
		setOutline(headerElementArray,false);
		setOutline(transitionElementArray,false);
		setOutline(transitionReverseElementArray,false);
		setOutline(footerElementArray,false);
	}
});
//this function sets the outline depending of the action value
function setOutline(element,action){
	cont = 0;
	if(action === true){
		for(cont = 0; cont < element.length; cont ++){
			element[cont].style.outline = "solid #fff";
		}
	}else if(action === false){
		for(cont = 0; cont < element.length; cont ++){
			element[cont].style.outline = "none";
		}
	}
}