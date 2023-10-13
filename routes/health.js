import router from "../utils/router.js";
import { healthCheck } from "../controllers/health/health.controller.js";


const routes = [
    {
        method: "GET",
        url : "",
        handler: healthCheck.handler
    }
]

const healthRouter = (app) => {
    router(app, routes, "/health");
}

export default healthRouter;
