import React from 'react'

class Film extends React.Component {

  render() {
    return (
      <div className="film">
        <h4 className="film_title">
          {this.props.film_title}
        </h4>
        {this.props.children}
      </div>
    )
  }
}

export default Film;
