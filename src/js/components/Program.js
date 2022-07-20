import 'ScssComponents/_program.scss';

const Program = () => {
	function showMore() {
		const btn = document.querySelector('.ProgBtn');
		const list = document.querySelector('.program__list');

		btn.addEventListener('click', () => {
			list.classList.toggle('program__list--active_state');
		});
	}
	showMore();
};

export default Program;
