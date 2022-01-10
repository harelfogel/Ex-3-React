import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import { FiSearch } from 'react-icons/fi';


const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleFilter = () => {
        const newFilter = props.vacations.filter((value) => {
            return value.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        ((Object.keys(newFilter).length === 0)||(newFilter.length>38))?props.setFilteredError(true):props.setFilteredData(newFilter); 
    };

    useEffect (() =>{
        if(searchTerm===""){
            props.setFilteredError(false);
            props.setFilteredData([]);
        }
       if(searchTerm.length>38){
           alert('Too many letters for search');
       }
    }, [searchTerm]);
    return (
        <div className="search-bar">
            <div className="search-container">
                <i className="search-icon"> <FiSearch style={{ color: '#AFAFAF' }} /></i>
                <input type="text" className="search-term" placeholder="Search by name or location" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <button type="submit" className="search-button"  onClick={handleFilter}>
                <FiSearch className="search-button-style"/>
            </button>
        </div>);

}

export default SearchBar;