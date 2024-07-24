
import React, { useEffect, useState } from 'react';
import { BillsContainer } from './Bills.style';
import { useParams } from 'react-router-dom';
import axios from 'axios';
      
  function Bill() {

    const {id} = useParams();

    const [billData,setBillData] = useState(null);
    const [studentsData,setStudentsData] = useState([]);

    useEffect(()=>{

      (async ()=> {
        try {
          const response = await axios.get(`http://localhost:8000/api/bills/${id}`)

          if(response.status){
            setBillData(response.data);
          }

        } catch (error) {
          console.log(error)
        }

      })()

    },[]);

    useEffect(()=>{
      console.log(studentsData)
    },[studentsData])

    useEffect(()=>{

      (async ()=> {
        try {
          const response = await axios.get(`http://localhost:8000/api/students/apartment/${billData.apartment.id}`)

          if(response.status){
            setStudentsData(response.data);
          }

        } catch (error) {
          console.log(error)
        }

      })()

    },[billData]);

    useEffect(()=>{
      console.log(billData)
    },[billData])

    if(id && billData && studentsData.length) 
      return (
        <BillsContainer>
        <div className="expenses-container">
          <div className="left-panel">
            <div className="expenses-header">
              <h1>Expenses {billData.apartment.name}</h1>
              <div className="header-icons">
                <img src={`${process.env.PUBLIC_URL}/image17.png`} alt="Team Member" />
                <img src={`${process.env.PUBLIC_URL}/image17.png`} alt="Team Member" />
                <img src={`${process.env.PUBLIC_URL}/image17.png`} alt="Team Member" />
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
                  <p className="expense-amount">-{billData.electricity_price}</p>
                </div>
                <div className="expense-item">
                  <div className="expense-icon water"></div>
                  <div className="expense-details">
                    <p className="expense-name">Water</p>
                    <p className="expense-time">5:12 pm • Naik bus umum</p>
                  </div>
                  <p className="expense-amount">-{billData.water_price}</p>
                </div>
                <div className="expense-item">
                  <div className="expense-icon gas"></div>
                  <div className="expense-details">
                    <p className="expense-name">Gas</p>
                    <p className="expense-time">5:12 pm • Bayar Listrik</p>
                  </div>
                  <p className="expense-amount">-{billData.gas_price}</p>
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
              {studentsData.map((person, index) => (
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
        </div>
        </BillsContainer>
      )
      else return (<div>Loading...</div>) 
  }

export default Bill;
      
