import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { UserStorage } from './context/UserContext'
import { User } from './components/User'
import { ProtectedRoute } from './components/Helper/ProtectedRoute'

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  {' '}
                  <User />{' '}
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
          <GlobalStyles />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
