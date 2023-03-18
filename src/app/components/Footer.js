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
        <div class="footer-wrapper">
          <p>© ${currentYear} Alexander Khoroshilov</p>
        </div>
        <button class="menu-toggle" id="menu-opener">
            <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </footer>
  `;
};

export default createFooterTemplate;
