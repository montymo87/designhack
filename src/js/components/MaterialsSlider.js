import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/scss/scrollbar';
import buildSliders from './buildSwiper';

const MaterialsSlider = () => {
	const sliderClass = '.MaterialsSlider';
	buildSliders(sliderClass);

	let slideEl = document.querySelectorAll(sliderClass);

	if (typeof (slideEl) !== 'undefined' && slideEl != null) {
		let sliderEl = new Swiper(sliderClass, {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			speed: 800,
			slidesPerView: 1,
			spaceBetween: 30,
			// loop: true,
			pagination: {
				el: '.slider_dots',
				type: 'bullets',
				clickable: true,
			},

		});
	}
};

export default MaterialsSlider;
