import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/home'
import MainNavbar from './components/mainNavbar'

function App() {
  const [count, setCount] = useState(0)

  return(<>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/login' element=''></Route>
    <Route path='/register' element></Route>
    <Route path='/profile' element></Route>
    <Route path='/profile/edit' element></Route>
  </Routes>
  </>)
}

export default App
