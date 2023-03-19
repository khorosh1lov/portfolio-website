export default class Router {
	constructor(routes) {
		this.routes = routes;
		this._loadInitialRoute();
	}

	loadRoute(path) {
		const matchedRoute = this._matchUrlToRoute(path);
		if (!matchedRoute) {
			console.error(`No route found for path: ${path}`);
			return;
		}

		matchedRoute.action();
	}

	_matchUrlToRoute(urlPath) {
		const matchedRoute = this.routes.find((route) => {
			const routePathSegments = route.path.split('/').slice(1);
			const urlPathSegments = urlPath.split('/').slice(1);

			if (routePathSegments.length !== urlPathSegments.length) {
				return false;
			}

			return routePathSegments.every((routePathSegment, i) => {
				return routePathSegment === urlPathSegments[i] || routePathSegment[0] === ':';
			});
		});

		return matchedRoute;
	}

	_loadInitialRoute() {
		const path = window.location.pathname;
		this.loadRoute(path);
	}
}
