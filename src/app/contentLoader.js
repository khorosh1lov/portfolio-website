import API_ENDPOINTS from './apiEndpoints.js';
import axios from 'axios';

async function getContent(endpoint, headerTitle) {
	try {
		const response = await axios.get(endpoint);
		const data = response.data;

		if (Array.isArray(data)) {
			const posts = data
				.map((item) => {
					return `
                        <article class="post">
                            <h2>${item.title.rendered}</h2>
                            <p>${item.content.rendered.split('.')[0]}.</p>
                        </article>`;
				})
				.join('');

			return `
                <h1>${headerTitle}</h1>
                <section id="posts">
                    ${posts}
                </section>`;
		} else {
			return `
                <h1>${data.title.rendered}</h1>
                ${data.content.rendered}`;
		}
	} catch (error) {
		console.error('Data receiving error:', error);
		return '';
	}
}

async function getMenu(endpoint) {
	try {
		const response = await axios.get(endpoint);
		return response.data;
	} catch (error) {
		console.error('Data receiving error:', error);
		return [];
	}
}

async function getSocialLinks(menu) {
	const socialLinks = await getMenu(API_ENDPOINTS.getSocialMenu + menu);
	return socialLinks;
}

async function getHomeContent() {
	return getContent(API_ENDPOINTS.getHomepageContent, 'Home');
}

async function getBlogContent(categoryName) {
	return getContent(API_ENDPOINTS.getAllBlogPosts + categoryName, 'Blog');
}

async function getPortfolioContent(categoryName) {
	return getContent(API_ENDPOINTS.getAllPortfolioPosts + categoryName, 'Portfolio');
}

export { getHomeContent, getBlogContent, getPortfolioContent, getSocialLinks };
