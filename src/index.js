import { createPageStructure, getPageWrapper } from '../src/app/components/PageBuilder.js';

import { getHomeContent } from './app/contentLoader.js';
import styles from './styles/styles.scss';

(async () => {
	const additionalContent = `
    <div class="first-screen">
      <div class="content-wrapper">
        <div class="text-wrapper">
          <h1>Alexander Khoroshilov</h1>
          <h2>Frontend Web Developer</h2>
          <p>What makes me stand out is my expertise in designing and updating websites and online applications by utilizing latest programming languages and designing tools. Throughout my career, I have been instrumental in architecting and coding functional and aesthetic components of client websites, producing webpage layouts, editing website content, and making adjustments based on client feedback.</p>
        </div>
        <img src="images/profile_photo.webp" alt="Your Photo" />
      </div>
      <div class="tech-stack">
        <span class="tech-stack-title">Tech Stack |</span>
        <hr />
        <div class="icon-wrapper">
          <i class="fab fa-js-square icon"></i>
          <i class="fab fa-html5 icon"></i>
          <i class="fab fa-css3-alt icon"></i>
          <i class="fab fa-sass icon"></i>
          <i class="fab fa-react icon"></i>
          <i class="fab fa-php icon"></i>
        </div>
      </div>
      <div class="scroll-wrapper"><a class="scroll-down" href="#page">&#x2193;</a></div>
    </div>
  `;

	await createPageStructure(additionalContent);

	const wrapper = getPageWrapper();
	const content = await getHomeContent();
	wrapper.insertAdjacentHTML('beforeend', content);
})();
