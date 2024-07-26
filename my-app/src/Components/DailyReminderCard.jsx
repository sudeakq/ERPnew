import React, { useEffect, useState } from 'react';
import './dailyremindercard.css';
import { FaCircle } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DailyReminderCard = ({count}) => {

    const [reminders,setReminders] = useState([]);
    const [paginateData,setPaginateData] = useState({});
    const [currentPage,setCurrentPage] = useState(1)

    const navigate = useNavigate();

    useEffect(()=>{
        (async ()=>{
        const response = await axios.get(`http://localhost:8000/api/students/applicant?page=${currentPage}`);
        if(response.status) {
            if(!response.data.data.length) {
                navigate("/daily/reminder/1")
                window.location.reload()
            }
            const data = response.data.data.slice(0,count)
            setPaginateData(response.data)
            setReminders(data.sort((a,b)=>b.progress.date.slice(0,4) - a.progress.date.slice(0,4)))
        } 
        })()
    },[])

    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        if(reminders && reminders.length) 
            setLoading(false)
    },[reminders])

    useEffect(()=>{
        console.log(reminders)
    },[reminders])

    const status = ["Pending","On-Board","Rejected","Accepted","Ending"];

    if(!loading) 
    return (
        <div className="daily-reminder-card-frame">
            {reminders.map((reminder,index)=>{
                const {progress} = reminder
              return (
                <div className='daily-reminder-card'>
                <div className='daily-reminder-card-left'>
                    <FaCircle style={ 
                        progress.status === "Pending" 
                        ? 
                        { color: "yellow", margin: "10px" } 
                        : 
                        progress.status === "On-Board" 
                        ?
                        { color : "blue", margin : "10px"}
                        :
                        progress.status === "Rejected" 
                        ? 
                        { color: "red", margin: "10px" } 
                        :
                        progress.status === "Pending" 
                        ? 
                        { color: "green", margin: "10px" } 
                        :
                        progress.status === "Pending" 
                        ? 
                        { color: "orange", margin: "10px" } 
                        :
                        { color : "gray", margin : "10px" }
                    }
                    ></FaCircle>
                    <div className='daily-reminder-card-left-hr'>
                        <p style={{ fontWeight: "700" }}>{progress.progress}</p>
                        <p style={{ color: "gray" }}>{reminder.name}</p>
                    </div>
                </div>
                <div className='daily-reminder-card-right' style={{ padding: "5px" }}>
                    <p style={{ color: "gray" }}>{progress.date}</p>
                    <AiOutlineClockCircle style={{ color: "gray" }} />
                </div>
            </div>
              )  
            })}
        </div>
    )
    else return (
        <div>Loading..</div>
    )
};

export default DailyReminderCard;
