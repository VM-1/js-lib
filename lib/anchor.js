const anchors = document.querySelectorAll('a[class*="ancor"]')
	for(let anchor of anchors) {
		anchor.addEventListener("click",function(event) {
			event.preventDefault();
			const blockID = anchor.getAttribute('href')
			document.querySelector('' +blockID).scrollIntoView({
				behavior:"smooth",
				block: "start"
			})
		})
	};

let pageUp = document.querySelector('.page-up');
if (pageUp) {
	window.addEventListener('scroll', pageUpShow);
}

function pageUpShow() {
	let clientHeight = document.body.clientHeight;
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop >= clientHeight/2) {
		pageUp.classList.add('_active');
	}else {
		pageUp.classList.remove('_active');
	}
}
