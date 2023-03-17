/**
 * Function to create the header element with an h1 element containing a title
 * @function
 * @param {string} title - The title to be added to the h1 element
 * @returns {Object} - An object containing the header element and its h1 child element
 * @property {HTMLElement} header - The header element
 * @property {HTMLElement} h1 - The h1 child element of the header element
 */
const Header = (title) => {
	const header = document.createElement('header');
	const h1 = document.createElement('h1');
	h1.append(title);
	header.appendChild(h1);

	return { header, h1 };
};

export default Header;
