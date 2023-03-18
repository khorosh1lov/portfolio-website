/**
 * Function to create the footer template
 * @function
 * @returns {string} - The footer template
 */
const createMainTemplate = (headerTemplate, footerTemplate, content) => {
	return `
    	${headerTemplate}
		<main id="page">
			<div class="page-wrapper">${content}</div>
		</main>
		${footerTemplate}
  `;
};

export default createMainTemplate;
