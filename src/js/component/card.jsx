import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

export const Card = ({ title, description, image }) => {

    return (
        <div className="card-lg text-center m-2" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top img-card img-fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title p-2">{title}</h5>
                <p className="card-text p-2">{description}</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
}