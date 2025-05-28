import { FastifyInstance } from "fastify";
import { register } from "../http/controllers/register-controller";
import { authenticate } from "../http/controllers/authenticate-controller";
import { transactionType } from "./controllers/transaction-type-controller";

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)
  app.post('/transaction-types', transactionType)
}