var elem = document.querySelector('.portfolio-filter-body');
var iso = new Isotope( elem, {
  // options
	itemSelector: '.filter-body-img',
	layoutMode: 'fitRows',
   percentPosition: true,
	masonry: {
		columnWidth: '.filter-body-img',
		// horizontalOrder: true,
	   // gutter: 30
	}

});

// element argument can be a selector string
//   for an individual element
var iso = new Isotope( '.portfolio-filter-body', {
  // options
});