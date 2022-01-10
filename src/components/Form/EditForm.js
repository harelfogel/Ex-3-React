import React, { useState, useEffect } from 'react';
import './Form.css';
import { FaCheck } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

const EditVacationForm = (props) => {
    const [editVacation, setEditVacation] = useState([]);
    const editFormValues = (key, value) => {
        setEditVacation(prevState => ({ ...prevState, [key]: value }));
    }

    const compareKeys=(originalObj, editedObj) => {
        if(!(editedObj.hasOwnProperty("name"))){
            editedObj.name=originalObj.name;
        }
        if(!(editedObj.hasOwnProperty("location"))){
            editedObj.location=originalObj.location;
        }
        if(!(editedObj.hasOwnProperty("price"))){
            editedObj.price=originalObj.price;
        }
        if(!(editedObj.hasOwnProperty("image"))){
            editedObj.image=originalObj.image;
        }
    } 

    const handleEditForm = (e) => {
        e.preventDefault();
        let updatedData = {};
        props.setEditMode(prevState => ({ ...prevState, editVacation }));
        updatedData=Object.assign(updatedData,editVacation);
        compareKeys(props.editMode.data,updatedData);
        const index = (props.vacations.indexOf(props.editMode.data));
        props.vacations[index] = updatedData;
        alert(`${JSON.stringify(editVacation)} is updated!`);
    };
    const handleAbort = () => {
        alert('Nothing has been edited!');
    };

    return <div className="edit-form-container">
        <h2>Edit a vacation</h2>
        <form className="edit-form-lables">
            <fieldset className="edit-field-set">
                <label className>
                    <p>Name</p>
                    <input type="text" name="name" placeholder={(props.editMode.data.name)} value={editVacation?.name} onChange={e => editFormValues("name", e.target.value)} />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Location</p>
                    <input type="text" name="location" placeholder={(props.editMode.data.location)} value={editVacation?.location} onChange={e => editFormValues("location", e.target.value)} />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Price</p>
                    <input type="text" name="price" placeholder={(props.editMode.data.price)} value={editVacation?.price} onChange={e => editFormValues("price", e.target.value)} />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Image url</p>
                    <input type="text" name="image-url" placeholder={(props.editMode.data.image)} value={editVacation?.image} onChange={e => editFormValues("image", e.target.value)} />
                </label>
            </fieldset>
            <div className="edit-bottom-form">
                <button className="check-button" type="submit" onClick={handleEditForm}>
                    <FaCheck className="edit-fa-check-button"/>
                </button>
                <button className="close-button" type="submit" onClick={handleAbort}>
                    <CgClose className="edit-cd-close-button" style={{ color: "white", width: "20px", height: "17px", cursor: "pointer" }} />
                </button>
            </div>
        </form>
    </div>;
}

export default EditVacationForm;