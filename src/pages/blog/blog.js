import createFooter from '../../app/components/Footer.js';
import createHeader from '../../app/components/Header.js';
import createNav from '../../app/components/Nav.js';
import { getBlogContent } from '../../app/contentLoader.js';
import styles from '../../styles/styles.scss';

const header = createHeader();
const nav = createNav(['Home', 'Blog']);
const footer = createFooter();

document.body.prepend(header);
document.body.prepend(nav);
document.body.appendChild(footer);

const main = document.querySelector('#page');

getBlogContent(header, main);

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
