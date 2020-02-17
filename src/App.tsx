import React from 'react';
import Crawl from './Crawl';
import FilmList from './FilmList';
import './App.css';

class App extends React.Component<any, any> {
  
  constructor(props) {
    super(props);
    this.state = {
      content: 'Clique em um dos filmes para carregar o Crawl. Use o scroll para mover o texto.',
    };
  }

  fetchFilm(id: number) {
    this.setState({content: 'Carregando...'});
    fetch(`https://swapi.co/api/films/${id}`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
    })
      .then(response => response.json())
      .then(film => {
        this.setState({content: film.opening_crawl});
      })
      .catch(console.log);
  }

  onLoadFilmClick(id: string) {
    this.fetchFilm(+id);
  }

  render() {
    return (
      <div className="container">
        <Crawl content={this.state.content}></Crawl>
        <FilmList onSelected={this.onLoadFilmClick.bind(this)} />
      </div>
    )
  };
}

export default App;
