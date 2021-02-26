let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
let body = document.querySelector('body');
let menuItem = document.querySelectorAll('.menu__item');
let menuItemActive = document.querySelectorAll('.menu_active');
let menu = document.querySelectorAll('.menu');

if(isMobile.any()){
	body.classList.add('touch');
	let arrow=document.querySelectorAll('.menu__arrow');
	for(i=0; i<arrow.length; i++){
		let thisLink=arrow[i].previousElementSibling;
		let subMenu=arrow[i].nextElementSibling;
		let thisArrow=arrow[i];
		thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			if (thisArrow.parentNode.classList.contains("menu__item")){
				subMenuClose(menuItem,subMenu);
			}
			subMenuPos(menuItem);
			subMenu.classList.toggle('_open');
			thisArrow.classList.toggle('_active');
		});
	}
}else{
	body.classList.add('mouse');
}

let menuBurger = document.querySelector('.menu__item-burger');
menuBurger.addEventListener('click', function(e) {
	event.preventDefault();
	let menuBurgerParent = menuBurger.parentNode;
	subMenuClose(menuItem,menuBurgerParent.querySelector('.sub-menu'));
	subMenuPos(menuItem,menu);
	menuBurgerParent.querySelector('.sub-menu').classList.toggle("_open");
	menuBurgerParent.querySelector('.menu__arrow').classList.toggle("_active");
	document.querySelector('.body').classList.remove('lock');
});

menuItemActive.forEach(elem =>  {
	elem.addEventListener('mousemove', function(e) {
		subMenuPos(menuItem);
	});
});

function subMenuClose(menuItem,thisSubMenu) {
	if (!thisSubMenu.classList.contains("_open")) {
		menuItem.forEach(elem => {
			if (elem)
			elem.querySelector('.sub-menu').classList.remove('_open');
			elem.querySelector('.menu__arrow').classList.remove('_active');
		});
	}
}

function subMenuPos(menuItem) {
	menuItem.forEach(elem => {
		let elemPosLeft = elem.offsetLeft;
		elem.querySelector('.sub-menu').style.left = `${elemPosLeft}px`;
	});
}