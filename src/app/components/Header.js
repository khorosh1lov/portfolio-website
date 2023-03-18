import createNavTemplate from './Nav.js';
import routes from '../routes.js';

/**
 * Function to create the header template with the navigation template
 * @function
 * @returns {Promise<string>} - The header template with the navigation template
 */
const createHeaderTemplate = async () => {
	const navTemplate = await createNavTemplate(routes);
	return `
    <header>
      ${navTemplate}
    </header>
  `;
};

export default createHeaderTemplate;
