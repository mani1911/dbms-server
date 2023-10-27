import fastify from "fastify";
import dotenv from "dotenv";
dotenv.config({
	path: ".env",
});
import connectMongoDatabase from "./utils/connectMongoDb.js";
import connectSQLDatabase from "./utils/connectSqlDb.js";
import cookie from "@fastify/cookie";
import cors from "@fastify/cors";
import config from "./config/index.js";
import { healthRouter } from "./routes/index.js";
import seeder from "./seed/seeder.js";

const app = fastify({
	logger: config.logger,
});

// Connect Databases
await connectMongoDatabase(config.db);
await connectSQLDatabase.sync({force:true})
  .then(() => {
    console.log("SQL Connected Successful...");
  })
  .catch((err) => {
    console.log(err.message);
  });



app.register(cookie, {
	secret: process.env.COOKIE_SECRET,
	hook: "preHandler",
	parseOptions: {},
});

app.register(cors, {
	origin: process.env.FRONTEND_URL,
	credentials: true,
});

// routes
healthRouter(app);

// seed
seeder()

app.listen({ port: config.port, host: config.host }, () => {
	console.log(`Server running at http://localhost:${config.port}`);
});
