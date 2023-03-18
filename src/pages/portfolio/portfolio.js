import createFooterTemplate from '../../app/components/Footer.js';
import createHeaderTemplate from '../../app/components/Header.js';
import { getPortfolioContent } from '../../app/contentLoader.js';
import { initMenu } from '../../app/components/Menu.js';
import styles from '../../styles/styles.scss';

(async () => {
	const headerTemplate = await createHeaderTemplate();
	const footerTemplate = createFooterTemplate();

	document.body.innerHTML = `
		${headerTemplate}
		<main id="page"></main>
		${footerTemplate}
  	`;

	const main = document.querySelector('#page');
	const content = await getPortfolioContent();
	main.innerHTML = content;

	initMenu();
})();
