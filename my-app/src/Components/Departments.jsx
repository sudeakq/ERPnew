import React from 'react';
import { DepartmantsContainer } from './Departments.style';
import { useNavigate } from 'react-router-dom';

function Departments() {

  const navigate = useNavigate();

  return (
    <DepartmantsContainer>
        <div className="title" onClick={()=>navigate('workers')} >
          <h4>MEET THE TEAMS</h4>
        </div>
        <div className="grid">
          <div className="card" onClick={()=>navigate('/workers')} >    
            <h2>HR</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card" onClick={()=>navigate('/workers')} >    
            <h2>HR</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card" onClick={()=>navigate('/workers')} >    
            <h2>HR</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card" onClick={()=>navigate('/workers')} >    
            <h2>HR</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card" onClick={()=>navigate('/workers')} >    
            <h2>HR</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card" onClick={()=>navigate('/workers')} >    
            <h2>HR</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card" onClick={()=>navigate('/workers')} >    
            <h2>HR</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card" onClick={()=>navigate('/workers')} >    
            <h2>HR</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card" onClick={()=>navigate('/workers')} >    
            <h2>HR</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
    </DepartmantsContainer>
  );
}

export default Departments;