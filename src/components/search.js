import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { FaSearch } from 'react-icons/fa';

function Search() {
	const [value, setValue] = useState('');
	const history = useHistory();

	function handleChange(e) {
		setValue(e.target.value.trim());
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (value.length !== 0) {
			history.push(`/search/${value}`);
		} else {
			// todo: manage errors
			return;
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				padding: '0.2rem',
				border: '1px solid rgba(0,0,0,0.2)',
				borderRadius: '3px',
				maxWidth: '200px',
			}}
		>
			<input
				placeholder='Search'
				style={{ border: 'none' }}
				onChange={handleChange}
			/>
			<button
				type='submit'
				style={{ border: 'none', background: '#fff', cursor: 'pointer' }}
			>
				<FaSearch style={{ color: 'rgba(0,0,0,0.2)' }} />
			</button>
		</form>
	);
}

export default Search;
