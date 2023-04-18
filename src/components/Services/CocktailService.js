import axios from 'axios';

export const getAllCocktails =() => {
    return axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
}

export const getCocktail = (id) => {
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
}