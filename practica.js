function navigate(section){
	alert("aqui seria la seccion:"+section+"✨");
}
window.onload=()=>{
	document.body.style.opacity=0;
	setTimeout(()=>{
		document.body.style.transition="opacity 1.2s";
		document.body.style.opacity	=1;
	},200);
};



document.addEventListener('DOMContentLoaded',()=>{

let index = 0;
const slides=
document.querySelectorAll('.slides .img2');
const slidesContainer=
document.querySelector('.slides');

window.moveSlide=function(direction){
	index += direction;
	if (index < 0) index = slides.length-1;
	if (index >=slides.length) index = 0;
	update();
};

function update() {
	slidesContainer.style.transform = 
	`translateX(${-index * 100}%)`;
}
	update();
	setInterval(()=>{
		window.moveSlide(1);
	},3000);
});



