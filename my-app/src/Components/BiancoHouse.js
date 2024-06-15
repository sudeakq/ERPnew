import React from "react";
import "./BiancoHouse.css";

function BiancoHouse(){
  return(
<>

    <div class="containers">
        <div class="headerb">
            <h1>Bianco 1</h1>
            <span>3/3 locators</span>
        </div>
        <div class="sectionb">
            <div class="box">
                <h2>Payment</h2>
                <table>
                    <tr>
                        <th>Utility</th>
                        <th>Price for 1 month</th>
                        <th>Consume duty</th>
                    </tr>
                    <tr>
                        <td>Water</td>
                        <td>0€</td>
                        <td>0€</td>
                    </tr>
                    <tr>
                        <td>Gas</td>
                        <td>0€</td>
                        <td>0€</td>
                    </tr>
                    <tr>
                        <td>Electricity</td>
                        <td>0€</td>
                        <td>0€</td>
                    </tr>
                    <tr>
                        <td>Internet</td>
                        <td>0€</td>
                        <td>0€</td>
                    </tr>
                </table>
            </div>
            <div class="box">
                <h2>Reported Issues</h2>
            </div>
        </div>
        <div class="section room">
            <div class="box room-details">
                <h3>Room 1</h3>
                <div>Ebube Samuel</div>
                <div>Student's name</div>
                <div>1.05.2024 - 1.07.2024</div>
                <div>Rent: <span>✔️ ❌</span></div>
                <div>Consume duty:</div>
                <ul>
                    <li>1.05.2024 - 31.05.2024 <span>✔️ ❌</span></li>
                    <li>1.06.2024 - 30.06.2024 <span>✔️</span></li>
                </ul>
            </div>
            <div class="box room-details">
                <h3>Room 2</h3>
                <div>Student's name</div>
            </div>
        </div>
    </div>
</>


  );
}


export default BiancoHouse