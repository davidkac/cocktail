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

export const getFilters = (filter) => {
    return axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?'+ filter +'=list');
}

export const getDrinks = (filterObj) => {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?" + serialize(filterObj));
}
