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

async function getShows(sort, page) {
	try {
		return await API.get(`/tv/${sort}`, {
			params: {
				api_key: APIKey,
				page: page,
			},
		});
	} catch (err) {
		return err;
	}
}

async function getSearch(search, page) {
	try {
		return await API.get('/search/movie', {
			params: {
				query: search,
				page,
			},
		});
	} catch (err) {
		return err;
	}
}

export { getMovies, getShows, getSearch };
