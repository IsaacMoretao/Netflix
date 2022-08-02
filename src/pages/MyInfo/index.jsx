import './Style.scss';
import { Header } from '../../Components/header';
import User from '../../Assets/Usuario.png'

export function MyInfo() {
  return(
    <div>
      <Header/>
      <div className='divImage'>
        <div className='divImageDois'>
          <figure/>
        
        
          
        
        </div>
      </div>
      <div className='InfoList'>
        <section>
          <span>Nome:</span>
          <p> Isaac Moretão</p>
        </section>
        <section>
          <span>Projeto:</span>
          <p>Netflix Clone</p>
        </section>
        <section>
          <span>Linkedin:</span>
          <a href='https://www.linkedin.com/in/isaac-hana-moret%C3%A3o-1a32031a2/'>Click aqui</a>
        </section>
        <section>
          <span>Instagram:</span>
          <a href='https://www.instagram.com/isaac_moretao/'>Click aqui</a>
        </section>
      </div>
      <a href="https://isaacmoretao.github.io/portfolio/">
        <button className='verMais'>VER MAIS</button>
      </a>
      
    </div>
  )
}