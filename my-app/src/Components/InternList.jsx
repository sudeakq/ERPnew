import React, { useState } from "react";
import penIcon from "../images/pen.png"
import trashIcon from "../images/trash.png"
import moreIcon from "../images/more-alt.png"
import { InternListContainer } from "./InternList.style";

function InternLists() {

  const [selectedTab,setSelectedTab] = useState('OnGoing')

  const [counts,setCounts] = useState({
    HRCount : 3,
    ICTCount : 6,
    marketingCount : 5,
    BACount : 5,
    PMCount : 5,
    LanTeachingCount : 1
  })

  const [selectedButtons,setSelectedButtons] = useState({
    humanResources : false,
    ICT : false,
    marketing : false,
    businessAnalysis : false,
    projectManagement : false,
    languageTeaching : false,
  })

  return (
    <InternListContainer>
      <div className="total-container">
      <div className="headeor-list">
        <div className="title-container">
          <h1>Intern List</h1>
        </div>
        <div className="headeor-icons">
          <div className="icon-button-container" >
            <i style={{color : "#9D99C4"}} class="users-icon fa-solid fa-user-group"></i>
            <button>Human Resource<br /> {counts.HRCount} </button>
          </div>
          <div className="icon-button-container" >
            <i style={{color : "#72DF76"}} class="users-icon fa-solid fa-user-group"></i>
            <button>ICT<br /> {counts.ICTCount} </button>
          </div>
          <div className="icon-button-container" >
            <i style={{color : "#F2B05C"}} class="users-icon fa-solid fa-user-group"></i>
            <button>Marketing<br /> {counts.marketingCount} </button>
          </div>
          <div className="icon-button-container" >
            <i style={{color : "#E96168"}} class="users-icon fa-solid fa-user-group"></i>
            <button>Business & Analysis<br /> {counts.BACount} </button>
          </div>
          <div className="icon-button-container" >
            <i style={{color : "#6461E9"}} class="users-icon fa-solid fa-user-group"></i>
            <button>Project Management<br /> {counts.PMCount} </button>
          </div>
          <div className="icon-button-container" >
            <i style={{color : "#A86108"}} class="users-icon fa-solid fa-user-group"></i>
            <button>Language Teaching<br /> {counts.LanTeachingCount} </button>
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
        <div className="inner-container" >
          <button 
            onClick={()=>setSelectedButtons((prevData) => (
              {
                ...prevData,
                humanResources : !prevData.humanResources
              }
            ))} 
            className={`check-button ${selectedButtons.humanResources ? "selected" : ""}`} 
          >
            <div className="check-container">
              <span className="check" ><i className={`fa-solid fa-check ${!selectedButtons.humanResources ? "hidden" : ""} `} ></i></span>
            </div> 
            Human Resource
          </button>
          <button 
            onClick={()=>setSelectedButtons((prevData) => (
              {
                ...prevData,
                ICT : !prevData.ICT
              }
            ))} 
            className={`check-button ${selectedButtons.ICT ? "selected" : ""}`}
          >
            <div className="check-container">
              <span className="check" ><i className={`fa-solid fa-check ${!selectedButtons.ICT ? "hidden" : ""} `} ></i></span>
            </div> 
            ICT
          </button>
          <button 
            onClick={()=>setSelectedButtons((prevData) => (
              {
                ...prevData,
                marketing : !prevData.marketing
              }
            ))} 
            className={`check-button ${selectedButtons.marketing ? "selected" : ""}`}
          >
            <div className="check-container">
              <span className="check" ><i className={`fa-solid fa-check ${!selectedButtons.marketing ? "hidden" : ""} `} ></i></span>
            </div> 
            Marketing
          </button>
          <button 
            onClick={()=>setSelectedButtons((prevData) => (
              {
                ...prevData,
                businessAnalysis : !prevData.businessAnalysis
              }
            ))} 
            className={`check-button ${selectedButtons.businessAnalysis ? "selected" : ""}`} 
          >
            <div className="check-container">
              <span className="check" ><i className={`fa-solid fa-check ${!selectedButtons.businessAnalysis ? "hidden" : ""} `} ></i></span>
            </div> 
            Business & Analysis
          </button>
          <button 
            onClick={()=>setSelectedButtons((prevData) => (
              {
                ...prevData,
                projectManagement : !prevData.projectManagement
              }
            ))} 
            className={`check-button ${selectedButtons.projectManagement ? "selected" : ""}`} 
          >
            <div className="check-container">
              <span className="check" ><i className={`fa-solid fa-check ${!selectedButtons.projectManagement ? "hidden" : ""} `} ></i></span>
            </div> 
            Project Management
          </button>
          <button 
            onClick={()=>setSelectedButtons((prevData) => (
              {
                ...prevData,
                languageTeaching : !prevData.languageTeaching
              }
            ))} 
            className={`check-button ${selectedButtons.languageTeaching ? "selected" : ""}`} 
          >
            <div className="check-container">
              <span className="check" ><i className={`fa-solid fa-check ${!selectedButtons.languageTeaching ? "hidden" : ""} `} ></i></span>
            </div> 
            Language Teaching
          </button>
        </div>
      </div>
      <div className="table-container">
      <table >
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
              <button><img src={penIcon} alt="" /></button>
              <button><img src={trashIcon} alt="" /></button>
              <button><img src={moreIcon} alt="" /></button>
            </td>
          </tr>
          <tr>
            <td>Julia Wielgus</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Project Management</td>
            <td>Business Proj. Mgr</td>
            <td className="action">
              <button><img src={penIcon} alt="" /></button>
              <button><img src={trashIcon} alt="" /></button>
              <button><img src={moreIcon} alt="" /></button>
            </td>
          </tr>
          <tr>
            <td>Fidelix Ayobami</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Project Management</td>
            <td>Business Proj. Mgr</td>
            <td className="action">
              <button><img src={penIcon} alt="" /></button>
              <button><img src={trashIcon} alt="" /></button>
              <button><img src={moreIcon} alt="" /></button>
            </td>
          </tr>
          <tr>
            <td>Ekin Uslu</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Business & Analysis</td>
            <td>Data Analyst</td>
            <td className="action">
              <button><img src={penIcon} alt="" /></button>
              <button><img src={trashIcon} alt="" /></button>
              <button><img src={moreIcon} alt="" /></button>
            </td>
          </tr>
          <tr>
            <td>Daniil Podtesov</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Business & Analysis</td>
            <td>Data Analyst</td>
            <td className="action">
              <button><img src={penIcon} alt="" /></button>
              <button><img src={trashIcon} alt="" /></button>
              <button><img src={moreIcon} alt="" /></button>
            </td>
          </tr>
          <tr>
            <td>Dominic Sibuisso</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Business & Analysis</td>
            <td>Business Lawyer</td>
            <td className="action">
              <button><img src={penIcon} alt="" /></button>
              <button><img src={trashIcon} alt="" /></button>
              <button><img src={moreIcon} alt="" /></button>
            </td>
          </tr>
          <tr>
            <td>Nida Oral</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Marketing</td>
            <td>Social Media Mgr</td>
            <td className="action">
              <button><img src={penIcon} alt="" /></button>
              <button><img src={trashIcon} alt="" /></button>
              <button><img src={moreIcon} alt="" /></button>
            </td>
          </tr>
          <tr>
            <td>Metehan Duzcan</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Marketing</td>
            <td>Content Creator</td>
            <td className="action">
              <button><img src={penIcon} alt="" /></button>
              <button><img src={trashIcon} alt="" /></button>
              <button><img src={moreIcon} alt="" /></button>
            </td>
          </tr>
          <tr>
            <td>Oyku Dilekci</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Marketing</td>
            <td>Copywriter</td>
            <td className="action">
              <button><img src={penIcon} alt="" /></button>
              <button><img src={trashIcon} alt="" /></button>
              <button><img src={moreIcon} alt="" /></button>
            </td>
          </tr>
          <tr>
            <td>Katerina Svarcova</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Human Resources</td>
            <td>HR Personnel</td>
            <td className="action">
              <button><img src={penIcon} alt="" /></button>
              <button><img src={trashIcon} alt="" /></button>
              <button><img src={moreIcon} alt="" /></button>
            </td>
          </tr>
          <tr>
            <td>Marvellous Oseyemi</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>Human Resources</td>
            <td>HR Personnel</td>
            <td className="action">
              <button><img src={penIcon} alt="" /></button>
              <button><img src={trashIcon} alt="" /></button>
              <button><img src={moreIcon} alt="" /></button>
            </td>
          </tr>
          <tr>
            <td>Ebube Samuel</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>ICT</td>
            <td>UX Designer</td>
            <td className="action">
              <button><img src={penIcon} alt="" /></button>
              <button><img src={trashIcon} alt="" /></button>
              <button><img src={moreIcon} alt="" /></button>
            </td>
          </tr>
          <tr>
            <td>Deji Aremu</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>ICT</td>
            <td>Back-End Dev</td>
            <td className="action">
              <button><img src={penIcon} alt="" /></button>
              <button><img src={trashIcon} alt="" /></button>
              <button><img src={moreIcon} alt="" /></button>
            </td>
          </tr>
          <tr>
            <td>Sergiu Mateiu</td>
            <td className="pending">Pending</td>
            <td className="ongoing">Ongoing</td>
            <td>ICT</td>
            <td>Fullstack Dev</td>
            <td className="action">
              <button><img src={penIcon} alt="" /></button>
              <button><img src={trashIcon} alt="" /></button>
              <button><img src={moreIcon} alt="" /></button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
     
      </div>
    </InternListContainer>
  );
}

export default InternLists;
