import router from "../utils/router.js";
import { movieController, movieGetByName, bookmarkMovie, getBookmarks, deleteBookmark, addComment, getComments } from "../controllers/health/movie.controller.js";

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
	}, 
	{
		method: "POST",
		url: '/comment',
		handler: addComment.handler

	},
	{
		method: "GET",
		url : '/getComment',
		handler: getComments.handler
	}
];

const movieRouter = (app) => {
	router(app, routes, "/movies");
};



export default movieRouter;