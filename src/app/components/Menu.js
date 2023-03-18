const initMenu = () => {
	const menuOpener = document.getElementById('menu-opener');
	const menuCloser = document.getElementById('menu-closer');
	const menuWrapper = document.querySelector('.menu__wrapper');

	menuOpener.addEventListener('click', () => {
		menuWrapper.classList.add('open');
	});

	menuCloser.addEventListener('click', () => {
		menuWrapper.classList.remove('open');
	});
};

export { initMenu };
