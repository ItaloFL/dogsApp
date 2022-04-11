import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { UserHeaderNav } from "../UserHeaderNav"
import { UserHeaderWrapper } from "./style"


export const UserHeader = () => {

  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch(pathname) {
      case '/conta/postar':
        setTitle('Poste Sua Foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatisticas');
        break;
      default:
        setTitle('Minha Conta')
    }
  }, [location])
  return (
    <UserHeaderWrapper>
      <h1 className="title">{title}</h1>
      <UserHeaderNav/>
    </UserHeaderWrapper>
  )
}