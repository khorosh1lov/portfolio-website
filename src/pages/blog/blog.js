import { createPageStructure, getPageWrapper } from '../../app/components/PageBuilder.js';

import Router from '../../app/Router.js';
import { getBlogContent } from '../../app/contentLoader.js';
import { getSingleBlogContent } from '../../app/contentLoader.js';
import styles from '../../styles/styles.scss';

const router = new Router([
	{
		path: '/blog',
		action: async () => {
			await createPageStructure();

			const wrapper = getPageWrapper();

			const content = await getBlogContent('blog');
			wrapper.innerHTML += content;
		},
	},
	{
		path: '/blog/:slug',
		action: async () => {
			await createPageStructure();

			const wrapper = getPageWrapper();

			const slug = window.location.pathname.split('/')[2];
			const content = await getSingleBlogContent(slug);
			wrapper.innerHTML += content;
		},
	},
]);