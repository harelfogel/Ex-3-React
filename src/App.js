import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import SearchBar from './components/SearchBar/SearchBar';
import VacationList from './components/VacationList/VacationList';
import AddVacationForm from './components/Form/Form';


function App() {
  return (
    <div className="container">
      <div className="left-container">
        <SearchBar />
        <VacationList/>
      </div>
      <div className="right-container">
       <AddVacationForm/>
      </div>
    </div>
  );
}

export default App;
