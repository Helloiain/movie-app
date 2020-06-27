import { API, APIKey } from '../config.js';
require('dotenv').config();

async function getMovies(catagory, page) {
	try {
		return await API.get(`/discover/movie?api_key=${APIKey}`, {
			params: {
				page: page,
				sort_by: catagory,
			},
		});
	} catch (err) {
		return err;
	}
}

export { getMovies };
