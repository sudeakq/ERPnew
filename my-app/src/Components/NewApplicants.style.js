
import styled from "styled-components";

export const ApplicantsContainer = styled.div`

  width: 80%;
  margin: 20px auto;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

headerk {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

headerk h1 {
  margin: 0;
}

.headerk-actions {
  display: flex;
  gap: 20px;
}

.headerk-actions input {
  padding: 5px;
}

.headerk-actions button {
  padding: 5px 15px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table thead {
  background-color: #f9f9f9;
}

table th,
table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

table th {
  text-align: center;
}

table td {
  text-align: center;
}

.status {
  padding: 5px 10px;
  border-radius: 12px;
  color: white;
  font-size: 14px;
  white-space: nowrap; /* Prevents text from wrapping */
}

.status.pending {
  background-color: yellow;
  color: black;
}

.status.on-board {
  background-color: rgb(12, 16, 255);
}

.status.rejected {
  background-color: red;
}

.status.accepted {
  background-color: green;
}

.status.ending {
  background-color: orange;
}

.action-btn {
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.popup form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.popup form label {
  display: flex;
  flex-direction: column;
}

.popup form button {
  margin-top: 10px;
}


`
