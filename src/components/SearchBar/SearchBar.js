import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import { FiSearch } from 'react-icons/fi';
import { CgOpenCollective } from 'react-icons/cg';

const SearchBar = ({vacations,setFilteredData,setFilteredError}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleFilter = () => {
        const newFilter = vacations.filter((value) => {
            return value.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        (Object.keys(newFilter).length === 0)?setFilteredError(true):setFilteredData(newFilter);
        
    };

    useEffect (() =>{
        if(searchTerm===""){
            setFilteredError(false);
            setFilteredData([]);
        }
    }, [searchTerm])

    return (
        <div className="search-bar">
            <div className="search-container">
                <i className="search-icon"> <FiSearch style={{ color: '#AFAFAF' }} /></i>
                <input type="text" className="search-term" placeholder="Search by name or location" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <button type="submit" className="search-button" onClick={handleFilter}>
                <FiSearch style={{ color: "#FFFFFF", width: "20px", height: "20px",cursor:"pointer" }} />
            </button>
        </div>);

}

export default SearchBar;