import React, { useState } from 'react'
import './Card.css'
import { BsGeoAltFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

const Card = (props) => {
    const [selected, setSelected] = useState(false);
    const handleClick = () => {
        let editFlag = false;
        props.setEditMode({ mode: !editFlag, data: props.data });
        setSelected(!selected);
    };
    if (selected) {
        return (
            <div className="card-selected" >
                <img className="img-selected" src={props.data.image} />
                <div className="button">
                    <button className="button-edit" onClick={() => handleClick()}>
                        <MdModeEdit className="md-mode-edit"/>
                    </button>
                    <button className="button-delete" onClick={() => props.setVacations(prevState => { return prevState.filter(({ name }) => name !== props.data.name) })}
                    >
                        <MdDelete className="md-delete"/>
                    </button>
                </div>
                <div className="bottom-card" >
                    <h5>{props.data.name}</h5>
                    <div className="row">
                        <BsGeoAltFill className="bs-geo-alt-fill"/>
                        <span>
                            {props.data.location}
                        </span>
                        <div className="price">
                            {props.data.price}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="card" >
                <img src={props.data.image} />
                <div className="button">
                    <button className="button-edit" onClick={() => handleClick()}>
                        <MdModeEdit className="md-mode-edit"/>
                    </button>
                    <button className="button-delete" onClick={() => props.setVacations(prevState => { return prevState.filter(({ name }) => name !== props.data.name) })}
                    >
                        <MdDelete className="md-delete"/>
                    </button>
                </div>
                <div className="bottom-card" >
                    <h5>{props.data.name}</h5>
                    <div className="row">
                        <BsGeoAltFill className="bs-geo-alt-fill"/>
                        <span>
                            {props.data.location}
                        </span>
                        <div className="price">
                            {props.data.price}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;