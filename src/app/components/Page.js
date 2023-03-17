/**
 * Function to create the main content element with an optional section and data content
 * @function
 * @param {string} typeId - The id attribute of the main content element
 * @param {string} sectionId - The id attribute of the section element
 * @param {Object} data - The data content to be added to the section element
 * @returns {HTMLElement} - The main content element
 */
const Page = (typeId = '', sectionId = '', data = {}) => {
	const page = document.createElement('main');
	page.id = typeId;
	const section = document.createElement('section');
	section.id = sectionId;

	if (data) {
		section.innerHTML = data.content.rendered;
	}

	page.appendChild(section);
	return page;
};

export default Page;
