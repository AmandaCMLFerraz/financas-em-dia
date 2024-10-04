import { Link } from 'react-router-dom'
import controleFinanceiro from '../../assets/controle-financeiro.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

function Login() {

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-white'>
      <div className='flex flex-row text-center w-4/5 h-4/5 shadow-2xl shadow-gray-500 rounded-3xl bg-violet-600'>
        <div className='flex flex-col w-2/3  rounded-3xl justify-center' >
          <h2 className='text-5xl text-white mb-5'>Finanças em Dia</h2>
          <h2 className='text-4xl text-white '>Controle hoje para um amanhã mais tranquilo!</h2>
          <img 
            src={controleFinanceiro} 
            alt="Descrição da imagem" 
            className="mb-4 mx-auto w-2/4"
          />
        </div>
        <div className='flex flex-col w-1/3 bg-white justify-center rounded-3xl'> 
          <h2 className='text-5xl mb-5'>Login</h2>
          <form className='flex flex-col w-4/5 items-center mx-auto'>
            <input placeholder="E-mail" type="email" className='p-2 border rounded-3xl mb-5 w-3/4'/>
            <input placeholder="Senha" type="password" className='p-2 border rounded-3xl mb-5 w-3/4' />
            <Link to="/Home"><Button>Login</Button></Link>
          </form>
          <Link to="/Register">Não tem uma conta? Cadastre-se.</Link>
        </div>
      </div>
    </div>
  )
}

export default Login