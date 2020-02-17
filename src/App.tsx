import React from 'react';
import Crawl from './Crawl';
import FilmList from './FilmList';
import './App.css';

class App extends React.Component {
  content = 'Clique em um dos filmes para carregar o Crawl';
  fetchFilm(id: number) {
    fetch(`https://swapi.co/api/films/${id}`)
      .then(film => console.log(film))
      .catch(console.log);
  }

  onLoadFilmClick(id: string) {
    console.log(id);
    this.fetchFilm(+id);
  }

  render() {
    const {content} = this;
    return (
      <div className="container">
        <Crawl content={content}></Crawl>
        <FilmList onSelected={this.onLoadFilmClick.bind(this)} />
      </div>
    )
  };
}

export default App;
