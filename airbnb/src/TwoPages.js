import React from "react";
import Apps from "./App"
import Save from "./Save"
import {Link, Route, Routes} from "react-router-dom"

export default function TwoPages()
{
    const [saveListings, setSaveListings] = React.useState([])
    const [onSearch, setOnsearch] = React.useState("on")
    const [onSave, setOnSave] = React.useState("")
    

    function flipSearchButton()
    {
        setOnSave("")
        setOnsearch("on")
    }
    function flipSaveButton()
    {
        setOnsearch("")
        setOnSave("on")
    }
    return (
        <div>
            <nav>
                <Link onClick={flipSearchButton} className={`search${onSearch}`} to="/">search</Link>
                <Link onClick={flipSaveButton} className={`saved${onSave}`} to="/Save">saved</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Apps setListings={setSaveListings} />}/>
                <Route path="/Save" element={<Save 
                setSaveListings={setSaveListings} 
                saveListing={saveListings}

                />}/>
            </Routes>

            
        </div>
        
    )
}