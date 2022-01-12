import React from 'react'
import './ErrorCard.css'

const ErrorCard = () => {
    return (
        <div className="error-card" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPuv0AE0zbsbCCJH2BcR1y4-bBoCkC5nIIRQ&usqp=CAU"/>
            <div className="error-bottom-card" >
                <h5>Oops can't find vacation!</h5>
            </div>
        </div>
    );
}

export default ErrorCard;