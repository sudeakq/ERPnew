import styled from "styled-components";

export const UpcomingEventsContainer = styled.div`

  display: flex;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 98%;
  max-width: 90%;
  height: 87vh;

.section {
    background-color: red;
  width: 100%;
  padding: 20px;
  text-align: center;
  height: 70vh;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.calendar {
  width: 100%;
  border: 1px solid #000000;
  border-radius: 10px;
  font-family: Arial, sans-serif;
}

.calendar th,
.calendar td {
  text-align: center;
  padding: 7px;
  border: 1px solid #ddd;
}

.calendar th {
  background-color: #f0f0f0;
  font-weight: bold;
}

.calendar th[colspan="7"] {
  background-color: #fff;
  border-bottom: none;
}

.calendar th h3 {
  margin: 0;
  font-size: 1.2em;
  font-weight: normal;
}

.calendar td {
  cursor: pointer;
}

.calendar td.today {
  background-color: #e0e0e0;
}

.calendar td.selected {
  background-color: #e0f7ff;
  font-weight: bold;
  color: #0077ff;
  border-radius: 50%;
}

.calendar td.prev-month,
.calendar td.next-month {
  color: #b0b0b0;
}


.list {
  width: 100%;
  /* border-collapse: collapse; */
  border: 1px solid #000000;
  margin-top: 20px;
  border-radius: 5px;
}

.list th,
.list td {
  text-align: left;
  padding: 14px;
  border: 1px solid #ddd;
}

.list th {
  background-color: #f0f0f0;
  font-weight: bold;
}

.list td.status {
  text-align: center;
}

.list td.status.arriving {
  color: green;
}

.list td.status.departing {
  color: red;
}

.list td.date {
  text-align: right;
}


`
