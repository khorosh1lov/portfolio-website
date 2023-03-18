import { createPageStructure, getPageWrapper } from '../src/app/components/PageBuilder.js';

import { getHomeContent } from './app/contentLoader.js';
import styles from './styles/styles.scss';

(async () => {
	await createPageStructure();

	const wrapper = getPageWrapper();
	const content = await getHomeContent();
	wrapper.innerHTML = content;
})();
