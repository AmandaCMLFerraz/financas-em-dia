import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='/Home' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
