import React, { Component } from 'react';
import './App.css';
import SearchCocktail from './Components/SearchCocktail';
import CocktailList from './Components/CocktailList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cocktailObj: '',
      apiCalled: false
    }
  }

  onSubmit = async (search) => {
    const fetching = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())

    this.setState({cocktailObj: fetching, apiCalled: true});

  }


  render() {
    return (
      <>
        <h1 className="background title">🍸 Welcome to Vannia's Bar, search your drink 🍹</h1>
        <SearchCocktail onSubmit={ this.onSubmit }/>
        <CocktailList cocktailObj={this.state.cocktailObj} apiCalled={this.state.apiCalled}/>
        <footer>Made with lovesito by Vannia :heart:</footer>
      </>
    );
  }
}

export default App;
