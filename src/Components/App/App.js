import './App.css';
import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "Running Up That Hill", artist: "Placebo", album: "Covers", id: 1 },{ name: "Black-Eyed", artist: "Placebo", album: "Black Market Music", id: 2 }
      ],
      playlistName : "Placebo Playlist",
      playlistTracks : [
        { name: "Every You Every Me", artist: "Placebo", album: "Without You I'm Nothing", id: 3 },{ name: "The Bitter End", artist: "Placebo", album: "Sleeping With Ghosts", id: 4 }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults = { this.state.searchResults } />
            <Playlist playlistName = { this.state.playlistName } playlistTracks = { this.state.playlistTracks } />
          </div>
        </div>
      </div>
    )
  }
}