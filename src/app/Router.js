/**
 * Importing required modules
 * @module getBlogContent
 * @module getContent
 */

import { getBlogContent, getContent } from './contentLoader.js';

/**
 * The base path of the application
 * @constant basePath
 * @type {string}
 */
const basePath = '/';

/**
 * The routes of the application
 * @constant routes
 * @type {Array.<{href: string, text: string}>}
 */
const routes = [
	{ href: `${basePath}`, text: 'Home' },
	{ href: `${basePath}blog`, text: 'Blog' },
	{ href: `${basePath}portfolio`, text: 'Portfolio' },
];

/**
 * Function that returns the routes of the application or a specific route based on the parameter provided
 * @function
 * @param {number} route - The index of the route to return
 * @returns {Array.<{href: string, text: string}>} - The routes of the application
 */
const Router = (route) => {
	if (!route) return routes;
	return routes[route];
};

/**
 * Function that handles routing and displays content based on the current route
 * @function
 */
const handleRoutes = () => {
	const route = window.location.pathname;
	const routes = Router();

	const currentRoute = routes.find((r) => r.href === route);

	// TODO: Switch instead of IF-statements
	if (currentRoute) {
		if (route === `${basePath}/`) {
			getContent(addHeader, addMain);
		} else if (route === `${basePath}/blog`) {
			getBlogContent(addHeader, addMain);
		} else if (route === `${basePath}/portfolio`) {
			// TODO: portfolio function
		}
	} else {
		console.log('No such path or page');
		// TODO: 404 page
	}
};

export { Router, handleRoutes };
