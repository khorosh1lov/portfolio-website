import { handleRoutes } from '../Router.js';

/**
 * Function to create the navigation element
 * @function
 * @param {Array} Router - The array of routes for the navigation bar
 * @param {Function} addHeader - The function to add the header to the page
 * @param {Function} addMain - The function to add the main content to the page
 * @returns {HTMLElement} - The navigation bar element
 */
const Nav = (Router, addHeader, addMain) => {
	const aside = document.createElement('aside');
	const nav = document.createElement('nav');
	nav.id = 'menu';
	nav.setAttribute('role', 'navigation');
	aside.appendChild(nav);

	const menuClose = document.createElement('div');
	menuClose.className = 'menu__close';
	menuClose.id = 'menu-closer';
	nav.appendChild(menuClose);

	const ul = document.createElement('ul');
	ul.className = 'menu__links';
	nav.appendChild(ul);

	Router.forEach((link) => {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = link.href;
		a.textContent = link.text;
		a.addEventListener('click', (event) => {
			event.preventDefault();
			window.history.pushState(null, null, link.href);
			handleRoutes(addHeader, addMain);
		});
		li.appendChild(a);
		ul.appendChild(li);
	});

	return aside;
};

export default Nav;
