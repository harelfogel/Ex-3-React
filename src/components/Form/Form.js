import React,{useState} from 'react';
import './Form.css';
import { RiAddFill } from 'react-icons/ri';


function checkProperties(obj) {
    if(Object.keys(obj).length === 0){
        return false;
    }
    for (const key in obj) {
        if (obj[key] === null && obj[key] == "")
            return false;
        
    }
    return true;
}
const AddVacationForm = (props) => {
    const [addVacation, setAddVacation] = useState({});
    const appendFormValues= (key,value)=>{
        setAddVacation(prevState=> ({...prevState,[key]:value}))
    }
    const handleAddForm= (e) => {
        e.preventDefault();
        if(checkProperties(addVacation)){
           props.setVacations(prevState =>([...prevState,addVacation]));
           alert('New vacation has been added!');
        } 
    };
    return <div className="form-container">
        <h2>Add a new vacation</h2>
        <form className="form-lables">
            <fieldset>
                <label>
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Name" value={addVacation?.name} onChange={e => appendFormValues("name",e.target.value)} />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Location</p>
                    <input type="text" name="location" placeholder="Location" value={addVacation?.location} onChange={e => appendFormValues("location",e.target.value)} />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Price</p>
                    <input type="text" name="price" placeholder="Price" value={addVacation?.price} onChange={e => appendFormValues("price",e.target.value)}/>
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Image url</p>
                    <input type="text" name="image" placeholder="Image url" value={addVacation?.image} onChange={e => appendFormValues("image",e.target.value)} />
                </label>
            <div className="travel-image">
            </div>
            </fieldset>
            <div className="bottom-form">
                <button className="add-button" type="submit" onClick={handleAddForm}>
                    <RiAddFill style={{ color: "white", width: "28px", height: "28px",cursor:"pointer" }} />
                </button>
            </div>
        </form>
    </div>;
}

export default AddVacationForm;