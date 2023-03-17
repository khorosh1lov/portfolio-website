import API_ENDPOINTS from './apiEndpoints.js';
import axios from 'axios';

function getContent(endpoint, headerTitle, header, main) {
	axios
		.get(endpoint)
		.then((response) => {
			const data = response.data;

			const h1 = document.createElement('h1');

			if (Array.isArray(data)) {
				h1.innerHTML = headerTitle;
				header.appendChild(h1);

				const section = document.createElement('section');
				section.id = 'posts';

				data.forEach((item) => {
					const article = document.createElement('article');
					article.className = 'post';

					const postTitle = document.createElement('h2');
					postTitle.innerHTML = item.title.rendered;
					article.appendChild(postTitle);

					const postContent = document.createElement('p');
					const postText = item.content.rendered.split('.');
					postContent.innerHTML = postText[0] + '.';
					article.appendChild(postContent);

					section.appendChild(article);
				});

				main.appendChild(section);
			} else {
				h1.innerHTML = data.title.rendered;
				header.appendChild(h1);
				main.innerHTML = data.content.rendered;
			}
		})
		.catch((error) => {
			console.error('Data receiving error:', error);
		});
}


function getSocialLinks(endpoint) {
	// TODO: Write function to get Social Links from API
}


function getHomeContent(header, main) {
	getContent(API_ENDPOINTS.getHomepageContent, 'Home', header, main);
}

function getBlogContent(header, main) {
	getContent(API_ENDPOINTS.getAllBlogPosts, 'Blog', header, main);
}

function getPortfolioContent(header, main) {
	getContent(API_ENDPOINTS.getAllPortfolioPosts, 'Portfolio', header, main);
}

export { getHomeContent, getBlogContent, getPortfolioContent };
