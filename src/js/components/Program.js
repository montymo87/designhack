/* eslint-disable */
import 'ScssComponents/_program.scss';
import Masonry from 'masonry-layout';
import Accordion from '../components/accordion';

const Program = () => {

	const btn = document.querySelector('.ProgBtn');
	const list = document.querySelector('.program__list');
	const title = document.querySelector('.program__title');
	const progBg = document.querySelector('.program__decor2_img');

	let scrollToggler = true;
	let flag = false;
	let isInitAcc = true;
	let isInitMsnry = true;
	let msnry;

	btn.addEventListener('click', () => {

		if (list) list.classList.toggle('program__list--active_state');
		if (btn) btn.classList.toggle('program__btn--active_state');
		if (progBg) progBg.classList.toggle('program__decor2_img--show_mod');

		if (!scrollToggler) {
			title.scrollIntoView();
			scrollToggler = true;
			msnry.destroy();
		} else {
			scrollToggler = false;
			msnry = new Masonry('.program__list', {
				itemSelector: '.program__item',
				horizontalOrder: true,
			});
		}
	});

	const initListener = () => {

		let progAcc = new Accordion({
			triggers: document.querySelectorAll('.programAcc'), // eslint-disable-line
			activeStateName: 'program__item--active-mod' // eslint-disable-line
		});

		if (window.innerWidth < 1024) {

			if (isInitAcc) {
				if (!flag) {
					progAcc.init();
					flag = true;
				}
				if (msnry instanceof Object) msnry.destroy();
				isInitAcc = false;
				isInitMsnry = true;
			}
		}

		if (window.innerWidth > 1024) {
			if (isInitMsnry) {
				progAcc.disable();
				if (msnry instanceof Object) {
					msnry = new Masonry('.program__list', {
						itemSelector: '.program__item',
						horizontalOrder: true,
					});
				}
				isInitAcc = true;
				isInitMsnry = false;
			}
		}
	}

	initListener();

	window.addEventListener('resize', () => {
		initListener();
	});

};

export default Program;
