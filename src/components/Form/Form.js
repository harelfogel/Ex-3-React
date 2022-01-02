import React from 'react';
import './Form.css';
import { RiAddFill } from 'react-icons/ri';
import traveImage from '../images/travel.png'

const AddVacationForm = () => {
    return <div className="form-container">
        <h2>Add a new vacation</h2>
        <form className="form-lables">
            <fieldset>
                <label>
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Name" />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Location</p>
                    <input type="text" name="location" placeholder="Location" />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Price</p>
                    <input type="text" name="price" placeholder="Price" />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <p>Image url</p>
                    <input type="text" name="image-url" placeholder="Image url" />
                </label>
            </fieldset>
            <div className="bottom-form">
                <div className="travel-image">
                    <img  src={traveImage} />
                </div>
                <button className="add-button" type="submit">
                    <RiAddFill style={{ color: "white", width: "28px", height: "28px" }} />
                </button>
            </div>
        </form>
    </div>;
}

export default AddVacationForm;