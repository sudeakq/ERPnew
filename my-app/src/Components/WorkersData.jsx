import React from 'react'
import { WorkersDataContainer } from './WorkersData.style'
import workerImage1 from '../images/worker1.png'
import workerImage2 from '../images/worker2.png'
import workerImage3 from '../images/worker3.png'

function WorkersData() {
  return (
    <WorkersDataContainer>
    <div className="title">
      <h4>MEET THE TEAMS</h4>
    </div>
    <div className="grid">
      <div className="card">    
        <div>
            <img src={workerImage1} alt="" className="image" />
        </div>
        <p>Name : <span className='name' >Joey Morgan</span> </p>
        <p>Position : <span className='name' >Developer</span> </p>
      </div>
      <div className="card">
        <div>
            <img src={workerImage2} alt="" className="image" />
        </div>    
        <p>Name : <span className='name' >Anna</span> </p>
        <p>Position : <span className='name' >Full Stack</span> </p>
      </div>
      <div className="card">    
        <div>
            <img src={workerImage3} alt="" className="image" />
        </div>
        <p>Name : <span className='name' >John Smith</span> </p>
        <p>Position : <span className='name' >Front End</span> </p>
      </div>
      <div className="card">    
        <div>
            <img src={workerImage1} alt="" className="image" />
        </div>
        <p>Name : <span className='name' >Joey Morgan</span> </p>
        <p>Position : <span className='name' >Developer</span> </p>
      </div>
      <div className="card">
        <div>
            <img src={workerImage2} alt="" className="image" />
        </div>    
        <p>Name : <span className='name' >Anna</span> </p>
        <p>Position : <span className='name' >Full Stack</span> </p>
      </div>
      <div className="card">    
        <div>
            <img src={workerImage3} alt="" className="image" />
        </div>
        <p>Name : <span className='name' >John Smith</span> </p>
        <p>Position : <span className='name' >Front End</span> </p>
      </div>
    </div>
</WorkersDataContainer>
  )
}

export default WorkersData