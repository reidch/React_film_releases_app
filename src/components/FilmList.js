import React from 'react';
import Film from './Film';

class FilmList extends React.Component {
  render() {

    var filmNodes = this.props.data.map(function(film) {
      return (
        <Film film_title={film.film_title} key={film.id}>{film.showtimes}</Film>
      );
    });

    return (
      <div className="FilmList">
        {filmNodes}
      </div>
    )
  }
}

export default FilmList;
