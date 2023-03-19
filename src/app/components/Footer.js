/**
 * Function to create the footer template
 * @function
 * @returns {string} - The footer template
 */
const createFooterTemplate = () => {
  const currentYear = new Date().getFullYear();

  return `
    <section id="contact-me" class="contacts">
      <div class="contacts-container">
        <div class="contact-content">
        <div class="contact-title">
          <p class="contact-title-text">Contacts</p>
          <h3 class="contact-title-cta">I am available for your offers!</h3>
        </div>
        <div class="contact-icons">
          <div class="contact-icon-box">
            <span><i class="fa-solid fa-map-location-dot"></i></span>
            <div class="contact-info">
              <h3>Location</h3>
              <a href="https://goo.gl/maps/pcBFczoYcc9X4WCS7" target="_blank">Seattle, WA</a>
            </div>
          </div>
          <div class="contact-icon-box">
            <span><i class="fa-solid fa-envelope-open-text"></i></span>
            <div class="contact-info">
              <h3>Email me</h3>
              <a href="mailto:khoroshilov.alex@gmail.com">khoroshilov.alex@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
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
