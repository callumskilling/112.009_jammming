import React from 'react';
import './SearchBar.css'

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search(e) {
        if (e.type === 'click') {
            this.props.onSearch(this.state.term);
        } else if (e.key === 'Enter') {
            this.props.onSearch(this.state.term);
        } else {
            return;
        }
    }

    handleTermChange(e) {
        this.setState({ term : e.target.value })
    }


    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyUp={this.search} />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}