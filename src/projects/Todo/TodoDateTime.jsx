import { useEffect,useState } from "react"

export const TodoDateTime=()=>{
    const[dateTime,setdateTime]=useState([]);

    
useEffect(()=>{

    const Interval = setInterval(()=>{
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setdateTime(`${formattedDate} -  ${formattedTime} `)


    },1000)

    return  ()=> clearInterval(Interval)


})


    return(
        <h2 className="date-time">{dateTime}</h2>
    )

}