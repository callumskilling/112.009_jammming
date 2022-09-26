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
        { name: "Running Up That Hill", artist: "Placebo", album: "Covers", id: 1 }, { name: "Black-Eyed", artist: "Placebo", album: "Black Market Music", id: 2 }
      ],
      playlistName: "Placebo Playlist",
      playlistTracks: [
        { name: "Every You Every Me", artist: "Placebo", album: "Without You I'm Nothing", id: 3 }, { name: "The Bitter End", artist: "Placebo", album: "Sleeping With Ghosts", id: 4 }
      ]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
      return;
    }

    tracks.push(track)
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks})
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove = {this.removeTrack} />
          </div>
        </div>
      </div>
    )
  }
}