import React from 'react';
import Film from './Film';

class FilmList extends React.Component {
  render() {
    const filmNodes = this.props.data.map(film => {
      return (
        <Film film_title={film.film_title} key={film.id} showtimes={film.showtimes} />
      )
    })

    return (
      <div className="film-list">
        {filmNodes}
      </div>
    )
  }
}

export default FilmList;
