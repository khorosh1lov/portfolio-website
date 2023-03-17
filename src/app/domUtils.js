/**
 * Function to add header to the page
 * @function
 * @param {HTMLElement} page - The HTML element to add the header to
 * @param {HTMLElement} header - The header to be added
 * @param {HTMLElement} h1 - The h1 element of the header
 * @param {string} title - The title of the page
 */
export function addHeader(page, header, h1, title) {
	h1.innerHTML = title;
	page.insertAdjacentElement('beforeend', header);
}

/**
 * Function to add navigation to the page
 * @function
 * @param {HTMLElement} page - The HTML element to add the navigation to
 * @param {HTMLElement} navigation - The navigation bar to be added
 */
export function addNavigation(page, navigation) {
	page.insertAdjacentElement('beforeend', navigation);
}

/**
 * Function to add main content to the page
 * @function
 * @param {HTMLElement} page - The HTML element to add the main content to
 * @param {HTMLElement} main - The main content to be added
 */
export function addMain(page, main) {
	page.insertAdjacentElement('beforeend', main);
}

/**
 * Function to add footer to the page
 * @function
 * @param {HTMLElement} page - The HTML element to add the footer to
 * @param {HTMLElement} footer - The footer to be added
 */
export function addFooter(page, footer) {
	page.insertAdjacentElement('beforeend', footer);
}
