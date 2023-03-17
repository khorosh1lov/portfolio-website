/**
 * Function to open the menu and hide the overflow of the body
 * @function
 */
export function openMenu() {
	document.body.style.overflow = 'hidden';
	document.getElementById('menu').className = 'opened';
}

/**
 * Function to close the menu and show the overflow of the body
 * @function
 */
export function closeMenu() {
	document.body.style.overflow = 'auto';
	document.getElementById('menu').className = '';
}

export function initMenu() {
	document.querySelector('#menu-opener').addEventListener('click', openMenu);
	document.querySelector('#menu-closer').addEventListener('click', closeMenu);
}
