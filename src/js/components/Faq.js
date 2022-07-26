import 'ScssComponents/_faq.scss';
import Accordion from './accordion';

const Faq = () => {
	const acc = new Accordion({
		triggers: document.querySelectorAll('.accordion__item_head'), // eslint-disable-line
		activeStateName: 'accordion__item--active-mod' // eslint-disable-line
	}).init();
};

export default Faq;
