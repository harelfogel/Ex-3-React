import React, { useState, useEffect } from 'react';
import './Form.css';
import { RiAddFill } from 'react-icons/ri';

 const allLetter = (inputTxt) => {
    let letters = /^[A-Za-z]+$/;
    if (inputTxt.match(letters)) {
        return true;
    }
    else {
        return false;
    }
}

const checkPrice = (inputTxt) => {
    console.log(inputTxt.indexOf('$'));
    if ((inputTxt.match(/^[0-9]+$/) != null)|| ((inputTxt.indexOf('$')!=-1) || (inputTxt.indexOf(',')!=-1)) ) {
        return true;
    } else {
        return false;
    }
}

 export const handleErrorsInForm= (obj,methodAction) =>{
    if(methodAction =='add'){    // if we are on add mode 
        if (!(obj['name']) || !(obj['location']) || !(obj['price']) || !(obj['image'])) {
            alert(`Error! Cant ${methodAction} empty field`);
            return true;
        }
        if ((obj['name'].length > 25) || !allLetter(obj['name'])) {
            alert(`Error! Bad input in field: name`);
            return true ;
        }
        if ((obj['location'].length > 20) || !allLetter(obj['location'])) {
            alert(`Error! Bad input in field: location`);
            return true;
        }
        if ((obj['price'].length > 10) || !checkPrice(obj['price'])) {
            alert(`Error! Bad input in field: price`);
            return true;
        }
        return false;
    } else{    // if we are on edit mode:
        if ((obj['name']) && ((obj['name'].length > 25) || !allLetter(obj['name']))) {
            alert(`Error! Bad input in field: name`);
            return true;
        }
        if ((obj['location']) && ((obj['location'].length > 20) || !allLetter(obj['location']))) {
            alert(`Error! Bad input in field: location`);
            return true;
        }
        if ( (obj['price']) && ((obj['price'].length > 10) || !checkPrice(obj['price']))) {
            alert(`Error! Bad input in field: price`);
            return true;
        }
        return false;
    }
}

const AddVacationForm = (props) => {
    const [addVacation, setAddVacation] = useState({});
    const appendFormValues = (key, value) => {
        setAddVacation(prevState => ({ ...prevState, [key]: value }));
    }
    const handleAddForm = (e) => {
       if(handleErrorsInForm(addVacation,'add')){
           return;
       }
        else {
            e.preventDefault();
            props.setVacations(prevState => ([...prevState, addVacation]));
            alert('New vacation has been added!');
        }
    }
    return <div className="form-container">
        <h2>Add a new vacation</h2>
        <form className="form-lables">
            <fieldset>
                <label>
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Name" value={addVacation?.name} onChange={e => appendFormValues("name", e.target.value)} />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Location</p>
                    <input type="text" name="location" placeholder="Location" value={addVacation?.location} onChange={e => appendFormValues("location", e.target.value)} />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Price</p>
                    <input type="text" name="price" placeholder="Price" value={addVacation?.price} onChange={e => appendFormValues("price", e.target.value)} />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Image url</p>
                    <input type="text" name="image" placeholder="Image url" value={addVacation?.image} onChange={e => appendFormValues("image", e.target.value)} />
                </label>
                <div className="travel-image">
                </div>
            </fieldset>
            <div className="bottom-form">
                <button className="add-button" type="submit" onClick={handleAddForm}>
                    <RiAddFill className="add-fill-button" />
                </button>
            </div>
        </form>
    </div>;
}
export default AddVacationForm;

