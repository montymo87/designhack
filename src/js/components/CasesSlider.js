import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
// import 'swiper/scss/scrollbar';
import buildSliders from './buildSwiper';

const CasesSlider = () => {
	const sliderClass = '.CasesSlider';
	buildSliders(sliderClass);

	let slideEl = document.querySelectorAll(sliderClass);

	if (typeof (slideEl) !== 'undefined' && slideEl != null) {
		let sliderEl = new Swiper(sliderClass, {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			speed: 800,
			spaceBetween: 30,
			// loop: true,
			navigation: {
				prevEl: '.slider_arrow--prev',
				nextEl: '.slider_arrow--next',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			},

		});
	}
};

export default CasesSlider;
