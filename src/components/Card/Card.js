import React from 'react'
import './Card.css'
import { BsGeoAltFill } from "react-icons/bs";
import{MdDelete} from "react-icons/md";
import{MdModeEdit} from "react-icons/md";
 

const Card = (props) => {
    return <div className="card">
        <img src={props.data.image} />
        <div className="button">
           <button className="button-edit" onClick={()=> props.setEditMode({mode:true,data:props.data}) }>
            <MdModeEdit style={{color:"white",width:"18px",height:"20px","justifyContent":"center"}}/> 
           </button>
           <button className="button-delete">
            <MdDelete style={{color:"white",width:"18px",height:"20px",justifyContent:"center",marginLeft:"-1px"}}/>
           </button>
        </div>
        <div className="bottom-card" >
            <h5>{props.data.name}</h5>
            <div className="row">
                <BsGeoAltFill style={{color:"F86549"}} />
                <span>
                    {props.data.location}
                </span>
                <div className="price">
                    {props.data.price}
                </div>
            </div>
        </div>
    </div>;
}

export default Card;