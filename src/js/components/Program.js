import 'ScssComponents/_program.scss';
import Masonry from 'masonry-layout';

const Program = () => {
	function showMore() {
		const btn = document.querySelector('.ProgBtn');
		const list = document.querySelector('.program__list');
		let flag = false;
		let msnry;

		btn.addEventListener('click', () => {
			list.classList.toggle('program__list--active_state');

			if (flag) {
				flag = false;
				msnry.destroy();
				list.scrollIntoView();
			} else {
				flag = true;
				msnry = new Masonry('.program__list', {
					itemSelector: '.program__item',
					horizontalOrder: true,
				});
			}
		});
	}
	showMore();
};

export default Program;
