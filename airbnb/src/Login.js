import react from 'react'
import TwoPages from './TwoPages'
import {BrowserRouter} from "react-router-dom"
export default function Login() {
    
    const [createAccount, setCreateAccount] = react.useState(false)
    const [username, setUserName] = react.useState("")
    const [password, setPassword] = react.useState("")
    const [LoggedIn, SetLoggedIn] = react.useState(false)
    const [LoginMsg, setLoginMsg] = react.useState("")
    const addNewUser = async() => {
        
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Access-Control-Allowed-Origin': "*",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "username": username, "password": password })
        };
        const response = await fetch(`http://localhost:3001/`, requestOptions)
        console.log(response)
            
        SetLoggedIn(true)
    }

    const Authentication = async () => {

        const response = await fetch(`http://localhost:3001/?username=${username}&password=${password}`)
        const data = await response.json()
                
        if (data.msg === "sucess")
        {
            SetLoggedIn(true)
        }
        else {
            setLoginMsg(data.msg)
        }
    }

    return (
        <div>
        {LoggedIn? <BrowserRouter><TwoPages/></BrowserRouter>:
            <div>
                {createAccount? 
                <div>
                    <input onChange={(e) => setUserName(e.target.value)} placeholder="Login-username"></input>
                    <input onChange={(e) => setPassword(e.target.value)} placeholder="Login-password"></input>
                    <button onClick={() => addNewUser()}>create</button>
                </div>
                :
                <div>
                    <input onChange={(e) => setUserName(e.target.value)} placeholder="Login-username"></input>
                    <input onChange={(e) => setPassword(e.target.value)} placeholder="Login-password"></input>
                    <button onClick={() => Authentication()}>login</button>
                    <button onClick={() => setCreateAccount(true)}>createAccount</button>
                    <h2>{LoginMsg}</h2>
                </div>}
            </div>}
            
        </div>

    )
}