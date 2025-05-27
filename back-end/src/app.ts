import fastify from "fastify";
import { PrismaClient } from "../src/generated/prisma/client";

export const app = fastify();

const prisma = new PrismaClient();

prisma.user.create({
    data: {
        name: 'Amanda Ferraz',
        email: 'amandacferraz@hotmail.com',
        password: 'Amand@1806', 
    },
})