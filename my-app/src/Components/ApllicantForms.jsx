import React  from "react";
import './ApllicantForm.css';

function ApplicantsForms(){


  return (
    <form className="application-form">
    <div className="section">
      <div className="field">
        <label>Name</label>
        <input type="text" placeholder="Enter name" />
      </div>
      <div className="field">
        <label>Status</label>
        <select>
          <option>Status</option>
        </select>
      </div>
      <div className="field">
        <label>Surname</label>
        <input type="text" placeholder="Enter surname" />
      </div>
      <div className="field">
        <label>Phone</label>
        <input type="text" placeholder="Enter phone" />
      </div>
      <div className="field">
        <label>Email</label>
        <input type="email" placeholder="Enter email" />
      </div>
      <div className="field">
        <label>Date of birth</label>
        <input type="date" placeholder="DD/MM/YYYY" />
      </div>
    </div>

    <div className="section">
      <h3>Student info:</h3>
      <div className="field">
        <label>Country</label>
        <select>
          <option>Country</option>
        </select>
      </div>
      <div className="field">
        <label>Institution</label>
        <input type="text" placeholder="Institution" />
      </div>
    </div>

    <div className="section">
      <h3>Internship info:</h3>
      <div className="field">
        <label>Application date</label>
        <input type="date" placeholder="DD/MM/YYYY" />
      </div>
      <div className="field">
        <label>Department</label>
        <select>
          <option>Department</option>
        </select>
      </div>
      <div className="field">
        <label>Position</label>
        <select>
          <option>Position</option>
        </select>
      </div>
      <div className="field">
        <label>Start Date</label>
        <input type="date" placeholder="DD/MM/YYYY" />
      </div>
      <div className="field">
        <label>End date</label>
        <input type="date" placeholder="DD/MM/YYYY" />
      </div>
      <div className="field">
        <label>Arrival</label>
        <input type="date" placeholder="DD/MM/YYYY" />
      </div>
    </div>

    <div className="section">
      <h3>Housing :</h3>
      <div className="field">
        <label>Apartment</label>
        <select>
          <option>Apartment</option>
        </select>
      </div>
      <div className="field">
        <label>Room</label>
        <select>
          <option>Room</option>
        </select>
      </div>
    </div>

    <div className="section">
      <h3>Coordinator:</h3>
      <div className="field">
        <label>Name</label>
        <input type="text" placeholder="Name" />
      </div>
      <div className="field">
        <label>Email</label>
        <input type="email" placeholder="Email" />
      </div>
      <div className="field">
        <label>Phone</label>
        <input type="text" placeholder="Phone" />
      </div>
    </div>

    <div className="section">
      <h3>Documents:</h3>
      <div className="field">
        <button type="button" className="add-button">+ Add</button>
      </div>
    </div>

    <div className="section">
      <h3>Interviews:</h3>
      <div className="field">
        <label>Date Time</label>
        <input type="date" placeholder="DD/MM/YYYY" />
      </div>
      <div className="field">
        <label>Interviewer</label>
        <select>
          <option>Interviewer</option>
        </select>
      </div>
      <div className="field">
        <label>Notes</label>
        <input type="text" placeholder="Notes" />
      </div>
      <div className="field">
        <button type="button" className="add-button">+ Add</button>
      </div>
    </div>
  </form>
  );
}

export default ApplicantsForms