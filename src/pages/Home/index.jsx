import './Style.scss';
import  Tmdb  from "../../utils/Tmdb";
import { MovieRow } from '../../Components/MovieRow/Index';
import { FuturedMuvie } from '../../Components/FuturedMuvie/Index'
import React, { useEffect, useState } from 'react';



export function Home (){

  const [movieList, setMovieList] = useState([]);
  const [futureData, setFutureData] = useState(null);

  useEffect(() =>{
    const loadAll = async  () => {
      let list = await Tmdb.getHomeList() ;
      setMovieList(list);
      
      //hhhhhhhhhhhh
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFutureData(chosenInfo);
      console.log(chosenInfo)
    }
    loadAll();
  }, []);

  return(
    <div className='page'>

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
      
    </div>
  )
}


