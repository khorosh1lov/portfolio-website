/**
 * The base URL for the WordPress API
 * @constant BASE_URL
 * @type {string}
 */
const BASE_URL = 'http://localhost/portfolio/backend/wp-json/wp/v2/';

/**
 * The secondary URL for the WordPress API
 * @constant SECOND_URL
 * @type {string}
 */
const SECOND_URL = 'http://localhost/portfolio/backend/wp-json/none/v1/';

/**
 * The endpoints for the WordPress API
 * @constant API_ENDPOINTS
 * @type {Object}
 * @property {string} getHomepageContent - The endpoint to get the content of the homepage
 * @property {string} getAllPosts - The endpoint to get all the posts
 * @property {string} getNavLinks - The endpoint to get the navigation links
 */
const API_ENDPOINTS = {
	getHomepageContent: `${BASE_URL}pages/2`,
	getAllPosts: `${BASE_URL}posts`,
	getNavLinks: `${SECOND_URL}menus/main`,
};

export default API_ENDPOINTS;
