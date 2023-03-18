import createFooterTemplate from './Footer.js';
import createHeaderTemplate from './Header.js';
import { initMenu } from './Menu.js';

export async function createPageStructure(contentTemplate = '') {
	const headerTemplate = await createHeaderTemplate();
	const footerTemplate = createFooterTemplate();

	document.body.innerHTML = `
    ${headerTemplate}
    <main id="page">
      <div class="page-wrapper">
        ${contentTemplate}
      </div>
    </main>
    ${footerTemplate}
  `;

	initMenu();
}

export function getPageWrapper() {
	const main = document.querySelector('#page');
	const wrapper = main.querySelector('.page-wrapper');
	return wrapper;
}
