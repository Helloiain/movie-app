import { API, APIKey } from '../config.js';
require('dotenv').config();

async function getMovies(page) {
	try {
		return await API.get(`/discover/movie?api_key=${APIKey}`, {
			params: {
				page: page,
			},
		});
	} catch (err) {
		return err;
	}
}

export { getMovies };
