import API_ENDPOINTS from './apiEndpoints.js';
import axios from 'axios';

/**
 * Function to get the content of the homepage from the API and add it to the page
 * @function
 * @param {HTMLElement} page - The HTML element to add the content to
 * @param {Function} header - The function to add the header
 * @param {Function} main - The function to add the main content
 */
function getHomeContent(header, main) {
	axios
		.get(API_ENDPOINTS.getHomepageContent)
		.then((response) => {
			const content = response.data;

			const h1 = document.createElement('h1');
			h1.innerHTML = content.title.rendered;
			header.appendChild(h1);

			main.innerHTML = content.content.rendered;
		})
		.catch((error) => {
			console.error('Data receiving error:', error);
		});
}

/**
 * Function to get the content of the blog page from the API and add it to the page
 * @function
 * @param {HTMLElement} page - The HTML element to add the content to
 * @param {Function} addHeader - The function to add the header
 * @param {Function} addMain - The function to add the main content
 */
function getBlogContent(header, main) {
	axios
		.get(API_ENDPOINTS.getAllPosts)
		.then((response) => {
			const posts = response.data;

			// Создайте элемент <h1> для заголовка страницы блога
			const h1 = document.createElement('h1');
			h1.innerHTML = 'Blog';
			header.appendChild(h1);

			// Создайте элемент <section> для статей
			const section = document.createElement('section');
			section.id = 'posts';

			// Цикл по статьям и создание элементов <article> с классом "post"
			posts.forEach((post) => {
				const article = document.createElement('article');
				article.className = 'post';

				const postTitle = document.createElement('h2');
				postTitle.innerHTML = post.title.rendered;
				article.appendChild(postTitle);

				const postContent = document.createElement('p');
				const postText = post.content.rendered.split('.');
				postContent.innerHTML = postText[0] + '.';
				article.appendChild(postContent);

				section.appendChild(article);
			});

			// Добавьте созданный <section> в элемент <main>
			main.appendChild(section);
		})
		.catch((error) => {
			console.error('Data receiving error:', error);
		});
}

export { getHomeContent, getBlogContent };
