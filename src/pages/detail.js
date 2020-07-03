import React, { useState, useEffect } from 'react';
import ItemList from '../components/itemList';
import Loading from '../components/loading';
import AppError from '../components/appError';
import { posterUrl } from '../config';
import { useParams } from 'react-router-dom';
import { getDetails, getRecommendations } from '../api/apiUtils';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function Detail(props) {
	const [item, setItem] = useState([]);
	const [recommendations, setRecommendations] = useState([]);
	const [trailer, setTrailer] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	let { type, id } = useParams();

	useEffect(() => {
		loadDetails(type, id);
		loadRecommendations(type, id);
		window.scrollTo({ top: '0', behavior: 'smooth' });
	}, [type, id]);

	function loadDetails(type, id) {
		getDetails(type, id)
			.then((res) => {
				setItem(res.data);
				if (res.data.videos.results.length !== 0) {
					setTrailer(res.data.videos.results[0].key);
				}
				setLoading(false);
			})
			.catch((err) => setError(err));
	}

	function loadRecommendations(type, id) {
		getRecommendations(type, id).then((res) => {
			setRecommendations(res);
		});
	}

	// Get the year that it was released
	let release = item.release_date || item.first_air_date;
	release = new Date(release).getFullYear();

	// Convert runtime into hours and minutes
	let runtime = item.runtime;
	runtime = `${Math.floor(runtime / 60)}h ${runtime % 60}m`;

	// If runtime is 0 hours, just show the minutes
	if (runtime.match(/0h/g)) {
		runtime = runtime.split(' ')[1];
	}

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <AppError />;
	}

	return (
		<div style={{ display: 'block' }}>
			<div style={{ marginLeft: '200px', display: 'flex' }}>
				<div style={{ margin: '2rem' }}>
					{item.poster_path ? (
						<img
							src={`${posterUrl}/${item.poster_path}`}
							alt={`${item.name || item.title}`}
							width='300px'
						/>
					) : (
						<img
							src={process.env.PUBLIC_URL + 'images/cinema.png'}
							alt={`${item.name || item.title}`}
						/>
					)}
				</div>
				<div style={{ marginTop: '2rem' }}>
					<span
						onClick={() => {
							props.history.goBack();
						}}
						style={{ cursor: 'pointer' }}
					>
						<AiOutlineArrowLeft style={{ verticalAlign: 'sub' }} /> Go back
					</span>
					<h1>
						{item.name || item.title} ({release})
					</h1>
					{item.runtime ? <p>Runtime: {runtime}</p> : null}
					<p>
						Genres:{' '}
						{item.genres.map((genre, index) => (
							<span key={index}>
								{index ? ', ' : ''}
								{genre.name}
							</span>
						))}
					</p>
					<p>{item.overview}</p>
					{trailer ? (
						<a
							href={`https://www.youtube.com/watch?v=${trailer}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							<button
								style={{
									padding: '.5rem 1.5rem',
									borderRadius: '1rem',
									background: 'none',
									cursor: 'pointer',
								}}
							>
								View Trailer
							</button>
						</a>
					) : null}
				</div>
			</div>
			<div style={{ marginLeft: '230px' }}>
				<h1>Recommended {type}</h1>
				<ItemList items={recommendations} type={type} />
			</div>
		</div>
	);
}

export default Detail;
