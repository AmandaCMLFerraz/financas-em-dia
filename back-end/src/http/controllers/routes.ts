import { FastifyInstance } from "fastify";
import { registro } from "./registro-controller";

export async function appRoutes(app: FastifyInstance) {
  app.post('/usuarios', registro)
}