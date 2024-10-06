    import jwt from 'jsonwebtoken'

    const JWT_SECRET = process.env.JWT_SECRET

    const authMiddleware = (req, res, next) => {

        const token = req.headers.authorization

        if(!token){
            return res.status(401).json({message: "Acesso negado."})
        }

        try{
            const tokenDecoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET)

            req.userId = tokenDecoded.id
        }
        catch(err){
            return res.status(401).json({message: "Token inválido."})
        }

        next()
    }

    export default authMiddleware