import { createPageStructure, getPageWrapper } from '../../app/components/PageBuilder.js';

import { MEDIUM_URL } from '../../app/apiEndpoints.js';
import { getBlogContent } from '../../app/contentLoader.js';
import styles from '../../styles/styles.scss';

async function initBlogPage() {
	await createPageStructure();

	const wrapper = getPageWrapper();

	const content = await getBlogContent('blog');
	wrapper.innerHTML += content;

	const postLinks = wrapper.querySelectorAll('.post-link');
	postLinks.forEach((postLink) => {
		postLink.addEventListener('click', (event) => {
			event.preventDefault();
			const slug = postLink.dataset.slug;
			window.location.href = `${MEDIUM_URL + slug}`;
		});
	});
}

initBlogPage();
