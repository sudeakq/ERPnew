import styled from "styled-components";

export const BillsContainer = styled.div`

.BillsUserPage {
    display: flex;
    background-color: white;
    min-height: 90vh;
}
.leftBills {
    padding-top: 2em;
    padding-left: 10em;
    padding-right: 10em;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 55vw;
    min-width: 650px;
    background-color: #F5F5F5;
}
.PaymentProfile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.titleProfile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
}
.titleImages {
    display: flex;
    align-items: center;
    gap: .25em;
}
.titleImages > img {
    width: 35px;
}
.title_Sum {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 14px;
    color: #262A41;
}
.BillsPrices {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
}
.SumBill {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.typeOfBill {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    color: #273240;
}
.infosBill {
    display: flex;
    align-items: center;
    gap: .5rem;
    color: #404852;
    opacity: 0.5;
}
.infosBill > img {
    width: 4px;
}
.leftBill {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
}
.leftBill > img {
    width: 50px;
}
.bolder {
    font-weight: 600;
    font-size: 14px;
}
.grayColor {
    color: #101010;
    opacity: 0.5;
}
.rightTopBar {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.titleTotalPrice {
    margin-bottom: 1rem;
    color: #262A41;
    font-size: 17px;
}
.UpperBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.rightBills {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7.5rem;
    min-width: 30vw;
}
.greyBackground {
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    position: relative;
    min-width: 75%;
    height: 280px;
}
.images {
    display: flex;
    align-items: flex-end;
    gap: 6rem;
}
.images > img:nth-child(1) {
    width: 65px;
}
.images > img:nth-child(2) {
    width: 50px;
}
.topPart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
.descPrice {
    color: #404852;
    font-size: 13px;
    width: 75%;
    opacity: 0.75;
}
button {
    border: 0;
    background-color: #101010;
    color: white;
    padding: .75rem 3.5rem;
    border-radius: 10px;
}
.greyBackG {
    position: relative;
    background-color: #EDF0F6;
    min-width: 17.5rem;
    height: 14rem;
    border-radius: 15px;
    bottom: 15rem;
    z-index: -1;
    overflow: hidden;
}
.Pointer {
    cursor: pointer;
}
@media screen and (max-width: 1210px) {
    
    .Header {
        min-width: 1200px;
    }
    .BillsUserPage {
        min-width: 1000px;
    }
    
  }

`
