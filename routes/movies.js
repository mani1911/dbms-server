import router from "../utils/router.js";
import { movieController } from "../controllers/health/movie.controller.js";

const routes = [
	{
		method: "GET",
		url: "",
		handler: movieController.handler,
	},
];

const movieRouter = (app) => {
	router(app, routes, "/movies");
};

export default movieRouter;