import API_ENDPOINTS from './apiEndpoints.js';
import Header from './components/Header.js';
import Page from './components/Page.js';
import axios from 'axios';

/**
 * Function to get the content of the homepage from the API and add it to the page
 * @function
 * @param {HTMLElement} page - The HTML element to add the content to
 * @param {Function} addHeader - The function to add the header
 * @param {Function} addMain - The function to add the main content
 */
function getContent(page, addHeader, addMain) {
	axios
		.get(API_ENDPOINTS.getHomepageContent)
		.then((response) => {
			const content = response.data;
			const { header, h1 } = Header();
			const main = Page('home', 'about', content);

			addHeader(page, header, h1, content.title.rendered);
			addMain(page, main);
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
function getBlogContent(page, addHeader, addMain) {
	axios
		.get(API_ENDPOINTS.getAllPosts)
		.then((response) => {
			const content = response.data;
			const { header, h1 } = Header();
			const main = Page('blog', 'posts', content);

			addHeader(page, header, h1, content.title.rendered);
			addMain(page, main);
		})
		.catch((error) => {
			console.error('Data receiving error:', error);
		});
}

export { getContent, getBlogContent };
