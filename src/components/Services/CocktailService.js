import axios from 'axios';

export const getAllCocktails =() => {
    return axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
}

export const getCocktail = (id) => {
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
}

export const getCategories = () => {
    return axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
}

export const getGlasses = () => {
    return axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
}

export const getIngredients = () => {
    return axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
}

