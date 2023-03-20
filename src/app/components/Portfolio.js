import { GITHUB_URL, SUBDOMAIN_URL } from '../../app/apiEndpoints.js';

export function portfolioTemplate(item) {
	const thumbnailUrl = item._embedded && item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0].source_url : '';

	const externalDemoUrl = item.custom_fields && item.custom_fields.demo_url ? item.custom_fields.demo_url[0] : '';
	const demoUrl = externalDemoUrl ? externalDemoUrl : `https://${item.slug}${SUBDOMAIN_URL}`;

	const githubLink = `
        <a target="_blank" href="${GITHUB_URL}${item.slug}" data-slug="${item.slug}" rel="noreferrer">
            Code <i class="fa-brands fa-github link-icon"></i>
        </a>`;

	const liveDemoLink = `
        <a target="_blank" href="${demoUrl}" data-slug="${item.slug}" rel="noreferrer">
            Live Demo <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
        </a>`;

	const links = externalDemoUrl ? liveDemoLink : githubLink + liveDemoLink;

	return `
        <article class="project">
            <div class="card">
                <div class="card-image">
                    <img src="${thumbnailUrl}" alt="${item.title.rendered}">
                </div>
                <div class="card-content">
                    <h2>${item.title.rendered}</h2>
                    <p>${item.content.rendered.split('.')[0]}.</p>
                    <div class="links">
                        ${links}
                    </div>
                </div>
            </div>
        </article>
    `;
}

