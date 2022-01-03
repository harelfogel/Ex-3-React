import React from 'react'
import Card from '../Card/Card';
import vacationsData from './../Data/vacations';
import './VacationList.css';
const VacationList = (props) => {
    //const data = [
    // {
    //     name:"Paris",
    //     image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
    //     location:"France",
    //     price:"$1,000"
    // },
    // {
    //     name:"Paris",
    //     image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
    //     location:"France",
    //     price:"$1,000"
    // },
    // {
    //     name:"Paris",
    //     image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
    //     location:"France",
    //     price:"$1,000"
    // },
    // {
    //     name:"Paris",
    //     image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
    //     location:"France",
    //     price:"$1,000"
    // },
    // {
    //     name:"Paris",
    //     image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
    //     location:"France",
    //     price:"$1,000"
    // },
    // {
    //     name:"Paris",
    //     image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
    //     location:"France",
    //     price:"$1,000"
    // },
    // {
    //     name:"Paris",
    //     image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
    //     location:"France",
    //     price:"$1,000"
    // },
    // {
    //     name:"Paris",
    //     image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
    //     location:"France",
    //     price:"$1,000"
    // }
    // ];
    return (
        <div className="list">
            {
                props.vacationList.length !== 0 ? props.vacationList.map((dest) => {
                    return <Card data={dest} setEditMode={props.setEditMode} />
                }) :
                    vacationsData.length !== 0 && vacationsData.map((dest) => {
                        return <Card data={dest} setEditMode={props.setEditMode} />;
                    })
            }
        </div>
    )

    // return <div className="list">{vacationsData.length !== 0 && vacationsData.map((dest) => {
    //     return <Card data={dest} />;
    // })}</div>;
}

export default VacationList;