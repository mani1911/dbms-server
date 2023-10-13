const router = (app, routes, path) => {
	routes.forEach((route) => {
		route.url = path + route.url;
		app.route(route);
	});
};

export default router;
