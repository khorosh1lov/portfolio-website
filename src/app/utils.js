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
