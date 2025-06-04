import React, { useState } from 'react'
import styles from './Register.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type Props = {
  name: string
  email: string
  password: string
}

export const Register: React.FC<Props> = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Dados enviados: ', { name, email, password })
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Finanças em Dia</h1>
        <h2>Porque cuidar do seu dinheiro é investir no seu futuro.</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            sx={{
              width: '300px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '24px', // Aplica o borderRadius ao input
              }
            }}
          />

          <TextField
            label="E-mail"
            sx={{
              width: '300px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '24px', // Aplica o borderRadius ao input
              }
            }}
          />

          <TextField
            label="Senha"
            sx={{
              width: '300px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '24px', // Aplica o borderRadius ao input
              }
            }}
          />
          
          <Button
            variant="contained"
            sx={{
              width: '150px',
              borderRadius: '24px',
              backgroundColor: '#407cff',
              transition: 'transform 0.2s ease', // Transição suave para o efeito de escala
              '&:hover': { backgroundColor: '#3366CC', transform: 'scale(1.05)' }
            }}
          >
            Cadastre-se
          </Button>
        </form>
      </div>
    </div>
  )
}