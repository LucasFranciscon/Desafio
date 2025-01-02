import axios from 'axios';
import Parametros from './Parametros';

export const fetchTrendingGIFs = async () => {
    const url = "https://api.giphy.com/v1/gifs/trending";
    try {
      const response = await axios.get(url, {
        params: {
          api_key: Parametros.apiKey,
          limit: 10,
        },
      });
      return response.data.data;
    } catch (error) {
      console.error("Erro ao buscar GIFs em alta", error);
      throw error;
    }
  };

export const fetchCategories = async () => {
  try {
    const response = await axios.get("https://api.giphy.com/v1/gifs/categories", {
      params: {
        api_key: Parametros.apiKey
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Erro ao buscar categorias', error);
    throw error;
  }
};

export const fetchSearchGIFs = async (category) => {
  try {
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: Parametros.apiKey,
        q: category,
        limit: 10
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Erro ao buscar GIFs da categoria', error);
    throw error;
  }
};
