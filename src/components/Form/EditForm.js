import React from 'react';
import './Form.css';
import { FaCheck } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';


const EditVacationForm = ({editMode}) => {
    return <div className="edit-form-container">
        <h2>Edit a vacation</h2>
        <form className="edit-form-lables">
            <fieldset className="edit-field-set">
                <label className>
                    <p>Name</p>
                    <input type="text" name="name" placeholder={(editMode.data.name)} />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Location</p>
                    <input type="text" name="location" placeholder={(editMode.data.location)} />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Price</p>
                    <input type="text" name="price" placeholder={(editMode.data.price)} />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Image url</p>
                    <input type="text" name="image-url" placeholder={(editMode.data.image)} />
                </label>
            </fieldset>
            <div className="edit-bottom-form">
                <button className="check-button" type="submit">
                    <FaCheck style={{ color: "white", width: "20px", height: "17px",cursor:"pointer" }} />
                </button>
                <button className="close-button" type="submit">
                    <CgClose style={{ color: "white", width: "20px", height: "17px",cursor:"pointer" }} />
                </button>
            </div>
        </form>
    </div>;
}

export default EditVacationForm;