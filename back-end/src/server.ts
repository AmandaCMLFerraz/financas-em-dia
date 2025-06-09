import { app } from "./app";
import { env } from "./env";
import cors from '@fastify/cors';
import { authenticate } from './middlewares/authenticate';
import fastifyJwt from "@fastify/jwt";
import { FastifyReply, FastifyRequest } from "fastify";


async function start() {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }

  await app.register(cors, {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });

  await app.register(fastifyJwt, {
    secret: jwtSecret,
  })

  app.decorate('auth', async (request: FastifyRequest, response: FastifyReply) => {
    try {
      await request.jwtVerify(); // Verificar o token enviado no cabeçalho Authorization
    } catch (err) {
      response.status(401).send({ message: 'Unauthorized' });
    }
  });

  app.listen({
    host: '0.0.0.0',
    port: env.PORT,
  }).then(() => {
    console.log("HTTP Server Running!");
  });
}

start();