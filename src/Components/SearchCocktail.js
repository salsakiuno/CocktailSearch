import React, { Component } from 'react';
import './Cocktail.css';

class SearchCocktail extends Component {
  constructor() {
    super();
    this.state = { searchInput: '' }
  }

  onSearchChange = (event) => {
    this.setState({ searchInput: event.target.value })
  }

  handleOnSubmit = (event) =>{
    this.props.onSubmit(this.state.searchInput);
    this.setState({searchInput: '' });
    event.preventDefault();
  }

  render() {
    return (

        <form className="search-form" onSubmit={this.handleOnSubmit}>
          <div className="search">
          <input
            type="text"
            placeholder="Search your favourite drink..."
            value={this.state.searchInput}
            onChange={this.onSearchChange}
          />
          <input
            type="submit"
            value="Shake it!"
          />
          </div>
        </form>

    );
  }
}

export default SearchCocktail;
