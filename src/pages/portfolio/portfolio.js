import { createPageStructure, getPageWrapper } from '../../app/components/PageBuilder.js';

import { getPortfolioContent } from '../../app/contentLoader.js';
import styles from '../../styles/styles.scss';

(async () => {
	await createPageStructure();

	const wrapper = getPageWrapper();
	const content = await getPortfolioContent('portfolio');
	wrapper.innerHTML = content;
})();