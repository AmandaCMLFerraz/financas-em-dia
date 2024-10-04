import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'

function Register() {

  return (
    <div className='w-screen h-screen flex items-center justify-center  bg-violet-600 '>
      <div className='flex flex-col w-1/4 h-2/3 bg-white justify-center items-center rounded-3xl shadow-2xl shadow-white rounded-3xl'> 
        <h2 className='text-5xl mb-5'>Cadastro</h2>
        <form className='flex flex-col w-4/5 items-center mx-auto'>
          <input placeholder="Nome" type="text" className='p-2 border rounded-3xl mb-5 w-3/4' />
          <input placeholder="E-mail" type="email" className='p-2 border rounded-3xl mb-5 w-3/4'/>
          <input placeholder="Senha" type="password" className='p-2 border rounded-3xl mb-5 w-3/4' />
          <Link to='/'><Button>Cadastre-se</Button></Link>
        </form>
        <Link to="/">Já tem uma conta? Faça login.</Link>
      </div>
    </div>
  )
}

export default Register