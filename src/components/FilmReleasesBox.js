import React from 'react';
import FilmList from './FilmList'

class FilmReleasesBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id:1, film_title:"Sausage Party"}
      ]
    }
  }

  render() {
    return (
      <div className="film-releases-box">
        <h1>{this.props.title}</h1>
        <FilmList data={this.state.data} />
      </div>
    )
  }
}

export default FilmReleasesBox;
