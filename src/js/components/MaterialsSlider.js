import Swiper, { Pagination } from 'swiper';
import 'swiper/css';
import buildSliders from './buildSwiper';

const MaterialsSlider = () => {
	const sliderClass = '.MaterialsSlider';
	buildSliders(sliderClass);

	let slideEl = document.querySelectorAll(sliderClass);

	if (typeof (slideEl) !== 'undefined' && slideEl != null) {
		let sliderEl = new Swiper(sliderClass, {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			speed: 800,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
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
