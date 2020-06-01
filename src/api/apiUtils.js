import { API, APIKey } from '../config.js';
require('dotenv').config();

async function getMovies() {
	try {
		return await API.get(`/discover/movie?api_key=${APIKey}`);
	} catch (err) {
		return err;
	}
}

export { getMovies };
