import React from 'react';
import Map from './Map'

const Details = (props) => {
return (
    <div className="place-detail">
        <div className="btn-save">
            <button className="btn btn-primary" data-index={props.index} onClick={props.savePlace} >save</button>
        </div>
        <div className='detail-data'>
            <h3>Name : {props.name}</h3>
            <h5>Address : {props.address}</h5>
            <h5> Type :  {props.type.join(",  ")}</h5>
        </div>
        <div className="map">
        <div className="mapcontent">
            <Map lat={props.lat}
                 lng={props.lng}               
            />
        </div>
    </div>
    </div>
);
}

export default Details;