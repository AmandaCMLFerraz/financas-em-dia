import fastify from "fastify";
import { registro } from "./http/controllers/registro-controller";
import { appRoutes } from "./http/controllers/routes";

export const app = fastify();

app.register(appRoutes)