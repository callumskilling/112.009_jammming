import React from 'react';
import TrackList from '../TrackList/Tracklist';
import './Tracklist.css';

export class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} />
                {/* <!-- Add a TrackList component --> */}
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}