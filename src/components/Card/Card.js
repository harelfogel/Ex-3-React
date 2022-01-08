import React,{useState} from 'react'
import './Card.css'
import { BsGeoAltFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";



const Card = (props) => {
    const [selected, setSelected] = useState(false);
    const handleClick = () => {
        props.setEditMode({ mode: true, data: props.data })
        setSelected(!selected);
    };
    if (selected) {
        return (
            <div className="card-selected" >
                <img className="img-selected" src={props.data.image} />
                <div className="button">
                    <button className="button-edit" onClick={() =>handleClick()}>
                        <MdModeEdit style={{ color: "white", width: "18px", height: "20px", justifyContent: "center", cursor: "pointer", marginLeft: "-1.1px", marginTop: "1px" }} />
                    </button>
                    <button className="button-delete" onClick={() => props.setVacations(prevState => { return prevState.filter(({ name }) => name !== props.data.name) })}
                    >
                        <MdDelete style={{ color: "white", width: "18px", height: "20px", justifyContent: "center", cursor: "pointer", marginLeft: "-1.1px", marginTop: "1px" }} />
                    </button>
                </div>
                <div className="bottom-card" >
                    <h5>{props.data.name}</h5>
                    <div className="row">
                        <BsGeoAltFill style={{ color: "F86549", cursor: "pointer" }} />
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
    }  else{
        return (
            <div className="card" >
                <img src={props.data.image} />
                <div className="button">
                    <button className="button-edit" onClick={() => handleClick()}>
                        <MdModeEdit style={{ color: "white", width: "18px", height: "20px", justifyContent: "center", cursor: "pointer", marginLeft: "-1.1px", marginTop: "1px" }} />
                    </button>
                    <button className="button-delete" onClick={() => props.setVacations(prevState => { return prevState.filter(({ name }) => name !== props.data.name) })}
                    >
                        <MdDelete style={{ color: "white", width: "18px", height: "20px", justifyContent: "center", cursor: "pointer", marginLeft: "-1.1px", marginTop: "1px" }} />
                    </button>
                </div>
                <div className="bottom-card" >
                    <h5>{props.data.name}</h5>
                    <div className="row">
                        <BsGeoAltFill style={{ color: "F86549", cursor: "pointer" }} />
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