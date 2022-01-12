import { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import VacationList from './Components/VacationList/VacationList';
import AddVacationForm from './Components/Form/Form';
import EditVacationForm from './Components/Form/EditForm';
import vacationsData from './Data/vacations';

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [filteredError,setFilteredError]=useState(false);
  const [editMode, setEditMode] = useState({ mode: false, data: {} });
  const [addData,setAddData]=useState([]);
  const [vacations,setVacations]= useState(vacationsData);
  const [editData,setEditData]=useState([]);
  return (
    <div className="container">
      <div className="left-container">
        <SearchBar setFilteredData={setFilteredData} setFilteredError={setFilteredError} filteredError={filteredError} vacations={vacations} />
        <VacationList vacationList={filteredData} filteredError={filteredError} setEditMode={setEditMode} vacations={vacations} setVacations={setVacations} editMode={editMode} />
      </div>
      <div className="right-container">
        {!editMode.mode ? <AddVacationForm addData={addData} setAddData={setAddData} setVacations={setVacations} /> : <EditVacationForm editMode={editMode} setEditMode={setEditMode} editData={editData} setEditData={setEditData} setVacations={setVacations} vacations={vacations}/> }
      </div>
    </div>
  );
}

export default App;
