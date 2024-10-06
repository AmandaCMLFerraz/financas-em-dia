import { useRef } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Form from '../../components/Form'

function Register() {

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSubmit(e){
    e.preventDefault()

    try{
      await api.post('/register', {
        name: nameRef.current.value, 
        email: emailRef.current.value,
        password: passwordRef.current.value
      })
      alert("Usuário cadastrado com sucesso.")
    }
    catch(err){
      alert("Erro ao cadastrar usuário.")
    }
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-blue-600'>
      <div className='flex flex-col w-1/4 h-2/3 bg-white justify-center items-center rounded-3xl shadow-xl rounded-3xl shadow-2xl shadow-gray-700'> 
        <h2 className='text-5xl mb-5'>Cadastro</h2>
        <Form onSubmit={handleSubmit}>
          <Input 
            ref={nameRef}
            placeholder="Nome" 
            type="text"
          />
          <Input 
            ref={emailRef}
            placeholder="E-mail" 
            type="email"
          />
          <Input 
            ref={passwordRef}
            placeholder="Senha" 
            type="password"
          />
          <Button type='submit'>Cadastre-se</Button>
        </Form>
        <Link to="/">Já tem uma conta? Faça login.</Link>
      </div>
    </div>
  )
}

export default Register

