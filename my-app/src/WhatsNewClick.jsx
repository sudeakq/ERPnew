import React, { useState } from 'react'
import Header  from './Components/Header';
import Sidebar from './Components/Sidebar';
// import Card from './Components/Card';
import ReminderClicked from './Components/ReminderClicked';

function WhatsNewClick() {

  const [selected,setSelected] = useState();

  return(
    <>
      <Header />
      <div className="container">
        <Sidebar {...{}} />
        <main>
          <ReminderClicked />
        </main>
    </div>
    </>

  );
}

export default WhatsNewClick
