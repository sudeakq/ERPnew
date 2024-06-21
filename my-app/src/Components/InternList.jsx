import React from "react";
import "./InternList.css";


function InternLists() {
  return (
    <>
      <div className="headeor-list">
        <h1>Intern List</h1>
        <div className="headeor-icons">
          <div>
            <button>Human Resource<br />3</button>
          </div>
          <div>
            <button>ICT<br />6</button>
          </div>
          <div>
            <button>Marketing<br />5</button>
          </div>
          <div>
            <button>Business & Analysis<br />5</button>
          </div>
          <div>
            <button>Project Management<br />5</button>
          </div>
          <div>
            <button>Language Teaching<br />1</button>
          </div>
        </div>
      </div>
      <div className="tabs">
        <div className="tab tab-active">Ongoing</div>
        <div className="tab">Finished</div>
        <div className="tab">Terminated</div>
        <div className="tab">All</div>
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
        <input type="text" placeholder="Search by Name" />
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
    </>
  );
}

export default InternLists;
