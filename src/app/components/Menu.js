const initMenu = () => {
	const menuOpener = document.getElementById('menu-opener');
	const menuCloser = document.getElementById('menu-closer');
	const menuWrapper = document.querySelector('.menu__wrapper');
	const contactMeLink = document.querySelector('a[href="#contact-me"]');

	menuOpener.addEventListener('click', () => {
		menuWrapper.classList.add('open');
	});

	menuCloser.addEventListener('click', () => {
		menuWrapper.classList.remove('open');
	});

	if (contactMeLink) {
		contactMeLink.addEventListener('click', () => {
			menuWrapper.classList.remove('open');
		});
	}
};

export { initMenu };
