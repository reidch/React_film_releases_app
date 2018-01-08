import React from 'react';
import FilmList from './FilmList'

class FilmReleasesBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id:1, film_title:"Sausage Party", showtimes: "Showtimes"},
        { id:2, film_title:"Café Society", showtimes: "Showtimes"},
        { id:3, film_title:"Morgan", showtimes: "Showtimes"},
        { id:4, film_title:"The 9th Life of Louis Drax", showtimes: "Showtimes"},
        { id:5, film_title:"Naam Hai Akira", showtimes: "Showtimes"},
        { id:6, film_title:"Equity", showtimes: "Showtimes"},
        { id:7, film_title:"Things to Come", showtimes: "Showtimes"}
      ]
    }
  }

  render() {
    return (
      <div className="film-releases-box">
        <h1>{this.props.title}</h1>
        <h5><FilmList data={this.state.data} /></h5>
      </div>
    )
  }
}

export default FilmReleasesBox;
