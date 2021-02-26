let portfolioFilter = document.querySelectorAll("[data-filter]");
portfolioFilter.forEach(function(item) {
	item.addEventListener("click" , function(){
		event.preventDefault();
		portfolioFilter.forEach(function(item) {
			item.classList.remove('active');
		});
		this.classList.add('active');
		let filter = this.getAttribute('data-filter');
		catSort(filter);
	});
});


function catSort(filterCat){
	let portfolioCat = document.querySelectorAll("[data-cat]");
		if (filterCat == 'all') {
			portfolioCat.forEach(function(item) {
				item.classList.remove('hide');
			});
		}else{
			portfolioCat.forEach(function(item) {
				let portfolioCatAttr = item.getAttribute('data-cat');
				if (filterCat !=portfolioCatAttr){
					item.classList.add('hide');
				}else{
					item.classList.remove('hide');
				}
			});
		}
}