
import styled from "styled-components";

export const RemindersContainer = styled.div`

.container {
  display: flex;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.calendar {
  width: 250px;
  margin-right: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.calendar-header {
  text-align: center;
  font-weight: bold;
  padding: 10px 0;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}

.calendar-cell {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.calendar-cell.selected {
  background-color: #eee;
}

.list {
  width: 350px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.list-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
}

.list-item:last-child {
  border-bottom: none;
}

.list-item-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
}

.list-item-text {
  font-weight: bold;
  flex-grow: 1;
}

.list-item-time {
  margin-left: auto;
}

.list-item-time i {
  font-size: 12px;
  margin-left: 5px;
}

.list-item-time span {
  font-size: 12px;
  color: #888;
}

.list-item-dot.red {
  background-color: #ff5733;
}

.list-item-dot.yellow {
  background-color: #ffc107;
}

.list-item-dot.green {
  background-color: #4caf50;
}

.list-item-time .icon-clock {
  color: #888;
}

.list-item-time .icon-calendar {
  color: #888;
}

`
