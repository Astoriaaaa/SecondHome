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
                        <div className="boxes-box-priceNsave">
                            <h3 className="boxes-box-price">{info.price}</h3>
                            <button onClick={() => saveListing(info.id)} className="save">SAVE</button>
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
                )
            })}
        </div>
    )

    function saveListing(id)
    {
        console.log(id)

        for(let i=0; i<props.listings.length; i++)
        {
            if(props.listings[i].id === id)
            {
                props.setSaveListings(data => 
                    {
                        return [
                            ...data, {
                                id: id,
                                title: props.listings[i].title, 
                                img: props.listings[i].img,
                                price: props.listings[i].price,
                                details: {
                                rentalType: props.listings[i].details.rentalType,
                                roomNum: props.listings[i].details.roomNum,
                                bathNum: props.listings[i].details.bathNum,
                                maxPeople: props.listings[i].details.maxPeople,
                                websiteURL: props.listings[i].details.websiteURL
                                }
                            }
                        ]
                    }
                )
            }
        }
    }
}