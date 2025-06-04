import { app } from "./app";
import { env } from "./env";
import cors from '@fastify/cors';

async function start() {
  await app.register(cors, {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });

  app.listen({
    host: '0.0.0.0',
    port: env.PORT,
  }).then(() => {
    console.log("HTTP Server Running!");
  });
}

start();