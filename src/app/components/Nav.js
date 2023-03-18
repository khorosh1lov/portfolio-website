import { getSocialLinks } from '../contentLoader.js';

/**
 * Function to create the navigation template
 * @function
 * @returns {Promise<string>} - The navigation template
 */
const createNavTemplate = async (pages) => {
	const socialLinksData = await getSocialLinks('main');
	const socialLinksTemplate = socialLinksData.map((link) => `<li><a href="${link.url}">${link.title}</a></li>`).join('');

	return `
        <div class="menu__wrapper">
            <nav id="menu" role="navigation">
                <div class="menu__close" id="menu-closer"></div>
                <ul class="menu__links">
                     ${pages.map((page) => `<li><a href="${page === 'Home' ? '/' : `/${page.toLowerCase()}`}">${page}</a></li>`).join('')}
                </ul>
            </nav>
            <div id="social-menu">
                <ul class="social-menu__links">
                    ${socialLinksTemplate}
                </ul>
            </div>
        </div>
    `;
};

export default createNavTemplate;
