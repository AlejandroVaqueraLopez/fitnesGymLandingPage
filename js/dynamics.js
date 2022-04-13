//variables
var cont = 0;
var elementPosition = 0;
//measure data(medidas)
let middleScreenHeight = window.innerHeight / 2;
//to initialize the position in elements
let transitionElementArray = document.querySelectorAll(".transitionElement");
let transitionReverseElementArray = document.querySelectorAll(".transitionReverseElement");
//initialize the translateX of elements
setPosition(transitionElementArray);
setPositionReverse(transitionReverseElementArray);

//window scroll event
window.addEventListener("scroll",()=>{
	activateTransition(transitionElementArray);
	activateTransition(transitionReverseElementArray);
});

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
