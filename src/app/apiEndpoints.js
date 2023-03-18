/**
 * The base URL for the WordPress API
 * @constant BASE_URL
 * @type {string}
 */
const BASE_URL = 'http://localhost/portfolio/backend/wp-json/wp/v2/';
const MENU_URL = 'http://localhost/portfolio/backend/wp-json/custom/menu/';

/**
 * The endpoints for the WordPress API
 * @constant API_ENDPOINTS
 * @type {Object}
 * @property {string} getHomepageContent - The endpoint to get the content of the homepage
 * @property {string} getAllPosts - The endpoint to get all the blog posts
 * @property {string} getAllPortfolioPosts - The endpoint to get all the
 * portfolio posts
 */
const API_ENDPOINTS = {
	getHomepageContent: `${BASE_URL}pages/2`,
	getAllBlogPosts: `${BASE_URL}posts?categories=1`,
	getAllPortfolioPosts: `${BASE_URL}posts?categories=2`,
	getSocialMenu: `${MENU_URL}`,
};

export default API_ENDPOINTS;
