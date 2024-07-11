import React, { useEffect, useState }  from "react";
import './ApllicantForm.css';
import axios from "axios";

function ApplicantsForms(){
  
  const [selectedCountry,setSelectedCountry] = useState("Country");
  const [selectedDepartment,setSelectedDepartment] = useState("Department");
  const [selectedPosition,setSelectedPosition] = useState("Position");
  const [selectedApartment,setSelectedApartment] = useState("Apartment");
  const [selectedRoom,setSelectedRoom] = useState("Room");
  const [selectedInterviewer,setSelectedInterviewer] = useState("Interviewer");
  const [selectedStatus,setSelectedStatus] = useState("Status");
  
  const [apartments,setApartments] = useState([
    "Apartment"
  ])

  const [rooms,setRoom] = useState([
    "Room"
  ])

  const [countries,setCountries] = useState([
    "Country",
    "America",
    "Italy",
    "Germany",
    "Russia",
    "Turkey",
    "Poland",
    "Japan",
    "Spain",
    "France"
  ]);

  const [departments,setDepartments] = useState([
    "Department",
    "HR",
    "IT"
  ]);

  const [positions,setPositions] = useState([
    "Position",
  ]);

  const [interviewers,setInterviewers] = useState([
    "Interviewer"
  ]);

  const [status,setStatus] = useState([
    "Status",
    "Working",
    "Done"
  ]);

  const [formData,setFormData] = useState({
    "name" : "",
    "surName" : "",
    "status" : 1,
    "phone" : "",
    "email" : "",
    "dateOfBirth" : "",
    "healthIssues" : "",
    "internshipInfo" : {
      "applicationDate" : "",
      "department" : "",
      "position" : "",
      "startDate" : "",
      "endDate" : "",
      "arrival" : "",
    },
    "coordinator" : {
      "name" : "",
      "email" : "",
      "phone" : "",
    },
    "interviews" : {
      "dateTime" : "",
      "interviewer" : "",
      "notes" : ""
    },
    "studentInfo" : {
      "country" : selectedCountry,
      "institution" : "",
    },
    "housing" : {
      "apartment" : "",
      "room" : "",
    },
  });

  const handleChangeSelected = (e,setSelectedData)=>{
    
    setSelectedData(e.target.value);

  }

  const handleAdd = async () => {
    try {
      const {data} = await axios.post("http://localhost:8000/api/students",{
        "application_date": formData.internshipInfo.applicationDate,
        "start_date": formData.internshipInfo.startDate,
        "end_date": formData.internshipInfo.endDate,
        "arrival_id": 1,
        "status_id": 1,
        "positions_id": 1,
        "name": formData.name,
        "surname": formData.surName,
        "phone_number": formData.phone,
        "sex": "Male",
        "country": selectedCountry,
        "institution": formData.studentInfo.institution,
        "nationality": formData.studentInfo.country,
        "departments_id": 1,
        "email": formData.email,
        "date_of_birth": formData.dateOfBirth,
        "coordinators_id": 1,
        "rooms_id": 1,
        "health_issues": "None"
    });
      
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="application-form">
    <div className="section">
      <div className="field">
        <label>Name</label>
        <input 
          name="name" 
          type="text" 
          value={formData.name} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            "name" : e.target.value
        }))}
        placeholder="Enter name" 
        />
      </div>
      <div className="field">
        <label>Surname</label>
        <input
          name="surName" 
          type="text" 
          value={formData.surName} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            [e.target.name] : e.target.value
          }))} 
          placeholder="Enter surname" 
        />
      </div>
      <div className="field">
        <label>Status</label>
        <select onChange={(e)=>handleChangeSelected(e,setSelectedStatus)}>
          {status.map(status=>{
            return (
              <option>{status}</option>
            )
          })}
        </select>
      </div>
      <div className="field">
        <label>Phone</label>
        <input
          name="phone" 
          type="text" 
          value={formData.phone} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            [e.target.name] : e.target.value
          }))} 
          placeholder="Enter phone" 
        />
      </div>
      <div className="field">
        <label>Email</label>
        <input
          name="email" 
          type="email" 
          value={formData.email} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            [e.target.name] : e.target.value
          }))}  
          placeholder="Enter email" 
        />
      </div>
      <div className="field">
        <label>Date of birth</label>
        <input
          name="dateOfBirth" 
          type="date" 
          value={formData.dateOfBirth} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            [e.target.name] : e.target.value
          }))}   
          placeholder="DD/MM/YYYY" 
        />
      </div>
      <div className="field">
        <label>Health Issues</label>
        <input
          name="healthIssues" 
          type="string" 
          value={formData.healthIssues} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            [e.target.name] : e.target.value
          }))}   
          placeholder="Health Issues" 
        />
      </div>
    </div>

    <div className="section">
      <h3>Student info:</h3>
      <div className="field">
        <label>Country</label>
        <select onChange={(e)=>handleChangeSelected(e,setSelectedCountry)} >
          {countries.map(country=> {
            return (
              <option key={country} value={country} >{country}</option>
            )
          })}
        </select>
      </div>
      <div className="field">
        <label>Institution</label>
        <input
          name="institution" 
          type="text" 
          value={formData.studentInfo.institution} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            studentInfo : {
              ...v.studentInfo,
              [e.target.name] : e.target.value
            }
          }))} 
          placeholder="Institution" 
        />
      </div>
    </div>

    <div className="section">
      <h3>Internship info:</h3>
      <div className="field">
        <label>Application date</label>
        <input
          name="applicationDate" 
          type="date" 
          value={formData.internshipInfo.applicationDate} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            internshipInfo : {
              ...v.internshipInfo,
              [e.target.name] : e.target.value
            }
          }))}  
          placeholder="DD/MM/YYYY" 
        />
      </div>
      <div className="field">
        <label>Department</label>
        <select onChange={(e)=>handleChangeSelected(e,setSelectedDepartment)} >
          {departments.map(department=>{
            return (
              <option>{department}</option>
            )
          })}
        </select>
      </div>
      <div className="field">
        <label>Position</label>
        <select onChange={(e)=>handleChangeSelected(e,setSelectedPosition)} >
          {positions.map(position=>{
            return (
              <option>{position}</option>
            )
          })}
        </select>
      </div>
      <div className="field">
        <label>Start Date</label>
        <input
          name="startDate" 
          type="date" 
          value={formData.internshipInfo.startDate} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            internshipInfo : {
              ...v.internshipInfo,
              [e.target.name] : e.target.value
            }
          }))}  
          placeholder="DD/MM/YYYY" 
        />
      </div>
      <div className="field">
        <label>End date</label>
        <input
          name="endDate" 
          type="date" 
          value={formData.internshipInfo.endDate} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            internshipInfo : {
              ...v.internshipInfo,
              [e.target.name] : e.target.value
            }
          }))}  
          placeholder="DD/MM/YYYY" 
        />
      </div>
      <div className="field">
        <label>Arrival</label>
        <input
          name="arrival" 
          type="date" 
          value={formData.internshipInfo.arrival} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            internshipInfo : {
              ...v.internshipInfo,
              [e.target.name] : e.target.value
            }
          }))}  
          placeholder="DD/MM/YYYY" 
        />
      </div>
    </div>

    <div className="section">
      <h3>Housing :</h3>
      <div className="field">
        <label>Apartment</label>
        <select onChange={(e)=>handleChangeSelected(e,setSelectedApartment)} >
          {apartments.map(apartment=>{
            return (
              <option>{apartment}</option>
            )
          })}
        </select>
      </div>
      <div className="field">
        <label>Room</label>
        <select onChange={(e)=>handleChangeSelected(e,setSelectedRoom)} >
          {rooms.map(room=>{
            return (
              <option>{room}</option>
            )
          })}
        </select>
      </div>
    </div>

    <div className="section">
      <h3>Coordinator:</h3>
      <div className="field">
        <label>Name</label>
        <input
          name="name" 
          type="text" 
          value={formData.coordinator.name} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            coordinator : {
              ...v.coordinator,
              [e.target.name] : e.target.value
            }
          }))} 
          placeholder="Name" 
        />
      </div>
      <div className="field">
        <label>Email</label>
        <input 
          name="email"  
          type="email"
          value={formData.coordinator.email} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            coordinator : {
              ...v.coordinator,
              [e.target.name] : e.target.value
            }
          }))} 
          placeholder="Email" 
        />
      </div>
      <div className="field">
        <label>Phone</label>
        <input
          name="phone" 
          type="text" 
          value={formData.coordinator.phone} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            coordinator : {
              ...v.coordinator,
              [e.target.name] : e.target.value
            }
          }))} 
          placeholder="Phone" 
        />
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
        <input 
          name="dateTime" 
          type="date" 
          value={formData.interviews.dateTime} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            interviews : {
              ...v.interviews,
              [e.target.name] : e.target.value
            }
          }))}
        placeholder="DD/MM/YYYY" />
      </div>
      <div className="field">
        <label>Interviewer</label>
        <select onChange={(e)=>handleChangeSelected(e,setSelectedInterviewer)} >
          {interviewers.map(interviewer=>{
            return (
              <option>{interviewer}</option>
            )
          })}
        </select>
      </div>
      <div className="field">
        <label>Notes</label>
        <input
          name="notes" 
          type="text" 
          value={formData.interviews.notes} 
          onChange={(e)=>setFormData(v=>({
            ...v,
            interviews : {
              ...v.interviews,
              [e.target.name] : e.target.value
            }
          }))}
          placeholder="Notes" 
        />
      </div>
      <div className="field">
        <button onClick={handleAdd} type="button" className="add-button">Hello + Add</button>
      </div>
    </div>
  </form>
  );
}

export default ApplicantsForms