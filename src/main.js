/**
Importing required modules
@module Router
@module handleRoutes
@module addFooter
@module addHeader
@module addMain
@module addNavigation
@module getBlogContent
@module getContent
@module Footer
@module Nav
@module styles
*/

import { Router, handleRoutes } from './app/Router.js';
import { addFooter, addHeader, addMain, addNavigation } from './app/domUtils.js';
import { getBlogContent, getContent } from './app/contentLoader.js';

import Footer from './app/components/Footer.js';
import Nav from './app/components/Nav.js';
import styles from './styles/styles.scss';

/**
 * Creates a new router instance
 * @constant router
 */
const router = Router();

/**
 * Creates a new navigation instance with the router, addHeader, and addMain functions as arguments
 * @constant navigation
 */
const navigation = Nav(router, addHeader, addMain);

/**
 * Creates a new Footer instance
 * @constant footer
 */
const footer = Footer();

/**
 * Gets the HTML element with ID 'page'
 * @constant page
 */
const page = document.querySelector('#page');

/**
 * Adds navigation bar to the page using the addNavigation function
 * @function
 * @param {HTMLElement} page - The HTML element to add the navigation bar to
 * @param {HTMLElement} navigation - The navigation bar to be added
 */
addNavigation(page, navigation);

/**
 * Gets the content of the page using the getContent function and adds the header and main content using the addHeader and addMain functions
 * @function
 * @param {HTMLElement} page - The HTML element to add the content to
 * @param {HTMLElement} addHeader - The function to add the header
 * @param {HTMLElement} addMain - The function to add the main content
 */
getContent(page, addHeader, addMain);

/**
 * Adds footer to the page using the addFooter function
 * @function
 * @param {HTMLElement} page - The HTML element to add the footer to
 * @param {HTMLElement} footer - The footer to be added
 */
addFooter(page, footer);

/**
 * Function to open the menu and hide the overflow of the body
 * @function
 */
function openMenu() {
	document.body.style.overflow = 'hidden';
	document.getElementById('menu').className = 'opened';
}

/**
 * Function to close the menu and show the overflow of the body
 * @function
 */
function closeMenu() {
	document.body.style.overflow = 'auto';
	document.getElementById('menu').className = '';
}

document.getElementById('menu-opener').addEventListener('click', openMenu);
document.getElementById('menu-closer').addEventListener('click', closeMenu);

window.addEventListener('load', () => handleRoutes());
window.addEventListener('popstate', () => handleRoutes());
