import React, { useEffect } from 'react';
import './upcomingarrivalcard.css';
import { AiOutlineClockCircle } from "react-icons/ai";
import dayjs from 'dayjs';

const UpcomingArrivalCard = ({ entries = [], limit }) => {
    // Verileri tarihe göre sıralayın, en yakın tarih en başta olacak şekilde
    const sortedEntries = entries.sort((a, b) => dayjs(a.date).isAfter(dayjs(b.date)) ? 1 : -1);
    const displayedEntries = limit ? sortedEntries.slice(0, limit) : sortedEntries;

    return (
      <div className="daily-reminder-card-frame">
        {displayedEntries.map((entry, index) => (
          <div className='daily-reminder-card' key={index}>
            <div className='daily-reminder-card-left'>
              <div className='daily-reminder-card-left-hr'>
                <p style={{ fontWeight: "700" }}>{entry.name} {entry.surname}</p>
                <p style={{ color: "gray" }}>{entry.department}</p>
              </div>
            </div>
            <div className='daily-reminder-card-middle' style={{ padding: "5px" }}>
              <p style={{ color: "gray" }}>{entry.status}</p>
            </div>
            <div className='daily-reminder-card-right' style={{ padding: "5px" }}>
              <p style={{ color: "gray" }}>
                {entry.date ? dayjs(entry.date).format('DD MMMM') : 'N/A'}
              </p>
              <AiOutlineClockCircle style={{ color: "gray" }} />
            </div>
          </div>
        ))}
      </div>
    );
};

export default UpcomingArrivalCard;
