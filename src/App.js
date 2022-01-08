import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import SearchBar from './components/SearchBar/SearchBar';
import VacationList from './components/VacationList/VacationList';
import AddVacationForm from './components/Form/Form';


function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [editMode, setEditMode] = useState({ mode: false, data: {} });

  useEffect(() => {
    console.log({ editMode });
  }, [editMode])
  return (
    <div className="container">
      <div className="left-container">
        <SearchBar setFilteredData={setFilteredData} />
        <VacationList vacationList={filteredData} setEditMode={setEditMode} />
      </div>
      <div className="right-container">
        {!editMode.mode ? <AddVacationForm /> : <div>{JSON.stringify(editMode.data)}</div>}
      </div>
    </div>
  );
}

export default App;
