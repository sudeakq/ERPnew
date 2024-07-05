
import styled from "styled-components";

export const BirthdaysContainer = styled.div`

.containeor {
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  height: 79vh;
}

.section {
  flex: 1;
  padding: 20px;
  text-align: center;
  /* height: 80vh; */
}

.section h2 {
  color: #333;
  margin-bottom: 20px;
}

.calendar,
.list {
  width: 100%;
  border: 1px solid #000000;
  border-radius: 10px;
  font-family: Arial, sans-serif;
}

.calendar th,
.calendar td,
.list th,
.list td {
  text-align: center;
  padding: 7px;
  border: 1px solid #ddd;
}

.arrow {
  cursor: pointer;
  font-size: 20px;
}

#prevMonth {
  float: left;
}

#nextMonth {
  float: right;
}

.calendar th {
  background-color: #f0f0f0;
  font-weight: bold;
}

.calendar th[colspan="5"] {
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

.list th,
.list td {
  text-align: left;
}

.list th {
  background-color: #f4f4f4;
  color: #333;
  font-weight: bold;
}

.list td {
  color: #555;
}

.list tr:hover {
  background-color: #f9f9f9;
}

.list .date,
.list .department {
  color: #848383;
  font-size: 14px;
}

`
