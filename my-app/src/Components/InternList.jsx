import React, { useState } from "react";
import "./InternList.css";


function InternLists() {

  const [selectedTab,setSelectedTab] = useState('OnGoing')

  const [HRCount,setHRCount] = useState(3);
  const [ICTCount,setICTCount] = useState(6);
  const [marketingCount,setMarketingCount] = useState(5)
  const [BACount,setBACount] = useState(5)
  const [PMCount,setPMCount] = useState(5)
  const [LanTeachingCount,setLanTeachingCount] = useState(1)

  return (
    <>
      <div className="total-container">
      <div className="headeor-list">
        <div className="title-container">
          <h1>Intern List</h1>
        </div>
        <div className="headeor-icons">
          <div className="icon-button-container" >
            <i style={{color : "#9D99C4"}} class="users-icon fa-solid fa-user-group"></i>
            <button>Human Resource<br /> {HRCount} </button>
          </div>
          <div className="icon-button-container" >
            <i style={{color : "#72DF76"}} class="users-icon fa-solid fa-user-group"></i>
            <button>ICT<br /> {ICTCount} </button>
          </div>
          <div className="icon-button-container" >
            <i style={{color : "#F2B05C"}} class="users-icon fa-solid fa-user-group"></i>
            <button>Marketing<br /> {marketingCount} </button>
          </div>
          <div className="icon-button-container" >
            <i style={{color : "#E96168"}} class="users-icon fa-solid fa-user-group"></i>
            <button>Business & Analysis<br /> {BACount} </button>
          </div>
          <div className="icon-button-container" >
            <i style={{color : "#6461E9"}} class="users-icon fa-solid fa-user-group"></i>
            <button>Project Management<br /> {PMCount} </button>
          </div>
          <div className="icon-button-container" >
            <i style={{color : "#A86108"}} class="users-icon fa-solid fa-user-group"></i>
            <button>Language Teaching<br /> {LanTeachingCount} </button>
          </div>
        </div>
      </div>
      <div className="tab-search-container">
        <div className="inner-container">
          <div className="tabs">
            <div onClick={()=>setSelectedTab('OnGoing')} className={`tab ${ selectedTab === "OnGoing" ? "tab-active" : "" }`} >Ongoing</div>
            <div onClick={()=>setSelectedTab('Finished')} className={`tab ${ selectedTab === "Finished" ? "tab-active" : "" }`} >Finished</div>
            <div onClick={()=>setSelectedTab('Terminated')} className={`tab ${ selectedTab === "Terminated" ? "tab-active" : "" }`} >Terminated</div>
            <div onClick={()=>setSelectedTab('All')} className={`tab ${ selectedTab === "All" ? "tab-active" : "" }`} >All</div>
          </div>
          <input className="search-input" type="text" placeholder="Search by Name" />
        </div>
      </div>
      <div className="filters">
        <div>
          <label><input type="checkbox" /> Human Resource</label>
          <label><input type="checkbox" /> ICT</label>
          <label><input type="checkbox" /> Marketing</label>
          <label><input type="checkbox" /> Business & Analysis</label>
          <label><input type="checkbox" /> Project Management</label>
          <label><input type="checkbox" /> Language Teaching</label>
        </div>
        
      </div>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Inhouse Interview</th>
            <th>Status</th>
            <th>Department</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hatice Cetindere</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Project Management</td>
            <td>EU Proj. Mgr</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
              <button>More</button>
            </td>
          </tr>
          <tr>
            <td>Julia Wielgus</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Project Management</td>
            <td>Business Proj. Mgr</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
              <button>More</button>
            </td>
          </tr>
          <tr>
            <td>Fidelix Ayobami</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Project Management</td>
            <td>Business Proj. Mgr</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
              <button>More</button>
            </td>
          </tr>
          <tr>
            <td>Ekin Uslu</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Business & Analysis</td>
            <td>Data Analyst</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
              <button>More</button>
            </td>
          </tr>
          <tr>
            <td>Daniil Podtesov</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Business & Analysis</td>
            <td>Data Analyst</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
              <button>More</button>
            </td>
          </tr>
          <tr>
            <td>Dominic Sibuisso</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Business & Analysis</td>
            <td>Business Lawyer</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
              <button>More</button>
            </td>
          </tr>
          <tr>
            <td>Nida Oral</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Marketing</td>
            <td>Social Media Mgr</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
              <button>More</button>
            </td>
          </tr>
          <tr>
            <td>Metehan Duzcan</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Marketing</td>
            <td>Content Creator</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
              <button>More</button>
            </td>
          </tr>
          <tr>
            <td>Oyku Dilekci</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Marketing</td>
            <td>Copywriter</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
              <button>More</button>
            </td>
          </tr>
          <tr>
            <td>Katerina Svarcova</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Human Resources</td>
            <td>HR Personnel</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
              <button>More</button>
            </td>
          </tr>
          <tr>
            <td>Marvellous Oseyemi</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Human Resources</td>
            <td>HR Personnel</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
              <button>More</button>
            </td>
          </tr>
          <tr>
            <td>Ebube Samuel</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>ICT</td>
            <td>UX Designer</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
              <button>More</button>
            </td>
          </tr>
          <tr>
            <td>Deji Aremu</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>ICT</td>
            <td>Back-End Dev</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
              <button>More</button>
            </td>
          </tr>
          <tr>
            <td>Sergiu Mateiu</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>ICT</td>
            <td>Fullstack Dev</td>
            <td className="action">
              <button>Edit</button>
              <button>Delete</button>
              <button>More</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}

export default InternLists;
