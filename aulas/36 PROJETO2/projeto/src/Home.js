import React from 'react'
import './App.css'

function Home(){
const handleSubmit =()=>{
    localStorage.clear();
    window.location.reload();
}

    return(
        <>
        <h1>ESTÁ É A PÁGINA HOME</h1>
        <button onClick={handleSubmit} id="login">Logout</button>
        </>
    )
}
export default Home