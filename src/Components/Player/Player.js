import React from 'react';
import './Player.css'

export class Player extends React.Component {
    render() {
        return(
            <iframe title = "Player" src= {this.props.previewTrackUrl} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        )
    }
}