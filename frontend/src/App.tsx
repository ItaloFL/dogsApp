import GlobalStyles from './styles/GlobalStyles'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { UserStorage } from './context/UserContext'

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage> 
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
          <GlobalStyles />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
