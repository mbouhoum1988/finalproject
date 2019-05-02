import React from 'react';

const Details = (props) => {
return (
    <div className="place-detail">
    
            <div className="btn-save">
                <button className="btn btn-primary" data-index={props.index} onClick={props.savePlace} >Save</button>
                <button className="btn btn-info" data-index={props.index} onClick={props.viewsContent}>View</button>
            </div>
            <h3>{props.title}</h3>
            <h5>{props.authors}</h5>
            <h5><a href={props.previewLink}>Link to {props.title}</a></h5>

            <div className="description-image">
                <img alt={props.title} className="img-fluid" src={props.image} />
                <h5 className="description">{props.description}</h5>
            </div>     
    </div>
);
}

export default Details;