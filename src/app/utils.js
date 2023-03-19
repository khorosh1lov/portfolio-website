export const initMenu = () => {
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

export const initSmoothScroll = () => {
	const scrollToElement = (elementId) => {
		const targetElement = document.querySelector(elementId);

		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
			});
		}
	};

	const handleAnchorClick = (e) => {
		const targetElementId = e.currentTarget.getAttribute('href');
		if (targetElementId.startsWith('#')) {
			e.preventDefault();
			scrollToElement(targetElementId);
		}
	};

	const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

	anchorLinks.forEach((link) => {
		link.addEventListener('click', handleAnchorClick);
	});
};

export const headerScrollBehavior = () => {
	const header = document.querySelector('header');
	let lastScrollTop = 0;

	window.addEventListener('scroll', () => {
		const currentScrollTop = window.pageYOffset;

		if (currentScrollTop > lastScrollTop) {
			header.classList.add('header-hidden');
		} else {
			header.classList.remove('header-hidden');
		}

		lastScrollTop = currentScrollTop;
	});
};
