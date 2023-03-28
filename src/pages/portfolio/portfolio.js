import { createPageStructure, getPageWrapper } from '../../app/pageBuilder.js';
import { getPortfolioContent, initLoadMoreButton } from '../../app/contentLoader.js';

import styles from '../../styles/styles.scss';

async function initPortfolioPage() {
	await createPageStructure();

	const wrapper = getPageWrapper();

	const content = await getPortfolioContent('portfolio');
	wrapper.innerHTML += content;

	const container = document.querySelector('#portfolio');
	initLoadMoreButton(container);
}

initPortfolioPage();