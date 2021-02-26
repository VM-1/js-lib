let burgerMenu = document.querySelector(".burger__icon");
burgerMenu.addEventListener("click", function(){
	burgerMenu.classList.toggle('_active');
	document.querySelector(".burger-menu").classList.toggle('_active');
})