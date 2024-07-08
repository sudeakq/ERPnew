
import styled from "styled-components";

export const ScheduleContainer = styled.div`

.header-week {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  color: rgb(0, 0, 0);
  border-radius: 12px;
  border: 1px solid rgb(182, 182, 182);
  margin-bottom: 10px;
}
 .header h1 {
   margin: 0;
 }

 .header-right {
   display: flex;
   align-items: center;
 }

 .header-right .date {
   margin: 0 7px;
   font-weight: 600;
 }

 .date{
  color: #000000;
}

 .header-right  {
   background: none;
   border: none;
   color: white;
   font-size: 16px;
   cursor: pointer;
   padding: 5px;
 }


 .nav-button{
  color: #4b3fa1;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 5px;
}

 .schedule-container {
   display: flex;
   justify-content: space-around;
   padding: 10px;
   flex-wrap: wrap;
 }

 .edit {
   padding: 6px;
   border-radius: 3px;
   position: absolute;
   font-size: 24px;
   margin-top: 6px;
   font-weight: bold;
 }

 .shift {
   background-color: #fff;
   margin: 7px;
   padding: 10px;
   border-radius: 8px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   flex-basis: 25%;
   min-width: 300px;
 }

 .shift h2 {
   text-align: center;
   margin-top: 0;
   color: #000000;
   font-size: 16px;
 }

 .group {
   margin-bottom: 20px;
 }

 .group h3 {
   font-size: 16px;
   margin-bottom: 5px;
   color: #4b3fa1;
 }

 .group ul {
   list-style-type: disc;
   padding-left: 10px;
 }

 .group ul li {
   margin-bottom: 2px;
 }

`
