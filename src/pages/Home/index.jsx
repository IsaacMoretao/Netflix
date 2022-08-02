import './Style.scss';
import  Tmdb  from "../../utils/Tmdb";
import { MovieRow } from '../../Components/MovieRow/Index';

import { FuturedMuvie } from '../../Components/FuturedMuvie/Index';
import { Header } from '../../Components/header/Index';
import React, { useEffect, useState } from 'react';
import Logo from '../../Assets/Icon.ico'

export function Home (){

  const [movieList, setMovieList] = useState([]);
  const [futureData, setFutureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const [Popup, setPopup] = useState('flex');

  useEffect(() =>{
    const loadAll = async  () => {
      let list = await Tmdb.getHomeList() ;
      setMovieList(list);
      
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFutureData(chosenInfo);
      console.log(chosenInfo)
    }
    loadAll();
  }, []);

  useEffect(()=>{

    const scrollListener = () => {
      if(window.scrollY > 5){
        setBlackHeader(true);
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);
  }, []);

  function Sumir(){
    if(Popup == 'flex'){
      setPopup('none')
    }else if(Popup == 'none'){
      setPopup('flex')
    } else{
      console.log('Algo deu errado')
    }
  }

  return(
    <div className='page'>
      <div className='Popup' style={{display: `${Popup}`}}>
        <section>
          <img src={Logo} alt="" />
          <p>Esse site é feito exclusivamente por <a href="https://isaacmoretao.github.io/portfolio/">Isaac Moretão</a>, com o objetio de demonstrar hablidades e conhecimentos Web, <b>NÃO É POSSIVEL ASSISTIR NENHUM FILME NESTE SITE !!!</b></p>
          <button onClick={Sumir}>Entendi</button>
        </section>
     
      </div>
      <Header black={blackHeader}/>

      {futureData &&
        <FuturedMuvie item={futureData}/>
      }
      

      <section className='lists'>
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items}/>
          </div>
          
        ))}
      </section>
      <footer className='footer'>
          <a href='https://www.themoviedb.org/?language=pt-BR' target='_blank'>&copy; TMDB</a>
          <a href='https://about.netflix.com/pt_br' target='_blank'>&copy;Netflix</a>
      </footer>
      
    </div>
  )
}


