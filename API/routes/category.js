import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const routerCategory = express.Router()

// Rota Categoria
routerCategory.post('/category', async (req, res) => {
  try {
    const category = req.body

    const categoryDB = await prisma.category.create({
      data: {
        name: category.name,
        description: category.description
      }
    })
    res.status(201).json(categoryDB)
  }
  catch(err){
    res.status(500).json({message: "Erro no servidor, tente novamente."})
  }
})

routerCategory.get('/list-categories', async (req, res) => {
    try {
      const category = await prisma.category.findMany()
      res.status(200).json({message: "Categorias listadas:", category})
    }
    catch (err) {
      console.log(err)
      res.status(500).json({ message: "Falha no servidor." })
    }
  })

export default routerCategory 