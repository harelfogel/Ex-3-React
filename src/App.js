import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import SearchBar from './components/SearchBar/SearchBar';
import VacationList from './components/VacationList/VacationList';
import AddVacationForm from './components/Form/Form';
import EditVacationForm from './components/Form/EditForm';
import vacationsData from './Data/vacations';


function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [editMode, setEditMode] = useState({ mode: false, data: {} });
  const [addData,setAddData]=useState([]);
  const [vacations,setVacations]= useState(vacationsData);

  return (
    <div className="container">
      <div className="left-container">
        <SearchBar setFilteredData={setFilteredData} vacations={vacations} />
        <VacationList vacationList={filteredData} setEditMode={setEditMode} vacations={vacations} setVacations={setVacations}  />
      </div>
      <div className="right-container">
        {!editMode.mode ? <AddVacationForm addData={addData} setAddData={setAddData} setVacations={setVacations} /> : <EditVacationForm editMode={editMode}/> }
      </div>
    </div>
  );
}

export default App;
