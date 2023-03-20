import { headerScrollBehavior, initMenu, initSmoothScroll } from './utils.js';

import createFooterTemplate from './components/Footer.js';
import createHeaderTemplate from './components/Header.js';

export async function createPageStructure() {
	const headerTemplate = await createHeaderTemplate();
	const footerTemplate = createFooterTemplate();

	const body = document.body;
	body.insertAdjacentHTML('afterbegin', headerTemplate);
	body.insertAdjacentHTML('beforeend', footerTemplate);

	initMenu();
	initSmoothScroll();
	headerScrollBehavior();
}

export function getPageWrapper() {
  const page = document.querySelector('#page');
  const wrapper = page.querySelector('.page-wrapper');
	return wrapper;
}
