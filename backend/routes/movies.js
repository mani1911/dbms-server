import router from "../utils/router.js";
import { movieController, movieGetByName, bookmarkMovie, getBookmarks, deleteBookmark } from "../controllers/health/movie.controller.js";

const routes = [
	{
		method: "GET",
		url: "",
		handler: movieController.handler,
	},
	{
		method: "GET",
		url: "/get",
		handler: movieGetByName.handler,
	},
	{
		method: "POST",
		url: "/bookmark",
		handler: bookmarkMovie.handler
	},
	{
		method: "GET",
		url: "/bookmark",
		handler: getBookmarks.handler
	},
	{
		method: "POST",
		url: "/deleteBookmark",
		handler: deleteBookmark.handler
	}
];

const movieRouter = (app) => {
	router(app, routes, "/movies");
};



export default movieRouter;