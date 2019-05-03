import React from 'react';

const Details = (props) => {
return (
    <div className="place-detail">
        <div className="btn-save">
        <button className="btn btn-danger" data-index={props.index} onClick={() => props.deletePlaces(props.index)}>delete</button>
        </div>
        <div className='detail-data'>
            <h3>Name : {props.name}</h3>
            <h5>Address : {props.address}</h5>
            <h5> Type :  {props.type.join(", ")}</h5>
        </div>
    </div>
);
}

export default Details;