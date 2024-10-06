import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Category from './pages/Category'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='/Dashboard' element={<Dashboard />}/>
        <Route path='/Category' element={<Category />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
