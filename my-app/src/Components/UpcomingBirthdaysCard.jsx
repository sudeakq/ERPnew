import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dailyremindercard.css';
import { AiOutlineClockCircle } from "react-icons/ai";

const UpcomingBirthdayCard = ({ count }) => {
    const [birthdays, setBirthdays] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/birthdays')
            .then(response => {
                // Doğum günlerini tarih sırasına göre sırala
                const sortedBirthdays = response.data.sort((a, b) => new Date(a.birthday_date) - new Date(b.birthday_date));
                setBirthdays(sortedBirthdays);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    // Gösterilecek doğum günü sayısını belirle
    const displayedBirthdays = count ? birthdays.slice(0, count) : birthdays;

    return (
        <div className="daily-reminder-card-frame">
            {displayedBirthdays.map((birthday) => (
                <div className='daily-reminder-card' key={birthday.id}>
                    <div className='daily-reminder-card-left'>
                        <div className='daily-reminder-card-left-hr'>
                            <p style={{ fontWeight: "700" }}>{birthday.name}</p>
                            <p style={{ color: "gray" }}>{birthday.department}</p>
                        </div>
                    </div>
                    <div className='daily-reminder-card-right' style={{ padding: "5px" }}>
                        <p style={{ color: "gray" }}>{new Date(birthday.birthday_date).toLocaleDateString()}</p>
                        <AiOutlineClockCircle style={{ color: "gray" }} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UpcomingBirthdayCard;
