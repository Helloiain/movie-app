import { API, APIKey } from '../config.js';
require('dotenv').config();

async function getMovies(sort, page) {
	try {
		return await API.get(`/discover/movie`, {
			params: {
				api_key: APIKey,
				page: page,
				sort_by: sort,
			},
		});
	} catch (err) {
		return err;
	}
}

async function getShows(type, page) {
	try {
		return await API.get(`/tv/${type}`, {
			params: {
				api_key: APIKey,
				page: page,
			},
		});
	} catch (err) {
		return err;
	}
}

export { getMovies, getShows };
