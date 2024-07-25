import React, { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Components/Header.css';
import Bill from './Components/Bill';
import BillData from './Components/BillData';
import { useParams } from 'react-router-dom';

function Bills() {

  const [selected,setSelected] = useState("Bills")

  const {id} = useParams();

  if(!id)
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{selected,setSelected}} />
        <main>
          <BillData />
        </main>
      </div>
    </>
  )
  else return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{selected,setSelected}} />
        <main>
          <Bill /> 
        </main>
      </div>
    </>
  )
}

export default Bills
