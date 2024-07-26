/* import "./Admin.css"; */
import { useState, useEffect } from "react";
import { AdminContainer } from "./Admin.style";
import axios from "axios";
function Admin() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [Data, setData] = useState({
    name: "",
    lastName: "",
    Email: "",
    Password: "",
    Confirm_Password: "",
    Departmant: "",
    Role: "",
  });
  console.log(Data.name);
  console.log(Data.lastName);
  console.log(Data.Email);
  console.log(Data.Password);
  console.log(Data.Confirm_Password);
  console.log(Data.Departmant);
  console.log(Data.Role);
  console.log(isSubmitted);
  const postData = async () => {
    const response = await axios.post("http://localhost:8000/api/admins", {
      name: Data.name,
      email: Data.Email,
      password: Data.Password,
    });
    if (response.status) {
      console.log(response.data);
    }
    const resData = await response.data;
  };
  return (
    <AdminContainer>
      <div className="formContent">
        <h1>Register Page</h1>
        <form className="FormRegister">
          <div className="form_Name">
            <label htmlFor="fname">Name :</label>
            <input
              type="name"
              id="fname"
              name="fname"
              placeholder="First Name"
              required
              value={Data.name}
              onChange={(event) => {
                setData((v) => ({ ...v, name: event?.target.value }));
              }}
            />
            {/* <label htmlFor="last" className="LnameLabel"></label>
            <input
              type="text"
              placeholder="Last Name"
              required
              value={Data.lastName}
              onChange={(event) => {
                setData((v) => ({ ...v, lastName: event?.target.value }));
              }}
            /> */}
          </div>
          <div className="form_Email">
            <label htmlFor="Email">Email :</label>
            <input
              type="email"
              id="Email"
              name="Email"
              required
              value={Data.Email}
              onChange={(event) => {
                setData((v) => ({ ...v, Email: event?.target.value }));
              }}
            />
          </div>
          <div className="form_Password">
            <label htmlFor="Password">Password :</label>
            <input
              type="password"
              id="Password"
              name="Password"
              required
              value={Data.Password}
              onChange={(event) => {
                setData((v) => ({ ...v, Password: event?.target.value }));
              }}
            />
          </div>
          <div className="form_Password">
            <label htmlFor="Cpassword">Confirm Password :</label>
            <input
              type="password"
              id="Cpassword"
              name="Cpassword"
              required
              value={Data.Confirm_Password}
              onChange={(event) => {
                setData((v) => ({
                  ...v,
                  Confirm_Password: event?.target.value,
                }));
              }}
            />
          </div>
          {/* <div className="optionsForm">
            <div className="form_Departmant">
              <label htmlFor="Departmants">Departmant :</label>
              <select
                id="Departmants"
                name="Departmants"
                required
                onChange={(event) => {
                  setData((v) => ({ ...v, Departmant: event?.target.value }));
                }}
              >
                <option disabled selected>
                  Departmant
                </option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="BA">BA</option>
                <option value="DM">DM</option>
                <option value="FA">FA</option>
                <option value="DA">DA</option>
                <option value="UX">UX</option>
                <option value="UD">UD</option>
                <option value="EPM">EPM</option>
              </select>
            </div>
            <div className="form_Role">
              <label htmlFor="Role" className="RoleLabel">
                Role :
              </label>
              <select
                id="Role"
                name="Role"
                required
                onChange={(event) => {
                  setData((v) => ({ ...v, Role: event?.target.value }));
                }}
              >
                <option disabled selected>
                  Role
                </option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          </div> */}
          <div className="submitBtn">
            <input
              type="submit"
              value="Submit"
              onClick={(e) => {
                e.preventDefault();
                postData();
              }}
            />
          </div>
        </form>
      </div>
    </AdminContainer>
  );
}
export default Admin;
