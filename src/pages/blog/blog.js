import { createPageStructure, getPageWrapper } from '../../app/components/PageBuilder.js';

import { getBlogContent } from '../../app/contentLoader.js';
import styles from '../../styles/styles.scss';

(async () => {
	const additionalContent = `
		<div class="test">Test Div</div>
	`;
	await createPageStructure();

	const wrapper = getPageWrapper();
	wrapper.insertAdjacentHTML('afterbegin', additionalContent);

	const content = await getBlogContent('blog');
	wrapper.innerHTML += content;
})();
