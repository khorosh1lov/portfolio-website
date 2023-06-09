/**
 * Function to create the navigation template
 * @function
 * @returns {Promise<string>} - The navigation template
 */
const createNavTemplate = async (pages) => {
	return `
        <div class="menu__wrapper">
            <nav id="menu" role="navigation">
                <div class="menu__close" id="menu-closer">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <ul class="menu__links">
                     ${pages.map((page) => `<li class="pages_link"><a href="${page.url}" target="${page.target}" title="${page.title}">${page.title}</a></li>`).join('')}
                </ul>
                <div class="theme-switcher">
                    <label class="toggler">
                        <input type="checkbox" class="toggler__input" />
                        <div class="toggler__state">
                            <span class="toggler__label">
                                Dark Mode
                            </span>
                        </div>
                    </label>
                </div>
            </nav>
        </div>
    `;
};

export default createNavTemplate;
