import { closeMenu, openMenu } from './app/components/Menu.js';

import createFooter from './app/components/Footer.js';
import createHeader from './app/components/Header.js';
import createNav from './app/components/Nav.js';
import { getHomeContent } from './app/contentLoader.js';
import routes from './app/routes.js';
import styles from './styles/styles.scss';

const header = createHeader();
const nav = createNav(routes);
const footer = createFooter();

document.body.prepend(header);
document.body.prepend(nav);
document.body.appendChild(footer);

const main = document.querySelector('#page');
getHomeContent(header, main);

document.querySelector('#menu-opener').addEventListener('click', openMenu);
document.querySelector('#menu-closer').addEventListener('click', closeMenu);