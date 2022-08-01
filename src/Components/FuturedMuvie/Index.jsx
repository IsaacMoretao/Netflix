import './Stylle.scss';
import { Play, Info } from 'phosphor-react';

export function FuturedMuvie({item}){
  
  let firstDate = new Date(item.first_air_date);
  let generes = [];
  for(let i in item.generes) {
    generes.push( item.generes[i].name );
  }
  
  return(
    <section className='future' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
      <div className='futured-vertical'>
        <div className='future-horizontal'>
          <strong>{item.original_name}</strong>
          <section>

            <article className='note'>{item.vote_average}</article>
            <article className='date'>{firstDate.getFullYear()}</article>
            <article className='seasons'>{item.number_of_seasons} temporada{item.number_of_seasons > 1 ? 's' : ''}</article>
          
          </section>
          <p>&nbsp;{item.overview}</p>
          <div>
            <button>
              <Play size={32} weight="fill" />
              <a href={`/watch/${item.id}`}>Assistir</a>
            </button>
            <button>
              <Info size={32} color="#e3e3e3" />
              <a href={`/list/add/${item.id}`}>+ minha lista</a>
            </button>
          </div>
          <p>{generes.join(', ')}</p>
        </div>
      </div>
    </section>
  );
}
