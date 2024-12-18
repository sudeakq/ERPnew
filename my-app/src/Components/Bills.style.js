
import styled from "styled-components";

export const BillsContainer = styled.div`

Expenses.css
.expenses-container {
  display: flex;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f4f6fa;
}

.left-panel {
  flex: 2;
  padding-right: 20px;
}

.right-panel {
  flex: 1;
  padding-left: 20px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.expenses-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-icons {
  display: flex;
  align-items: center;
}

.header-icons img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 10px;
}

.add-user {
  background: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  font-size: 20px;
  cursor: pointer;
}

.date-range {
  font-size: 14px;
  color: #888;
  margin-top: 10px;
}

.chart {
  height: 100px;
  background: #e6f3ff;
  margin: 20px 0;
}

.sum-section {
  margin-top: 20px;
}

.sum-header {
  font-weight: bold;
}

.expenses-list {
  margin-top: 10px;
}

.expense-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.expense-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.electricity {
  background: #ffeb3b;
}

.water {
  background: #03a9f4;
}

.internet {
  background: red;
}

.gas {
  background: #4caf50;
}

.expense-details {
  flex: 1;
}

.expense-name {
  font-weight: bold;
}

.expense-time {
  color: #888;
  font-size: 12px;
}

.expense-amount {
  font-weight: bold;
  margin-left: 10px;
}

.summary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.edit-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.payment-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.payment-name {
  width: 80px;
}

.payment-bar {
  flex: 1;
  background: #e6f3ff;
  border-radius: 5px;
  height: 10px;
  margin: 0 10px;
  position: relative;
}

.filled-bar {
  background: #4caf50;
  height: 100%;
  border-radius: 5px;
}

.payment-amount {
  font-weight: bold;
}

.requests {
  text-align: center;
  margin-top: 20px;
}

.requests p {
  margin-bottom: 10px;
  font-weight: bold;
}

.view-requests {
  background: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
} 

`
