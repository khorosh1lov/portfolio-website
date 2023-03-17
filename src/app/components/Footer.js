/**
 * Function to create the footer element
 * @function
 * @returns {HTMLElement} - The footer element with the menuOpener child element
 */
const Footer = () => {
	const footer = document.createElement('footer');
	const menuOpener = document.createElement('div');
	menuOpener.id = 'menu-opener';
	menuOpener.className = 'mobile__menu_button';
	footer.appendChild(menuOpener);

	return footer;
};

export default Footer;
