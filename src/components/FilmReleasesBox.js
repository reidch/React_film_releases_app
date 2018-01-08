import React from 'react';
import FilmList from './FilmList'

class FilmReleasesBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id:1, film_title:"Sausage Party"},
        { id:2, film_title:"Café Society"},
        { id:3, film_title:"Morgan"},
        { id:4, film_title:"The 9th Life of Louis Drax"},
        { id:5, film_title:"Naam Hai Akira"},
        { id:6, film_title:"Equity"},
        { id:7, film_title:"Things to Come"}                    
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
