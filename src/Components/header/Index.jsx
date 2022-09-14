import './Style.scss';
import Logo from '../../Assets/Netflix.png'
import Usuario from '../../Assets/Usuario.png'
import { Link } from 'react-router-dom'

export function Header({black}) {

  

  return(
    <header className={black ?'black' : ''}>
      <a href="https://isaacmoretao.github.io/Netflix/">
        <img src={Logo} alt="Netflix - Logo" />
      </a>

        <Link to={'/Netflix/Info'}>
          <figure>
            <img src={Usuario} alt="" />
          </figure>
        </Link>
      
    </header>
  )
  
}