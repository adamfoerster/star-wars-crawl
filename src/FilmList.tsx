import React from 'react';
import './FilmList.css';

class FilmList extends React.Component<{ onSelected: any}> {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      filmId: null,
      onSelected: null
    };
  }

  setFilm(id: number) {
    this.setState({filmId: id});
    this.props.onSelected(id.toString());
    console.log(id, this.props.onSelected);
  }

  render() {
    return (
      <div className="film-container">
        <ul>
          <li>
            <a onClick={() => this.setFilm(4)}>I - Phantom Menace</a>
          </li>
          <li>
            <a onClick={() => this.setFilm(1)}>IV - A New Hope</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FilmList;