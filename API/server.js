import express from 'express'
import auth from './routes/auth.js'
import dashboard from './routes/dashboard.js'
import category from './routes/category.js'
import authMiddleware from './middlewares/authMiddleware.js'
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors())

app.use('/', auth)
app.use('/', authMiddleware, dashboard)
app.use('/', authMiddleware, category)


app.listen(3000, () => console.log('Servidor rodando'))

//amandaferraz
//Amand@1806
//node --watch server.js
