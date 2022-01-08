import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import VacationList from './components/VacationList/VacationList';
import AddVacationForm from './components/Form/Form';
import EditVacationForm from './components/Form/EditForm';
import vacationsData from './Data/vacations';


function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [filteredError,setFilteredError]=useState([]);
  const [editMode, setEditMode] = useState({ mode: false, data: {} });
  const [addData,setAddData]=useState([]);
  const [vacations,setVacations]= useState(vacationsData);
  const [editData,setEditData]=useState([]);

  return (
    <div className="container">
      <div className="left-container">
        <SearchBar setFilteredData={setFilteredData} setFilteredError={setFilteredError} vacations={vacations} />
        <VacationList vacationList={filteredData} filteredError={filteredError} setEditMode={setEditMode} vacations={vacations} setVacations={setVacations} editMode={editMode} />
      </div>
      <div className="right-container">
        {!editMode.mode ? <AddVacationForm addData={addData} setAddData={setAddData} setVacations={setVacations} /> : <EditVacationForm editMode={editMode} setEditMode={setEditMode} editData={editData} setEditData={setEditData} setVacations={setVacations} vacations={vacations}/> }
      </div>
    </div>
  );
}

export default App;
