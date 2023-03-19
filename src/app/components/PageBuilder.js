import createFooterTemplate from './Footer.js';
import createHeaderTemplate from './Header.js';
import { initMenu } from './Menu.js';
import { initSmoothScroll } from '../utils.js';

export async function createPageStructure() {
	const headerTemplate = await createHeaderTemplate();
	const footerTemplate = createFooterTemplate();

	const body = document.body;
	body.insertAdjacentHTML('afterbegin', headerTemplate);
	body.insertAdjacentHTML('beforeend', footerTemplate);

	initMenu();
	initSmoothScroll();
}

export function getPageWrapper() {
  const page = document.querySelector('#page');
  const wrapper = page.querySelector('.page-wrapper');
	return wrapper;
}
