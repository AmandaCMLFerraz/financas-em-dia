import React, { useState } from 'react'
import styles from './Register.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';  

type Props = {
  name: string
  email: string
  password: string
}

export const Register: React.FC<Props> = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const data = { name, email, password };

    try {
      const response = await axios.post('http://localhost:3333/users', data);  // Envia os dados para a API
      console.log('Usuário cadastrado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Finanças em Dia</h1>
        <h2>Porque cuidar do seu dinheiro é investir no seu futuro.</h2>
        
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              width: '300px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '24px', // Aplica o borderRadius ao input
              }
            }}
          />

          <TextField
            label="E-mail"
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: '300px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '24px', // Aplica o borderRadius ao input
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
              }
            }}
          />

          <Button
            variant="contained"
            type='submit'
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