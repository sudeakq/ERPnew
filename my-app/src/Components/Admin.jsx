/* import "./Admin.css"; */
import { AdminContainer } from "./Admin.style";
function Admin() {
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
          />
          <label htmlFor="last" className="LnameLabel"></label>
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className="form_Email">
          <label htmlFor="Email">Email :</label>
          <input type="email" id="Email" name="Email" required />
        </div>
        <div className="form_Password">
          <label htmlFor="Password">Password :</label>
          <input type="password" id="Password" name="Password" required />
        </div>
        <div className="form_Password">
          <label htmlFor="Cpassword">Confirm Password :</label>
          <input type="password" id="Cpassword" name="Cpassword" required />
        </div>
        <div className="optionsForm">
          <div className="form_Departmant">
            <label htmlFor="Departmants">Departmant :</label>
            <select id="Departmants" name="Departmants" required>
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
            <select id="Role" name="Role" required>
              <option disabled selected>
                Role
              </option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>
        <div className="submitBtn">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
    </AdminContainer>
  );
}
export default Admin;
