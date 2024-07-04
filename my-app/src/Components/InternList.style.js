import styled from 'styled-components'

export const InternListContainer = styled.div`

    
.total-container {
  background-color: rgba(245,248,254,255);  
  max-width: 100%;
  /* background-color: blue; */
}

.headeor-list {
  padding: 12px;
  font-size: 18px;
  flex-direction: column;
  align-items: center;
  /* background-color: green; */
  margin-bottom: 40px;
}

.title-container {
  width: 100%;
} 

.title-container h1{
  color: #151540;
  margin: 15px;
}

.headeor-icons {
  display: flex;
  justify-content: space-around;
  gap: 13px;
  margin-top: 10px;
}

.icon-button-container {
  display: flex;
  align-items: center;
  /* background-color: yellow; */
}

.users-icon {
  font-size: 220%;
  /* background-color: red; */
}

.headeor-icons button {
  height: 100%;
  width: 100px;
  color: #414141;
  border: none;
  padding: 6px 6px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 18px;
  background-color: transparent ;
  /* background-color: rgba(245,248,254,255); */
  font-weight: bold;
}

.tab-search-container {
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
}

.inner-container {
  /* background-color: green; */
  width: 75%;
  display: flex;
  justify-content: space-between;
}

.tabs {
  display: flex;
  background-color: rgba(245,248,254,255);
  width: 60%;
}

.tab {
  padding: 2%;
  cursor: pointer;
  color: #414141;
  border-bottom: 4px solid black;
  font-size: 100%;
  font-weight: bold;
  width: 25%;
  text-align: center;
}

.tab-active {
  border-bottom: 4px solid rgba(0,110,255,255);
  background-color: rgba(217,230,247,255);
  color: #414141;
}

.search-input {
  width: 35%;
  padding: 15px;
  border-radius: 5px;
  border: 0.5px solid gray;
}

.filters {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  margin: 20px 0;
}

.inner-container {
  width: 75%;
  display: flex;
  gap: 10px;
  /* background-color: red; */
  align-items: center;
}

.check-button {
  background-color: rgba(245,248,254,255); 
  border: none;
  display: flex;
  align-items: center;
  font-weight: bold;
  gap: 5px;
  cursor: pointer;

}

.selected {



}

.check-container {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}

.check {
  background-color: white;
  border: 2px solid grey;
  padding: 4px 12px;
  border-radius: 5px;
  padding: 8px 10px  ;

  .hidden {
    opacity: 0;
  }

}

.table-container {
  display: flex;
  justify-content: center;
}

table {
  width: 90%;
  border-collapse: collapse;
  /* margin: 0 20px; */
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  padding: 10px 40px ;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
}

th {
  background-color: rgba(245,248,254,255);
  font-size: 20px;
  color: #414141;
}

tr:hover {
  background-color: #f1f1f1;
}

.pending {
  color: #e67e22;
}

.ongoing {
  color: #3498db;
}

.action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.action button {
  background-color: rgba(245,248,254,255);
  border: none;
  padding: 6px 10px;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 5px;
}



`
