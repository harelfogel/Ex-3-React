import React, { useState } from 'react'
import Card from '../Card/Card';
import './VacationList.css';

const VacationList = (props) => {
    return (
        <div className="list">
            {
                props.vacationList.length !== 0 ? props.vacationList.map((dest) => {
                    return <Card data={dest} setEditMode={props.setEditMode} editMode={props.editMode} setVacations={props.setVacations}  setEditData={props.setEditData}/>
                }) :
                    props.vacations.length !== 0 && props.vacations.map((dest) => {
                        return <Card data={dest} setEditMode={props.setEditMode} setVacations={props.setVacations} setEditData={props.setEditData}/>;
                    })
            }
        </div>
    )
}

export default VacationList;