import createFooterTemplate from './app/components/Footer.js';
import createHeaderTemplate from './app/components/Header.js';
import { getHomeContent } from './app/contentLoader.js';
import { initMenu } from './app/components/Menu.js';
import styles from './styles/styles.scss';

(async () => {
	const headerTemplate = await createHeaderTemplate();
	const footerTemplate = createFooterTemplate();

	document.body.innerHTML = `
		${headerTemplate}
		<main id="page">
			<div class="page-wrapper"></div>
		</main>
		${footerTemplate}
  	`;

	const main = document.querySelector('#page');
	const wrapper = main.querySelector('.page-wrapper');
	const content = await getHomeContent();
	wrapper.innerHTML = content;

	initMenu();
})();
