import axios from 'axios';

export const APIKey = process.env.REACT_APP_API_KEY;
export const APIUrl = 'https://api.themoviedb.org/3';
export const posterUrl = 'https://image.tmdb.org/t/p/original';

export const API = axios.create({
	baseURL: APIUrl,
});
