import { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import fotoIcon from '../../../assets/feed.svg'
import estatisticaIcon from '../../../assets/estatisticas.svg'
import adicionarIcon from '../../../assets/adicionar.svg'
import sairIcon from '../../../assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import { useMedia } from '../../../hooks/useMedia'

export const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext)
  const [mobileMenu, setMobileMenu] = useState(false)
  const mobile = useMedia('(max-width: 40rem)')
  const { pathname } = useLocation()

  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => {
            setMobileMenu(!mobileMenu)
          }}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <img src={fotoIcon} alt="" />
          {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <img src={estatisticaIcon} alt="" />
          {mobile && 'Estátisticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <img src={adicionarIcon} alt="" />
          {mobile && 'Adicionar foto'}
        </NavLink>
        <button onClick={userLogout}>
          <img src={sairIcon} alt="" />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}
