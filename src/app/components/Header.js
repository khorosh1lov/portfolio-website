/**
 * Function to create the header element with an h1 element containing a title
 * @function
 * @param {string} title - The title to be added to the h1 element
 * @returns {Object} - An object containing the header element and its h1 child element
 * @property {HTMLElement} header - The header element
 * @property {HTMLElement} h1 - The h1 child element of the header element
 */
const createHeader = () => {
	const header = document.createElement('header');
	return header;
};

export default createHeader;
