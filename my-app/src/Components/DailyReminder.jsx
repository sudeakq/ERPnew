// src/components/DailyReminder.js
import React from 'react';
import Card from './Card';
import './DailyReminder.css';

const DailyReminder = () => {
  return (
    <section className="daily-reminder">
      <h2>What's New</h2>
      <button class="edit-button">✎ffffff</button>
      <div className="cards">
        <Card
          title="HR Presentation"
          content="HR"
          date="Tomorrow"
          postedBy="Antonio Gallo"
          status="Upcoming"
        />
        <Card
          title="HR Interview: Wilson"
          content="HR"
          date="10 September 2021"
          postedBy="Zeynep"
          status="Upcoming"
        />
        <Card
          title="HR Interview: Samara"
          content="HR"
          date="10 September 2021"
          postedBy="Joshua"
          status="Upcoming"
        />
      </div>
    </section>
  );
};

export default DailyReminder;
