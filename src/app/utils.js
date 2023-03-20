export const initMenu = () => {
	const menuOpener = document.getElementById('menu-opener');
	const menuCloser = document.getElementById('menu-closer');
	const menuWrapper = document.querySelector('.menu__wrapper');
	const header = document.querySelector('header');
	const contactMeLink = document.querySelector('a[href="#contact-me"]');
	const body = document.body;

	menuOpener.addEventListener('click', () => {
		menuWrapper.classList.add('open');
		header.classList.remove('header-hidden');
		body.classList.add('no-scroll');
	});

	menuCloser.addEventListener('click', () => {
		menuWrapper.classList.remove('open');
		body.classList.remove('no-scroll');
	});

	if (contactMeLink) {
		contactMeLink.addEventListener('click', () => {
			menuWrapper.classList.remove('open');
			body.classList.remove('no-scroll');
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
	let isScrolling;

	const showHeader = () => {
		header.classList.remove('header-hidden');
	};

	const hideHeader = () => {
		if (window.pageYOffset !== 0) {
			header.classList.add('header-hidden');
		}
	};

	window.addEventListener('scroll', () => {
		const currentScrollTop = window.pageYOffset;

		if (currentScrollTop < lastScrollTop || currentScrollTop > lastScrollTop) {
			hideHeader();
		}

		lastScrollTop = currentScrollTop;

		clearTimeout(isScrolling);
		isScrolling = setTimeout(() => {
			showHeader();
		}, 400);
	});
};

