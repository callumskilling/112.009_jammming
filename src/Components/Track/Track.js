import React from 'react';
import './Track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.previewTrack = this.previewTrack.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <button className='Track-action' onClick = {this.removeTrack}>-</button>
        } else {
            return <button className='Track-action' onClick = {this.addTrack}>+</button>
        }
    }

    addTrack() {
        this.props.onAdd(this.props.track)
    }

    removeTrack() {
        this.props.onRemove(this.props.track)
    }

    previewTrack() {
        this.props.previewTrack(this.props.track)
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information" onClick = {this.previewTrack}>
                    <h3>{this.props.track.name}</h3>
                    <p><strong>{this.props.track.artist}</strong> | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}