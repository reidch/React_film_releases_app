import React from 'react';
import FilmList from './FilmList'

class FilmReleasesBox extends React.Component {
  render() {
    return (
      <div className="film-releases-box">
        <h1>{this.props.title}</h1>
        <FilmList />
      </div>
    )
  }
}

export default FilmReleasesBox;
