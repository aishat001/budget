import { Route, Routes, useNavigate } from 'react-router'
import './App.css'
import './assets/fonts/circular-std-font-family/CircularStd-Black.woff2'
import Home from './pages/Home'
import Menu from './components/Menu'
import Reports from './pages/Reports'
import Chat from './pages/Chat'
import Profile from './pages/Profile'
import Budget from './pages/Budget'
import { useState, useEffect } from 'react'
import { Heading, Spinner } from '@chakra-ui/react'

function App() {
  const [loading, setloading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
      navigate('/budget'); 
    }, 4000);
  }, [])

  return (
    <>
      {loading ? (
        <>
          <Heading mt={'calc(100vh - 50vh)'} textColor={'#001233'} mb={'10px'}>Budget</Heading>
          <Spinner />
        </>
      ) : (
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/budget' element={<Budget loading={loading} />} />
          </Routes>
          <Menu />
        </>
      )}
    </>
  )
}

export default App
