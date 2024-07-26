
import styled from "styled-components"

export const AdminContainer = styled.div`

.formContent {
    display: flex;
    flex-direction: column;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    align-items: center;
    background-color: #f9fafb;
    height: 87.5vh;
    min-width: 900px;
}
.FormRegister {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1em;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    min-width: 500px;
}
label{
    display: inline-block;
    width: 200px;
    font-size: 20px;
    font-weight: 600;
}
input {
    height: 2em;
    width: 20em;
    border: 1px solid #ccc;
    padding-left: .5rem;
    border-radius: 4px;
    
}
input[type="submit"] {
    width: 22rem;
}
input[type="submit"]:hover {
    cursor: pointer;
    border-color: black;
    outline: none;
}
.optionsForm {
    display: flex;
    align-items: center;
    gap: 14em;
}
.submitBtn {
    display: flex;
    justify-content: center;
    align-items: center;
}
.form_Name {
    display: flex;
}
.LnameLabel {
    width: 15px;
}
.RoleLabel {
    width: 5rem;
}
input:focus {
    border-color: black;
    outline: none;
}

`
