import React from 'react'

class Film extends React.Component {

  render() {
    return (
      <table className="film">
        <tr>
          <td>{this.props.film_title}</td>
          <td>{this.props.showtimes}</td>
        </tr>
      </table>
    )
  }
}

export default Film;
