import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dailyremindercard.css';
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const UpcomingBirthdayCard = ({ count, pagination }) => {
    const [birthdays, setBirthdays] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        axios.get('http://localhost:8000/api/birthdays')
            .then(response => {
                const { data } = response;
                const today = new Date();
                
                const sortedBirthdays = data.sort((a, b) => {
                    const dateA = new Date(a.date_of_birth);
                    const dateB = new Date(b.date_of_birth);

                    // Adjust years to the next occurrence of the birthday
                    dateA.setFullYear(today.getFullYear());
                    dateB.setFullYear(today.getFullYear());

                    // If the birthday already passed this year, adjust to next year
                    if (dateA < today) dateA.setFullYear(today.getFullYear() + 1);
                    if (dateB < today) dateB.setFullYear(today.getFullYear() + 1);

                    return dateA - dateB;
                });

                setBirthdays(sortedBirthdays);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(birthdays.length / itemsPerPage)));
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Gösterilecek doğum günü sayısını belirle
    const displayedBirthdays = count ? birthdays.slice(0, count) : birthdays;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPageBirthdays = pagination ? displayedBirthdays.slice(startIndex, startIndex + itemsPerPage) : displayedBirthdays;

    const totalPages = Math.ceil(displayedBirthdays.length / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

    return (
        <div className="daily-reminder-card-frame">
            {currentPageBirthdays.map((birthday) => (
                <div className='daily-reminder-card' key={birthday.id}>
                    <div className='daily-reminder-card-left'>
                        <div className='daily-reminder-card-left-hr'>
                            <p style={{ fontWeight: "700" }}>{birthday.name}</p>
                            <p style={{ color: "gray" }}>{birthday.department}</p>
                        </div>
                    </div>
                    <div className='daily-reminder-card-right' style={{ padding: "5px" }}>
                        <p style={{ color: "gray" }}>{new Date(birthday.date_of_birth).toLocaleDateString()}</p>
                        <AiOutlineClockCircle style={{ color: "gray" }} />
                    </div>
                </div>
            ))}
            {pagination && (
                <div className="pagination">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}><FaArrowLeft/></button>
                    {pageNumbers.map(number => (
                        <button
                            key={number}
                            onClick={() => handlePageClick(number)}
                            className={`page-number ${currentPage === number ? 'active' : ''}`}
                        >
                            {number}
                        </button>
                    ))}
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}><FaArrowRight/></button>
                </div>
            )}
        </div>
    );
};

export default UpcomingBirthdayCard;
