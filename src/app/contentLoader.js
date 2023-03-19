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
							<div class="card">
								<a href="/blog/${item.slug}" data-slug="${item.slug}" class="post-link">
									<div class="card-image">
										<img src="${thumbnailUrl}" alt="${item.title.rendered}">
									</div>
									<div class="card-content">
										<h2>${item.title.rendered}</h2>
										<i>${item.content.rendered.split('.')[0]}.</i>
									</div>
								</a>
							</div>
						</article>`;
				})
				.join('');

			const content = `
				<h1>${headerTitle}</h1>
				<section id="posts">
				${posts}
				</section>`;

			return content;
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

export { getHomeContent, getBlogContent, getPortfolioContent };
