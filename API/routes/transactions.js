import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const routerTransaction = express.Router()

// Rota Transactions
routerTransaction.post('/transaction', async (req, res) => {
  const userId = req.user.id
  const user = req.user.name
  const categoryId = req.category.id
  const category = req.category.name

  try {
    const transaction = req.body

    const transactionDB = await prisma.transaction.create({
      data: {
        userId: userId,
        user: user,
        amount: transaction.amount,
        type: transaction.type,
        categoryId: categoryId,
        category: category
      }
    })
    res.status(201).json(transactionDB)
  }
  catch (err) {
    res.status(500).json({ message: "Erro no servidor, tente novamente." })
  }
})

// routerTransaction.get('/list-transactions', async (req, res) => {
//   try {
//     const transaction = await prisma.transaction.findMany()
//     res.status(200).json({ message: "Categorias listadas:", transaction })
//   }
//   catch (err) {
//     console.log(err)
//     res.status(500).json({ message: "Falha no servidor." })
//   }
// })

export default routerTransaction 