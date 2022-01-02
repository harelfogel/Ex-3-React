import React from 'react';
import './SearchBar.css';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    return <div className="search-bar">
        <div className="search-container">
            <i className="search-icon"> <FiSearch style={{color:'#AFAFAF'}}/></i>
            <input type="text" className="search-term" placeholder="Search name or location"/>
        </div>
            <button type="submit" className="search-button">
                <FiSearch style={{color:"#FFFFFF",width:"18px", height:"18px"}}/>
            </button>
    </div>;
}

export default SearchBar;