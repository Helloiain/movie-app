import { API, APIKey } from '../config.js';
require('dotenv').config();

async function getBrowse(type, sort_by, page) {
	try {
		const res = await API.get(`/discover/${type}`, {
			params: {
				api_key: APIKey,
				sort_by,
				page,
			},
		});
		return res.data;
	} catch (err) {
		return err;
	}
}

async function getSearch(search, page) {
	try {
		return await API.get('/search/multi', {
			params: {
				api_key: APIKey,
				query: search,
				page,
			},
		});
	} catch (err) {
		return err;
	}
}

async function getDetails(type, id) {
	try {
		return await API.get(`/${type}/${id}`, {
			params: {
				api_key: APIKey,
				append_to_response: 'videos',
			},
		});
	} catch (err) {
		return err;
	}
}

export { getBrowse, getSearch, getDetails };
