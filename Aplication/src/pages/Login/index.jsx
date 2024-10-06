import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'

import controleFinanceiro from '../../assets/teste.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Form from '../../components/Form';

function Login() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()

    try{
      const { data:token } = await api.post('/login', { 
        email: emailRef.current.value,
        password: passwordRef.current.value
      })

      localStorage.setItem('token', token)
      console.log(token)

      navigate('/dashboard')
    }
    catch(err){
      alert("E-mail ou senha incorretos.")
    }
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-gray-300'>
      <div className='flex flex-row text-center w-4/5 h-4/5 shadow-xl rounded-3xl bg-blue-600 shadow-2xl shadow-gray-700'>
        <div className='flex flex-col w-2/3 rounded-3xl justify-center' >
          <h2 className='text-5xl text-white mb-5'>Finanças em Dia</h2>
          <h2 className='text-4xl text-white '>Controle hoje para um amanhã mais tranquilo!</h2>
          <img 
            src={controleFinanceiro} 
            alt="Descrição da imagem" 
            className="mb-4 mx-auto w-3/4"
          />
        </div>
        <div className='flex flex-col w-1/3 bg-white justify-center rounded-3xl'> 
          <h2 className='text-5xl mb-5'>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Input 
              placeholder="E-mail" 
              type="email"
              ref={emailRef}
            />
            <Input 
              placeholder="Senha" 
              type="password"
              ref={passwordRef}
            />
            <Button type='submit'>Login</Button>
          </Form>
          <Link to="/Register">Não tem uma conta? Cadastre-se.</Link>
        </div>
      </div>
    </div>
  )
}

export default Login