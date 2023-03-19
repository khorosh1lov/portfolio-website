export function blogTemplate(item) {
    const thumbnailUrl = item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0].source_url : '';

    return `
    <article class="post">
        <div class="card"> 
            <a href="/blog/${item.slug}" data-slug="${item.slug}" class="post-link"> 
                <div class="card-image">
                    <img src="${thumbnailUrl}" alt="${item.title.rendered}">
                </div> 
                <div class="card-content"> 
                    <h2>${item.title.rendered}</h2> 
                    <i>${item.content.rendered.split('.')[0]}.</i> 
                </div> 
            </a> 
        </div> 
    </article>
    `;
}
