import React from 'react';
import Film from './Film';
import watchlistImg from '../watchlist.png';

class FilmList extends React.Component {
  render() {
    const filmNodes = this.props.data.map(film => {
      return (
        <Film film_title={film.film_title} key={film.id} showtimes={film.showtimes} />
      )
    })

    return (
      <div className="film-list">
        <div className="watchlistImg">
        <img src={watchlistImg} width="25" height="25" />
        {filmNodes}
        </div>
      </div>
    )
  }
}

export default FilmList;
