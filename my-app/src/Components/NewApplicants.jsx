import React, { useState } from 'react';
import axios from 'axios';

import { ApplicantsContainer } from './NewApplicants.style';

function NewApplicants() {
  const [applicants, setApplicants] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    status: '',
    department: '',
    progressDate: '',
  });

  useState(() => {
    axios.get('http://localhost:5000/api/applicants')
      .then(response => {
        setApplicants(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the applicants!', error);
      });
  }, []);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/applicants', formData)
      .then(response => {
        setApplicants([...applicants, response.data]);
        closePopup();
      })
      .catch(error => {
        console.error('There was an error creating the applicant!', error);
      });
  };

  return (
    <ApplicantsContainer>
      <headerk>
        <h1>Applicants List</h1>
        <div className="headerk-actions">
          <input type="text" placeholder="Sort by:" />
          <button>CSV Import</button>
          <button onClick={openPopup}>Add Candidate</button>
        </div>
      </headerk>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Applicant</th>
            <th>Progress Date</th>
            <th>Department</th>
            <th>Position</th>
            <th>Progress</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Lucille Nawa</td>
            <td>25/08/2021</td>
            <td>ICT</td>
            <td>Fullstack Developer</td>
            <td>---</td>
            <td><span className="status pending">Pending</span></td>
            <td><button className="action-btn">...</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Klara Tlaskalova</td>
            <td>20/08/2021</td>
            <td>Human Resource Management</td>
            <td>HR Personnel</td>
            <td>HR Interview</td>
            <td><span className="status pending">Pending</span></td>
            <td><button className="action-btn">...</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Vanessa Vimbainashe</td>
            <td>15/08/2021</td>
            <td>Project Management</td>
            <td>Business Lawyer</td>
            <td>CEO Interview</td>
            <td><span className="status on-board">On-Board</span></td>
            <td><button className="action-btn">...</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Chidiebube Samuel</td>
            <td>17/08/2021</td>
            <td>ICT</td>
            <td>UX Designer</td>
            <td>Acceptance Letter</td>
            <td><span className="status rejected">Rejected</span></td>
            <td><button className="action-btn">...</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Adriana Goncalves</td>
            <td>01/08/2021</td>
            <td>Project Management</td>
            <td>European Project Manager</td>
            <td>New Applicant</td>
            <td><span className="status accepted">Accepted</span></td>
            <td><button className="action-btn">...</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Katerina Svarcova</td>
            <td>12/08/2021</td>
            <td>Human Resource Management</td>
            <td>HR Personnel</td>
            <td>Waiting for Grant</td>
            <td><span className="status pending">Pending</span></td>
            <td><button className="action-btn">...</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Ekin Uslu</td>
            <td>26/08/2021</td>
            <td>Business and Data Analysis</td>
            <td>Data Analyst</td>
            <td>Learning Agreement</td>
            <td><span className="status accepted">Accepted</span></td>
            <td><button className="action-btn">...</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Oladimeji Aremu</td>
            <td>22/08/2021</td>
            <td>ICT</td>
            <td>Front-End Developer</td>
            <td>Accepted</td>
            <td><span className="status ending">Ending</span></td>
            <td><button className="action-btn">...</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Julia Wielgus</td>
            <td>25/08/2021</td>
            <td>Project Management</td>
            <td>Business Project Management</td>
            <td>Rejected</td>
            <td><span className="status accepted">Accepted</span></td>
            <td><button className="action-btn">...</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Michael Johnson</td>
            <td>19/08/2021</td>
            <td>Finance</td>
            <td>Financial Analyst</td>
            <td>Final Interview</td>
            <td><span className="status pending">Pending</span></td>
            <td><button className="action-btn">...</button></td>
          </tr>
        </tbody>
      </table>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Add Candidate</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </label>
              <label>
                Position:
                <input type="text" name="position" value={formData.position} onChange={handleChange} />
              </label>
              <label>
                Status:
                <input type="text" name="status" value={formData.status} onChange={handleChange} />
              </label>
              <label>
                Department:
                <input type="text" name="department" value={formData.department} onChange={handleChange} />
              </label>
              <label>
                Progress Date:
                <input type="date" name="progressDate" value={formData.progressDate} onChange={handleChange} />
              </label>
              <button type="submit">Submit</button>
              <button type="button" onClick={closePopup}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </ApplicantsContainer>
  );
}

export default NewApplicants;
