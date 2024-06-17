// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, content, date, postedBy, status }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span>{date}</span>
        <span className="posted-by">posted by {postedBy}</span>
        <span className="status">{status}</span>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <button className="read-more">Read More</button>
    </div>
  );
};

export default Card;
