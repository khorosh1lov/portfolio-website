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
	const content = await getContent(API_ENDPOINTS.getHomepageContent, 'Home');
	console.log('Home content:', content);
	return content;
}

async function getBlogContent(categoryName) {
	const endpoint = API_ENDPOINTS.getAllBlogPosts + categoryName;
	console.log('Blog endpoint:', endpoint);
	const content = await getContent(endpoint, 'Blog');
	console.log('Blog content:', content);
	return content;
}

async function getPortfolioContent(categoryName) {
	const endpoint = API_ENDPOINTS.getAllPortfolioPosts + categoryName;
	console.log('Portfolio endpoint:', endpoint);
	const content = await getContent(endpoint, 'Portfolio');
	console.log('Portfolio content:', content);
	return content;
}


export { getHomeContent, getBlogContent, getPortfolioContent, getSocialLinks };
