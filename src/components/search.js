import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

function Search() {
	const [value, setValue] = useState('');

	function handleChange(e) {
		setValue(e.target.value.trim());
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				padding: '0.2rem',
				border: '1px solid rgba(0,0,0,0.2)',
				borderRadius: '3px',
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
