import React from "react";

export default function Saved(props)
{
    function deleteListing(id)
    {
        props.setSaveListings(prev => {
            return prev.filter(item => item.id!== id)
        })
        
    }

    return (
        <div>
            {props.saveListing.map( info => 
                { return (
                    <div className="boxes">
                        <div className="boxes-box">
                            <h2 className="boxes-box-tittle">{info.title}</h2>
                            <img className="boxes-box-img" src={info.img}/>
                            <div className="boxes-box-priceNsave">
                                <h3 className="boxes-box-price">{info.price}</h3>
                                <button onClick={()=> deleteListing(info.id)} className="save">UNSAVE</button>
                            </div>
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
                    </div>)}
            )}

        </div>
    )
}