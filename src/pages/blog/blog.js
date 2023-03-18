import { createPageStructure, getPageWrapper } from '../../app/components/PageBuilder.js';

import { getBlogContent } from '../../app/contentLoader.js';
import styles from '../../styles/styles.scss';

(async () => {
	await createPageStructure();

	const wrapper = getPageWrapper();
	const content = await getBlogContent('blog');
	wrapper.innerHTML = content;
})();
