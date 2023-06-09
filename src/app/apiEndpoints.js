/**
 * The base URL for the WordPress API
 * @constant BASE_URL
 * @type {string}
 */
const BASE_URL = 'https://webeat.dev/backend/wp-json/wp/v2/';
const MENU_URL = 'https://webeat.dev/backend/wp-json/custom/menu/';
export const MEDIUM_URL = 'https://khoroshilov-alex.medium.com/';
export const GITHUB_URL = 'https://github.com/khorosh1lov/';
export const SUBDOMAIN_URL = '.webeat.dev/';
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
	getAllBlogPosts: `${BASE_URL}posts?category_name=`,
	getAllPortfolioPosts: `${BASE_URL}posts?category_name=`,
	getSocialMenu: `${MENU_URL}`,
};

export default API_ENDPOINTS;
