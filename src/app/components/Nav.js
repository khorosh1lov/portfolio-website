/**
 * Function to create the navigation element
 * @function
 * @returns {HTMLElement} - The navigation bar element
 */
const createNav = (pages) => {
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

	pages.forEach((page) => {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = page === 'Home' ? '/' : `/${page.toLowerCase()}`;
		a.textContent = page;
		li.appendChild(a);
		ul.appendChild(li);
	});

	return aside;
};

export default createNav;
