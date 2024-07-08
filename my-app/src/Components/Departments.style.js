
import styled from "styled-components";

export const DepartmantsContainer = styled.div`

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.grid img {
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
}


`
