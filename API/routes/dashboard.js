import express from "express";
import { PrismaClient } from "@prisma/client";

const routerDashboard = express.Router()
const prisma = new PrismaClient()

routerDashboard.get('/dashboard', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json({message: "Usuários listados:", users})
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ message: "Falha no servidor." })
  }
})

export default routerDashboard