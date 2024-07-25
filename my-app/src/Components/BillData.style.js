
import styled from "styled-components";

export const BillDataContainer = styled.div`

.houses {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.houses h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.locators {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.locators span {
  font-size: 14px;
  background-color: #e6f3ff;
  padding: 5px 10px;
  border-radius: 5px;
}

.edit-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
}

.houses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
}

.house-card {
  background-color: #e6f3ff;
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  width: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction : column;
  justify-content: space-between;
}

.house-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.house-card h2 {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.room {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  padding: 5px 10px;
  background-color: #f2f6fc;
  border-radius: 5px;
}

.room span {
  font-size: 14px;
}

.status {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: none;
}

.status.green {
  background-color: #5cb85c;
}

.status.red {
  background-color: #d9534f;
}

.bills-button-container {
  margin-top: 50px;
  display: flex;
  justify-content: center;

}

.bills-button {
  padding: 5px 10px;
  background-color: #f2f6fc;
  border-radius: 5px;
  cursor: pointer;
}

`
