import { applyThemeByTime, getStoredTheme, headerScrollBehavior, initMenu, initSmoothScroll, switchTheme } from './utils.js';

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

	const storedTheme = getStoredTheme();
	if (storedTheme) {
		switchTheme(storedTheme);
	} else {
		applyThemeByTime();
	}

	const themeSwitcher = document.querySelector('.toggler__input');
	if (storedTheme === 'dark') {
		themeSwitcher.checked = true;
	} else {
		themeSwitcher.checked = false;
	}

	themeSwitcher.addEventListener('change', (e) => {
		const selectedTheme = e.target.checked ? 'dark' : 'light';
		switchTheme(selectedTheme);
	});
}

export function getPageWrapper() {
	const page = document.querySelector('#page');
	const wrapper = page.querySelector('.page-wrapper');
	return wrapper;
}
