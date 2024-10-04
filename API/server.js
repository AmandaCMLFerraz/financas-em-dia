import express from 'express'
import auth from './routes/auth.js'

const app = express()
app.use(express.json())

app.use('/', auth)



app.listen(3000, () => console.log('Servidor rodando'))

//amandaferraz
//Amand@1806