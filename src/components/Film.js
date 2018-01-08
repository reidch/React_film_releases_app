import React from 'react'

class Film extends React.Component {

  render() {
    return (
      <table className="film">
        <tbody>
          <tr>
            <td>{this.props.film_title}</td>
            <td>{this.props.showtimes}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Film;
