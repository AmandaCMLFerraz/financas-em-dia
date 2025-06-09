import { FastifyInstance } from "fastify";
import { register } from "../http/controllers/register-controller";
import { authenticate } from "../http/controllers/authenticate-controller";
import { transactionType } from "./controllers/transaction-type-controller";
import { paymentMethod } from "./controllers/payment-method-controller";
import { category } from "./controllers/category-controller";
import { transaction } from "./controllers/transaction-controller";
import { extract } from "./controllers/extract-contoller";

export async function appRoutes(app: FastifyInstance) {
  // ROTAS PÚBLICAS
  app.post('/users', register)
  app.post('/sessions', authenticate)

  // ROTAS PROTEGIDAS
  app.post('/transaction-types', {
    onRequest: [async (request, reply) => {
      try {
        await app.authenticate(request, reply);
      } catch (err) {
        reply.status(401).send({ error: 'Unauthorized' });
      }
    }]
  }, transactionType);

  app.post('/payment-method', {
    onRequest: [async (request, reply) => {
      try {
        await app.authenticate(request, reply);
      } catch (err) {
        reply.status(401).send({ error: 'Unauthorized' });
      }
    }]
  }, paymentMethod);

  app.post('/category', {
    onRequest: [async (request, reply) => {
      try {
        await app.authenticate(request, reply);
      } catch (err) {
        reply.status(401).send({ error: 'Unauthorized' });
      }
    }]
  }, category);

  app.post('/transaction', {
    onRequest: [async (request, reply) => {
      try {
        await app.authenticate(request, reply);
      } catch (err) {
        reply.status(401).send({ error: 'Unauthorized' });
      }
    }]
  }, transaction);

  app.post('/extract', {
    onRequest: [async (request, reply) => {
      try {
        await app.authenticate(request, reply);
      } catch (err) {
        reply.status(401).send({ error: 'Unauthorized' });
      }
    }]
  }, extract);
}
