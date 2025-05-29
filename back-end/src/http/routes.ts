import { FastifyInstance } from "fastify";
import { register } from "../http/controllers/register-controller";
import { authenticate } from "../http/controllers/authenticate-controller";
import { transactionType } from "./controllers/transaction-type-controller";
import { paymentMethod } from "./controllers/payment-method-controller";
import { category } from "./controllers/category-controller";
import { transaction } from "./controllers/transaction-controller";

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)
  app.post('/transaction-types', transactionType)
  app.post('/payment-method', paymentMethod)
  app.post('/category', category)
  app.post('/transaction', transaction)
}