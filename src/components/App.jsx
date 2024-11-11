import { useEffect, useState } from "react";
export default function App(){
    const [message, setMessage] = useState("");
    useEffect(()=>{
        (async ()=>{
            const response = await fetch("/.netlify/functions/Hello");
            const data = await response.json();
            setMessage(data.message);
        })();
    },[]);
    return(
        <div>
            <h1>{message}</h1>
        </div>
    )
}