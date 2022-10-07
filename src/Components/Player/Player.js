import React from 'react';
import './Player.css'

export class Player extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <iframe src= {this.props.previewTrackUrl} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        )
    }
}