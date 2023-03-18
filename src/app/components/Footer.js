/**
 * Function to create the footer template
 * @function
 * @returns {string} - The footer template
 */
const createFooterTemplate = () => {
  const currentYear = new Date().getFullYear();

  return `
    <footer>
      <div class="footer-container">
        <div id="menu-opener" class="mobile__menu_button"></div>
        <div class="footer-wrapper">
          <p>© ${currentYear} Alexander Khoroshilov</p>
        </div>
      </div>
    </footer>
  `;
};

export default createFooterTemplate;
