import React from "react";
import style from "./App.css"

export default function Properties(props)
{
    return(
        <div className="boxes">
            {props.listings.map(info => {
                return (
                    <div className="boxes-box">
                        <h2 className="boxes-box-tittle">{info.title}</h2>
                        <img className="boxes-box-img" src={info.img}/>
                        <h3 className="boxes-box-price">{info.price}</h3>
                        <ul className="boxes-box-details">
                            <li className="details">Property Type: {info.details.rentalType}</li>
                            <li className="details">Bedrooms: {info.details.roomNum}</li>
                            <li className="details">Bathrooms: {info.details.bathNum}</li>
                            <li className="details">Max People: {info.details.maxPeople}</li>
                            <li className="details">
                                <a target="_blank" href={info.details.websiteURL}>
                                more info
                                </a>
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}