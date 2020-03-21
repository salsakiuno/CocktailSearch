import React from 'react';
import './Cocktail.css';
import Cocktail from './Cocktail';


const CocktailList = ({ cocktailObj, apiCalled }) => {
  if (cocktailObj.drinks) {
    const mapping = () => {
      return cocktailObj.drinks.map((val) => <Cocktail key={val.idDrink} cocktail={val} />)
    }

    return (
      <div className="card-container">
        { mapping() }
      </div>
    );
  }
  const message = <h1 className="cocktail-error"> No drink with that name. Try again </h1>;
  return (apiCalled) ? message : null;
};

export default CocktailList;
