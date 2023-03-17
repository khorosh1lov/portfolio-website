import createFooter from '../../app/components/Footer.js';
import createHeader from '../../app/components/Header.js';
import createNav from '../../app/components/Nav.js';
import { getBlogContent } from '../../app/contentLoader.js';
import { initMenu } from '../../app/components/Menu.js';
import routes from '../../app/routes.js';
import styles from '../../styles/styles.scss';

const header = createHeader();
const nav = createNav(routes);
const footer = createFooter();

document.body.prepend(header);
document.body.prepend(nav);
document.body.appendChild(footer);

const main = document.querySelector('#page');
getBlogContent(header, main);

initMenu();