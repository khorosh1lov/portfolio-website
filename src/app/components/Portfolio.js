import { SUBDOMAIN_URL } from '../../app/apiEndpoints.js';

export function portfolioTemplate(item) {
	const thumbnailUrl = item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0].source_url : '';

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
                    <a target="_blank" href="#" rel="noreferrer">
                        Code <i class="fa-brands fa-github link-icon"></i>
                    </a>
                    <a target="_blank" href="https://${item.slug}${SUBDOMAIN_URL}" data-slug="${item.slug}" rel="noreferrer">
                        Live Demo <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </article>
    `;
}
