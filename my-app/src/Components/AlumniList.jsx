import React from "react";
import "./AlumniList.css";


function Alumni() {


  return (
    <>
      <div className="alumni-list">
        <div className="headeral">
          <h1>Alumni List</h1>
          <div className="controls">
            <input type="text" placeholder="Sort by:" />
            <button className="csv-import">CSV Import</button>
            <button className="add-candidate">+ Add Candidate</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>APPLICANT</th>
              <th>LAST DAY IN EXTRAMUS</th>
              <th>DEPARTMENT</th>
              <th>POSITION</th>
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
              <td>...</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Klara Tlaskalova</td>
              <td>20/08/2021</td>
              <td>Human Resource Management</td>
              <td>HR Personnel</td>
              <td>...</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Vanessa Vimbainashe</td>
              <td>15/08/2021</td>
              <td>Project Management</td>
              <td>Business Lawyer</td>
              <td>...</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Chidiebube Samuel</td>
              <td>17/08/2021</td>
              <td>ICT</td>
              <td>UX Designer</td>
              <td>...</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Adriana Goncalves</td>
              <td>1/08/2021</td>
              <td>Project Management</td>
              <td>European Project Manager</td>
              <td>...</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Katerina Svarcova</td>
              <td>12/08/2021</td>
              <td>Human Resource Management</td>
              <td>HR Personnel</td>
              <td>...</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Ekin Uslu</td>
              <td>26/08/2021</td>
              <td>Business and Data Analysis</td>
              <td>Data Analyst</td>
              <td>...</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Oladimeji Aremu</td>
              <td>22/08/2021</td>
              <td>ICT</td>
              <td>Front-End Developer</td>
              <td>...</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Julia Wielgus</td>
              <td>25/08/2021</td>
              <td>Project Management</td>
              <td>Business Project Management</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  );
}

export default Alumni