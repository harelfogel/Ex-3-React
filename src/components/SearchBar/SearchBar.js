import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import { FiSearch } from 'react-icons/fi';
import vacationsData from './../Data/vacations';


const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleFilter = () => {

        const newFilter = vacationsData.filter((value) => {
            return value.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        props.setFilteredData(newFilter);
    };

    useEffect (() =>{
        console.log(searchTerm);
        if(searchTerm===""){
            props.setFilteredData([]);
        }
    }, [searchTerm])

    return (
        <div className="search-bar">
            <div className="search-container">
                <i className="search-icon"> <FiSearch style={{ color: '#AFAFAF' }} /></i>
                <input type="text" className="search-term" placeholder="Search name or location" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <button type="submit" className="search-button" onClick={handleFilter}>
                <FiSearch style={{ color: "#FFFFFF", width: "18px", height: "18px" }} />
            </button>
        </div>);

}

export default SearchBar;