import fastify from "fastify";
import dotenv from "dotenv";
dotenv.config({
	path: ".env",
});
import connectMongoDatabase from "./utils/connectMongoDb.js";
import connectSqlDatabase from "./utils/connectSqlDb.js";
import cookie from "@fastify/cookie";
import cors from "@fastify/cors";
import config from "./config/index.js";
import { healthRouter } from "./routes/index.js";

const app = fastify({
	logger: config.logger,
});

connectMongoDatabase(config.db);
connectSqlDatabase(config.db);

app.register(cookie, {
	secret: process.env.COOKIE_SECRET,
	hook: "preHandler",
	parseOptions: {},
});

app.register(cors, {
	origin: process.env.FRONTEND_URL,
	credentials: true,
});

healthRouter(app);

app.listen({ port: config.port, host: config.host }, () => {
	console.log(`Server running at http://localhost:${config.port}`);
});
