
import styled from "styled-components";

export const ApplicantFormsContainer = styled.div`
  overflow-y: auto;
  padding: 20px;

.application-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Section styles within the form */
.section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.section h3 {
  margin-bottom: 10px;
  color: #333;
}

/* Field styles within each section */
.field {
  display: flex;
  flex-direction: column;
}

.field label {
  margin-bottom: 5px;
  color: #666;
}

.field input,
.field select {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Add button styles */
.add-button {
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #0056b3;
}


`
