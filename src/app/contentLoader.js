// contentLoader.js

import API_ENDPOINTS from './apiEndpoints.js';
import axios from 'axios';
import { blogTemplate } from '../app/components/Blog.js';
import { portfolioTemplate } from '../app/components/Portfolio.js';

async function getContent(endpoint, templateFn, type = '') {
	try {
		const response = await axios.get(endpoint);
		const data = response.data;

		if (Array.isArray(data)) {
			const posts = data.map(templateFn).join('');

			const content = `
				<section id="${type}">
				${posts}
				</section>
			`;

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
	const content = await getContent(endpoint, blogTemplate, 'posts');
	return content;
}

async function getPortfolioContent(categoryName, page = 1) {
	const endpoint = `${API_ENDPOINTS.getAllPortfolioPosts}${categoryName}&_embed&per_page=10&page=${page}`;
	const content = await getContent(endpoint, portfolioTemplate, 'portfolio');
	return content;
}

async function initLoadMoreButton(container) {
	const loadMoreButton = document.createElement('button');
	loadMoreButton.id = 'load-more-button';
	loadMoreButton.innerText = 'Load More';

	container.appendChild(loadMoreButton);

	let page = 1;

	loadMoreButton.addEventListener('click', async () => {
		page += 1;
		const categoryName = 'portfolio';
		const newContent = await getPortfolioContent(categoryName, page);
		const portfolioContainer = document.getElementById('portfolio');

		if (newContent.trim().length > 0) {
			portfolioContainer.insertAdjacentHTML('beforeend', newContent);
			loadMoreButton.remove();
			container.appendChild(loadMoreButton);
		} else {
			loadMoreButton.remove();
		}
	});
}


export { getHomeContent, getBlogContent, getPortfolioContent, initLoadMoreButton };
