import React, { useEffect, useState } from 'react';
import { BillsContainer } from './Bills.style';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
      
  function Bill() {

    const {id} = useParams();

    const [studentsData,setStudentsData] = useState([]);

    const [totalBills,setTotalBills] = useState({
      internet : 0,
      electric : 0,
      gas : 0,
      water : 0
    });

    const navigate = useNavigate();

    useEffect(()=>{

      let totalInternet = 0
      let totalGas = 0
      let totalWater = 0
      let totalElectric = 0

      studentsData.forEach(student=>totalInternet += student.bill.internet_price)
      studentsData.forEach(student=>totalGas += student.bill.gas_price)
      studentsData.forEach(student=>totalWater += student.bill.water_price)
      studentsData.forEach(student=>totalElectric += student.bill.electricity_price)

      setTotalBills(v=>({
        ...v,
        internet : totalInternet,
        gas : totalGas,
        water : totalWater,
        electric : totalElectric
      }))

    },[studentsData])

    useEffect(()=>{
      console.log(studentsData)
    },[studentsData])

    useEffect(()=>{

      (async ()=> {
        try {
          const response = await axios.get(`http://localhost:8000/api/students/apartment/${id}`)

          if(response.status){
            if(!response.data[0].apartment.is_visible) navigate("/bills");
            setStudentsData(response.data);
          }

        } catch (error) {
          console.log(error)
        }

      })()

    },[]);

    if(id && studentsData.length) 
      return (
        <BillsContainer>
        <div className="expenses-container">
          <div className="left-panel">
            <div className="expenses-header">
              <h1>Expenses {studentsData[0].apartment.name}</h1>
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
              <p className="sum-header">The sum of {studentsData[0].apartment.name} house</p>
              <div className="expenses-list">
                <div className="expense-item">
                  <div className="expense-icon electricity"></div>
                  <div className="expense-details">
                    <p className="expense-name">Electricity</p>
                    <p className="expense-time">5:12 pm • Belanja di pasar</p>
                  </div>
                  <p className="expense-amount">-{totalBills.electric.toFixed(2)}</p>
                </div>
                <div className="expense-item">
                  <div className="expense-icon water"></div>
                  <div className="expense-details">
                    <p className="expense-name">Water</p>
                    <p className="expense-time">5:12 pm • Naik bus umum</p>
                  </div>
                  <p className="expense-amount">-{totalBills.water.toFixed(2)}</p>
                </div>
                <div className="expense-item">
                  <div className="expense-icon gas"></div>
                  <div className="expense-details">
                    <p className="expense-name">Gas</p>
                    <p className="expense-time">5:12 pm • Bayar Listrik</p>
                  </div>
                  <p className="expense-amount">-{totalBills.gas.toFixed(2)}</p>
                </div>
                <div className="expense-item">
                  <div className="expense-icon internet"></div>
                  <div className="expense-details">
                    <p className="expense-name">Internet</p>
                    <p className="expense-time">5:12 pm • Bayar Listrik</p>
                  </div>
                  <p className="expense-amount">-{totalBills.internet.toFixed(2)}</p>
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
                    <div className="filled-bar" style={{ width: `${(person.bill.total_price / 10)}%` }}></div>
                  </div>
                  <p className="payment-amount">{person.bill.total_price.toLocaleString()}</p>
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
      
