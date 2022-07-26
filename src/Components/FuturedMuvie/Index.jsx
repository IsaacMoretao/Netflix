import './Stylle.scss';

export function FuturedMuvie({item}){ 
  
  return(
    <section className='future' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
      <div className='futured-vertical'>
        <div className='future-horizontal'>
          <strong></strong>
          <section>

            <aricle className='note'>{item.vote_average}</aricle>
            <aricle className='date'></aricle>
            <aricle className='seasons'>{item.number_of_seasons} temporada{item.number_of_seasons > 1 ? 's' : ''}</aricle>
          
          </section>
          <p>{item.overview}</p>
          <div>
            <button></button>
            <button></button>
          </div>
          <p></p>
        </div>
      </div>
    </section>
  );
}
