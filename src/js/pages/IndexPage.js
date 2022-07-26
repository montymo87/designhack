import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';

import Hero from 'components/Hero';
import Why from 'components/Why';
import Who from 'components/Who';
import Result from 'components/Result';
import Program from 'components/Program';
import How from 'components/How';
import Price from 'components/Price';
import Speakers from 'components/Speakers';
import Cases from 'components/Cases';
import Faq from 'components/Faq';
import Materials from 'components/Materials';

export default class IndexPage {
	constructor() {
		this.init = this.init.bind(this);
	}

	loadFunc() {
		Hero();
		Why();
		Who();
		Result();
		Program();
		How();
		Price();
		Speakers();
		Cases();
		Faq();
		Materials();
	}

	init() {
		pageLoad(() => {
			this.loadFunc();
		});
	}
}
