// contentLoader.js

import API_ENDPOINTS from './apiEndpoints.js';
import axios from 'axios';
import { blogTemplate } from '../app/components/Blog.js';
import { portfolioTemplate } from '../app/components/Portfolio.js';

async function getContent(endpoint, headerTitle, templateFn, type = '') {
	try {
		const response = await axios.get(endpoint);
		const data = response.data;

		console.log(data);

		if (Array.isArray(data)) {
			const posts = data.map(templateFn).join('');

			const content = `
        <h1>${headerTitle}</h1>
        <section id="${type}">
        ${posts}
        </section>`;

			return content;
		}
	} catch (error) {
		console.error('Data receiving error:', error);
		return '';
	}
}

async function getHomeContent() {
	const content = await getContent(API_ENDPOINTS.getHomepageContent, 'Home');
	return content;
}

async function getBlogContent(categoryName) {
	const endpoint = API_ENDPOINTS.getAllBlogPosts + categoryName + '&_embed';
	const content = await getContent(endpoint, 'Blog', blogTemplate, 'posts');
	return content;
}

async function getPortfolioContent(categoryName) {
	const endpoint = API_ENDPOINTS.getAllPortfolioPosts + categoryName + '&_embed';
	const content = await getContent(endpoint, 'Portfolio', portfolioTemplate, 'portfolio');
	return content;
}

export { getHomeContent, getBlogContent, getPortfolioContent };
