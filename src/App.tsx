import React from 'react';
import Crawl from './Crawl';
import FilmList from './FilmList';
import './App.css';

class App extends React.Component<any, any> {
  
  constructor(props) {
    super(props);
    this.state = {
      content: 'Clique em um dos filmes na lista ao lado para carregar o Crawl. Use o scroll para mover o texto. Esse site não foi otimizado para mobile. E que a força esteja com você. Sempre!',
      padding: 1
    };
  }

  fetchFilm(id: number) {
    this.setState({content: 'Carregando...', padding: 1});
    fetch(`https://swapi.co/api/films/${id}`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
    })
      .then(response => response.json())
      .then(film => {
        this.setState({content: film.opening_crawl, padding: 200});
      })
      .catch(console.log);
  }

  onLoadFilmClick(id: string) {
    this.fetchFilm(+id);
  }

  render() {
    return (
      <div className="container">
        <Crawl content={this.state.content} padding={this.state.padding}></Crawl>
        <FilmList onSelected={this.onLoadFilmClick.bind(this)} />
      </div>
    )
  };
}

export default App;
