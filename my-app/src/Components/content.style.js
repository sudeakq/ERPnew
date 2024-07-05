import styled from "styled-components";

export const ContentContainer = styled.div `

.content-container {
  width: 100%;
  background-color: rgba(238, 238, 247, 0.466);
  display: flex;
}

.content-container-left {
  width: 45%;
  justify-content: left;
  padding: 30px 40px;
}

.content-container-right {
  width: 55%;
  justify-content: left;
  padding: 30px 40px;
}

.content-container-top {
  display: flex;
  justify-content: space-between;
}

.view-all {
  display: flex;
}

.view-all-arrow {
  color: rgba(47, 128, 237, 1);
  margin-left: 5px;

}

.view-all a {
  color: rgba(47, 128, 237, 1);
  text-decoration: none;
  font-weight: 700;

}

.content-container-top h4 {
  font-size: 24px;

}
  .content-container-middle {
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
}
.content-container-middle h4{
   font-size: 24px;
}

.content-container-bottom {
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
}
.content-container-bottom h4{
   font-size: 24px;
}


`