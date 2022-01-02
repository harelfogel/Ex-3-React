import React from 'react'
import Card from '../Card/Card';
import './VacationList.css'

const VacationList = () => {
    const data = [
        {
            name:"Paris",
            image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
            location:"France",
            price:"$1,000"
        },
        {
            name:"Paris",
            image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
            location:"France",
            price:"$1,000"
        },
        {
            name:"Paris",
            image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
            location:"France",
            price:"$1,000"
        },
        {
            name:"Paris",
            image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
            location:"France",
            price:"$1,000"
        },
        {
            name:"Paris",
            image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
            location:"France",
            price:"$1,000"
        },
        {
            name:"Paris",
            image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
            location:"France",
            price:"$1,000"
        },
        {
            name:"Paris",
            image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
            location:"France",
            price:"$1,000"
        },
        {
            name:"Paris",
            image:"https://www.voyagesdereve.ch/upload/images/xParis-Tour-Eiffel.jpg.pagespeed.ic.2trsrFlXuR.jpg",
            location:"France",
            price:"$1,000"
        }
    ];
    return <div className="list">{data.length!==0 && data.map((dest)=>{
        return <Card data={dest}/>;
    })}</div>;
}

export default VacationList;