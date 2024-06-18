import React from 'react';
import './Card.css';

const Card = ({ title, content, date, postedBy, status }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span>{date}</span>
        <span className="status">{status}</span>
      </div>
      <h3>{title}</h3>
      <div className="card-content">
        <p>{content}</p>
      </div>
      <div className="card-footer">
        <span>posted by {postedBy}</span>
        <a href="/">Read More</a>
      </div>
    </div>
  );
};

export default Card;
