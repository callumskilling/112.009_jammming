import logo from './logo.svg';
import './App.css';
import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchResults : ['Running Up That Hill', 'Placebo', 'Covers', '6RHHbAbyIcPpvS1dP3KUGq']}
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          <SearchResults searchResult = { this.state.searchResults }/>
          <Playlist />
          </div>
        </div>
      </div>
    )
  }
}