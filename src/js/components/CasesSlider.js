import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
// import 'swiper/scss/scrollbar';
import buildSliders from './buildSwiper';

const CasesSlider = () => {
	const sliderClass = '.CasesSlider';
	buildSliders(sliderClass);

	let slideEl = document.querySelectorAll(sliderClass);

	if (typeof (slideEl) !== 'undefined' && slideEl != null) {
		let sliderEl = new Swiper(sliderClass, {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			speed: 800,
			slidesPerView: 3,
			spaceBetween: 30,
			// loop: true,
			navigation: {
				prevEl: '.slider_arrow--prev',
				nextEl: '.slider_arrow--next',
			},
			pagination: {
				el: '.slider_dots',
				type: 'bullets',
				clickable: true,
			},

		});
	}
};

export default CasesSlider;
