const prev = document.querySelector('.prev-btn'),
 	next = document.querySelector('.next-btn'),
 	slides = document.querySelectorAll('.slide'),
 	dots = document.querySelectorAll('.dot'),
 	slidesWrapper = document.querySelector('.slider-wrapper');

let index = 0;

const activeSlide = n =>{
	for (slide of slides){
		slide.classList.remove('active'); 
	}
	slides[n].classList.add('active');
}
const activeDot = n =>{
	for (dot of dots){
		dot.classList.remove('active'); 
	}
	dots[n].classList.add('active');
}   
const prepereCurentSlide = ind =>{
	activeSlide(ind);
	activeDot(ind);

}
const nextSlide = () =>{
	event.preventDefault();
	if (index == slides.length - 1){
		index = 0
	}else{
		index++
	}
	prepereCurentSlide(index);
}
const prevSlide = () =>{
	event.preventDefault();
	if (index == 0){
		index = slides.length - 1
	}else{
		index--
	}
	prepereCurentSlide(index);
}


next.addEventListener('click',nextSlide);
prev.addEventListener('click',prevSlide);