import React, { Component } from 'react';
import './Cocktail.css';

class Cocktail extends Component {
  getIngredients() {
    const object = Object.entries(this.props.cocktail);
    const ingredients = [];

    for (let i = 0; i < object.length; i++) {
      if (object[i][0].includes('strIngredient')) {
        if (object[i][1]) {
          ingredients.push(object[i][1]);
        }
      }
    }
    return ingredients;
  }

  renderIngredients() {
    const ingredientsArr = this.getIngredients();
    return (
      <ul className="ingredient-list-text">
        {ingredientsArr.map((ingredient) => <li className="ingredient-item" key={ingredient}>{ ingredient }</li>)}
      </ul>
    );
  }

  render() {
    return (
      <div className="cardStyle">
        <div className="face front">
          <h1 className="cocktail-title">{ this.props.cocktail.strDrink }</h1>
          <img className="cocktailimage" alt="cocktails" src={this.props.cocktail.strDrinkThumb} />
        </div>

        <div className="back face">
          <h1 className="cocktail-title">{ this.props.cocktail.strDrink }</h1>
          <h3 className="cocktail-h3">Ingredients:</h3>
          { this.renderIngredients() }
          <h3 className="cocktail-h3">Instructions:</h3>
          <p className="cocktail-text">{ this.props.cocktail.strInstructions }</p>
        </div>
      </div>
    );
  }
}

export default Cocktail;
