import React from 'react';
import './FilmList.css';

class FilmList extends React.Component<{ onSelected: any}> {
  constructor(props) {
    super(props);
    this.state = {
      filmId: null,
      onSelected: null
    };
  }

  setFilm(id: number) {
    this.setState({filmId: id});
    this.props.onSelected(id.toString());
  }

  render() {
    return (
      <div className="film-container">
        <ul>
          <li>
            <a onClick={() => this.setFilm(4)}>I - Phantom Menace</a>
          </li>
          <li>
            <a onClick={() => this.setFilm(5)}>II - Clone Wars</a>
          </li>
          <li>
            <a onClick={() => this.setFilm(6)}>III - Revenge of the Sith</a>
          </li>
          <li>
            <a onClick={() => this.setFilm(1)}>IV - A New Hope</a>
          </li>
          <li>
            <a onClick={() => this.setFilm(2)}>V - Empire Strikes Back</a>
          </li>
          <li>
            <a onClick={() => this.setFilm(3)}>VI - Return of the Jedi</a>
          </li>
          <li>
            <a onClick={() => this.setFilm(7)}>VII - Force Awakens</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FilmList;