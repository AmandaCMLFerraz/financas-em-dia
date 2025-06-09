import React, { useState } from 'react'
import styles from './Login.module.css'
import imagem from '../../assets/image.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

type Props = {
  name: string
  email: string
  password: string
}

export const Login: React.FC<Props> = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div className={styles.container}>
      <div className={styles.imagem}>
        <img src={imagem} alt="Imagem de finanças" />
      </div>
      <div className={styles.form}>
        <h1>Finanças em Dia</h1>
        <div>
          <FacebookRoundedIcon sx={{ color: 'white', fontSize: '40px'}} />
          <AlternateEmailRoundedIcon sx={{ color: 'white', fontSize: '40px'}} />
        </div>
        <form>
          <TextField
            label="E-mail"
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: '300px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '24px',
                background: '#fff'
              }
            }}
          />

          <TextField
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              width: '300px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '24px', // Aplica o borderRadius ao input
                background: '#fff'
              },
            }}
          />

          <Button
            variant="contained"
            type='submit'
            sx={{
              width: '150px',
              borderRadius: '24px',
              backgroundColor: '#fff',
              color: '#407cff',
              border: 'none',
              transition: 'transform 0.2s ease', // Transição suave para o efeito de escala
              '&:hover': { transform: 'scale(1.05)' }
            }}
          >
            Iniciar sessão
          </Button>
        </form>
      </div>
    </div>
  )
}