/* eslint-disable */
import 'ScssComponents/_program.scss';
import Masonry from 'masonry-layout';

const Program = () => {

	// window.addEventListener('resize', () => {
	// 	initInfoSlider();
	// });

	function showMore() {
		let isInit = true;
		const btn = document.querySelector('.ProgBtn');
		const list = document.querySelector('.program__list');
		const title = document.querySelector('.program__title');
		let flag = false;
		let msnry;

		if (window.innerWidth >= 1024 && isInit) {
			isInit = false;
			console.log(window.innerWidth, isInit);
			btn.addEventListener('click', () => {
				console.log('click add');

				list.classList.toggle('program__list--active_state');
				btn.classList.toggle('program__btn--active_state');

				if (flag) {
					flag = false;
					msnry.destroy();
					title.scrollIntoView();
				} else {
					flag = true;
					msnry = new Masonry('.program__list', {
						itemSelector: '.program__item',
						// horizontalOrder: true,
					});
				}
			});
		}

		if (window.innerWidth < 1024 && !isInit) {
			console.log('off');
			msnry.destroy();
			flag = true;
			isInit = true;
		}

		// btn.addEventListener('click', () => {

		// 	list.classList.toggle('program__list--active_state');
		// 	btn.classList.toggle('program__btn--active_state');

		// 	if (flag) {
		// 		flag = false;
		// 		msnry.destroy();
		// 		title.scrollIntoView();
		// 	} else {
		// 		flag = true;
		// 		msnry = new Masonry('.program__list', {
		// 			itemSelector: '.program__item',
		// 			// horizontalOrder: true,
		// 		});
		// 	}
		// });
	}


	showMore();
};

export default Program;
