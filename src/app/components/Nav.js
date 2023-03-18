import { getSocialLinks } from '../contentLoader.js';

/**
 * Function to create the navigation template
 * @function
 * @returns {Promise<string>} - The navigation template
 */
const createNavTemplate = async (pages) => {
	const socialLinksData = await getSocialLinks('main');
	const socialLinksTemplate = socialLinksData.map((link) => `
        <li class="social_links">
            <a target="_blank" href="${link.url}" title="${link.post_name}">
                ${link.title}
            </a>
        </li>`).join('');

	return `
        <button class="menu-toggle" id="menu-opener">
            <i class="fa-solid fa-bars"></i>
        </button>
        <div class="menu__wrapper">
            <nav id="menu" role="navigation">
                <div class="menu__close" id="menu-closer">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <ul class="menu__links">
                     ${pages.map((page) => `<li class="pages_link"><a href="${page === 'Home' ? '/' : `/${page.toLowerCase()}`}">${page}</a></li>`).join('')}
                     ${socialLinksTemplate}
                </ul>
            </nav>
        </div>
    `;
};

export default createNavTemplate;
