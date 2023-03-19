import API_ENDPOINTS from './apiEndpoints.js';
import axios from 'axios';

async function getContent(endpoint, headerTitle) {
	try {
		const response = await axios.get(endpoint);
		const data = response.data;

		if (Array.isArray(data)) {
			const posts = data
				.map((item) => {
					const thumbnailUrl = item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0].source_url : '';

					return `
                        <article class="post">
                            <a href="${item.link.replace('localhost/portfolio/backend', 'localhost/portfolio/blog')}" target="_blank">
                                <h2>${item.title.rendered}</h2>
                                <p>${item.content.rendered.split('.')[0]}.</p>
                                <img src="${thumbnailUrl}" alt="${item.title.rendered}">
                            </a>
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
	const content = await getContent(API_ENDPOINTS.getHomepageContent, 'Home');
	return content;
}

async function getBlogContent(categoryName) {
	const endpoint = API_ENDPOINTS.getAllBlogPosts + categoryName + '&_embed';
	const content = await getContent(endpoint, 'Blog');
	return content;
}

async function getPortfolioContent(categoryName) {
	const endpoint = API_ENDPOINTS.getAllPortfolioPosts + categoryName + '&_embed';
	const content = await getContent(endpoint, 'Portfolio');
	return content;
}


export { getHomeContent, getBlogContent, getPortfolioContent, getSocialLinks };
