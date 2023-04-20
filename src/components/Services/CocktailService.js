import axios from 'axios';

 let serialize = function(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p) && obj[p] != '') {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

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

export const getDrinks = (filterObj) => {
    console.log("https://www.thecocktaildb.com/api/json/v1/1/filter.php?" + serialize(filterObj))
    
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?" + serialize(filterObj));
}