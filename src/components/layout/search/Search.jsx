import React from 'react';

// import styles
import './search.css';

export default function Search({ searchData, searchError }) {
    const handleSubmit = e => {
        e.preventDefault();
        let data = document.querySelector("#searchInput").value;
        searchData(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            {searchError ? <span className='search-error-text'> No matches found </span> : null }
            <input 
                minLength={3}
                required
                autoFocus
                autoComplete='off' 
                className={searchError ? 'form-search search-error' : 'form-search' }
                type="search" 
                name="search" 
                placeholder="Search ..." 
                id="searchInput"
            />
            <button 
                type="submit" 
                className={searchError ? 'search-icon search-error' : 'search-icon ' }
            >
                <i className="fas fa-search"></i>
            </button>
            
        </form>
    );
}
