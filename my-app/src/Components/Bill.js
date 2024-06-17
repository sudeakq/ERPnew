import React from "react";
import './Bill.css';

function Bill(){


  return (
    <>
      {/* <div className="expenses-container">
      <div className="left-panel">
        <div className="expenses-header">
          <h1>Expenses Ferraro</h1>
          <div className="header-icons">
            <img src="user1.jpg" alt="User 1" />
            <img src="user2.jpg" alt="User 2" />
            <img src="user3.jpg" alt="User 3" />
            <button className="add-user">+</button>
          </div>
        </div>
        <p className="date-range">01 - 25 March, 2020</p>
        <div className="chart"></div>
        <div className="sum-section">
          <p className="sum-header">The sum of Ferraro house</p>
          <div className="expenses-list">
            <div className="expense-item">
              <div className="expense-icon electricity"></div>
              <div className="expense-details">
                <p className="expense-name">Electricity</p>
                <p className="expense-time">5:12 pm • Belanja di pasar</p>
              </div>
              <p className="expense-amount">-326.800</p>
            </div>
            <div className="expense-item">
              <div className="expense-icon water"></div>
              <div className="expense-details">
                <p className="expense-name">Water</p>
                <p className="expense-time">5:12 pm • Naik bus umum</p>
              </div>
              <p className="expense-amount">-15.000</p>
            </div>
            <div className="expense-item">
              <div className="expense-icon gas"></div>
              <div className="expense-details">
                <p className="expense-name">Gas</p>
                <p className="expense-time">5:12 pm • Bayar Listrik</p>
              </div>
              <p className="expense-amount">-185.750</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-panel">
        <div className="payment-summary">
          <p className="summary-header">
            What each one has to pay?
            <button className="edit-button">✎</button>
          </p>
          {[
            { name: 'Guillermo', amount: 872400 },
            { name: 'Oscar', amount: 1378200 },
            { name: 'Manos', amount: 928500 },
            { name: 'Amir', amount: 420700 },
            { name: 'Simon', amount: 520000 },
          ].map((person, index) => (
            <div className="payment-item" key={index}>
              <p className="payment-name">{person.name}</p>
              <div className="payment-bar">
                <div className="filled-bar" style={{ width: `${(person.amount / 1378200) * 100}%` }}></div>
              </div>
              <p className="payment-amount">{person.amount.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="requests">
          <p>Check requests(3)</p>
          <button className="view-requests">VIEW REQUESTS</button>
        </div>
      </div>
    </div> */}
    <div className="teams-container">
      <h2>Meet The Teams</h2>
      <div className="team-grid">
        {Array(9).fill().map((_, index) => (
          <div className="team-member" key={index}>
            <img src="/path/to/your/image.png" alt="Team Member" />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
export default Bill