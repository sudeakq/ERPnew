import boxImage from "../images/boxBox.png";
import flower from "../images/flower_1.png";
import profileImg from "../images/profile_1.png";
import profileImg2 from "../images/profile_2.png";
import profileImg3 from "../images/profile_3.png";
import addProfile from "../images/add_profile.png";
import Stats from "../images/Stats.png";
import threeDot from "../images/threedots.png";
import dot from "../images/dot.png";
import electricity from "../images/electricity.png";
import water from "../images/Water.png";
import gas from "../images/Gas.png";
import electricityBar from "../images/electrictyBar.png";
import waterBar from "../images/WaterBar.png";
import gasBar from "../images/GasBar.png";
import "./Bills.css";
function Bills() {
  return (
    <>
      <div className="BillsUserPage">
        <div className="leftBills">
          <div className="PaymentProfile">
            <div className="titleProfile">
              <h1>What you have to pay</h1>
              <div className="titleImages">
                <img src={profileImg} alt="" />
                <img src={profileImg2} alt="" />
                <img src={profileImg3} alt="" />
                <img src={addProfile} alt="" className="Pointer" />
              </div>
            </div>
            <p className="grayColor">01 - 25 March, 2020</p>
            <img src={Stats} alt="" />
          </div>
          <div className="SumHouse">
            <div className="title_Sum">
              <p>The sum of Ferraro house</p>
              <img src={threeDot} alt="" className="Pointer" />
            </div>
            <hr />
            <div className="BillsPrices">
              <div className="SumBill">
                <div className="leftBill">
                  <img src={electricity} alt="" />
                  <div className="typeOfBill">
                    <p className="bolder">Electricity</p>
                    <div className="infosBill">
                      <p>5:12 pm</p>
                      <img src={dot} alt="" />
                      <p>Belanja di pasar</p>
                    </div>
                  </div>
                </div>
                <div className="priceBill bolder">
                  <p>-326.800</p>
                </div>
              </div>
              <div className="SumBill">
                <div className="leftBill">
                  <img src={water} alt="" />
                  <div className="typeOfBill">
                    <p className="bolder">Water</p>
                    <div className="infosBill">
                      <p>5:12 pm</p>
                      <img src={dot} alt="" />
                      <p>Naik bus umum</p>
                    </div>
                  </div>
                </div>
                <div className="priceBill bolder">
                  <p>-15.000</p>
                </div>
              </div>
              <div className="SumBill">
                <div className="leftBill">
                  <img src={gas} alt="" />
                  <div className="typeOfBill">
                    <p className="bolder">Gas</p>
                    <div className="infosBill">
                      <p>5:12 pm</p>
                      <img src={dot} alt="" />
                      <p>Bayar Listrik</p>
                    </div>
                  </div>
                </div>
                <div className="priceBill bolder">
                  <p>-185.750</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightBills">
          <div className="rightTopBar">
            <p className="titleTotalPrice">What is the sum of Ferraro house</p>
            <div className="electricityPrice Bar">
              <div className="UpperBar">
                <p>Electricity</p>
                <p>872.400</p>
              </div>
              <img src={electricityBar} alt="" />
            </div>
            <div className="WaterPrice Bar">
              <div className="UpperBar">
                <p>Water</p>
                <p>1.378.200</p>
              </div>
              <img src={waterBar} alt="" />
            </div>
            <div className="GasPrice Bar">
              <div className="UpperBar">
                <p>Gas</p>
                <p>928.500</p>
              </div>
              <img src={gasBar} alt="" />
            </div>
          </div>
          <div className="greyBackground">
            <div className="images">
              <img src={boxImage} alt="" />
              <img src={flower} alt="" />
            </div>
            <div className="topPart">
              <b>Your request process(1)_View all</b>
              <p className="descPrice">
                Make a request about an issue that you have at your house
              </p>
            </div>
            <button className="Pointer">Make a request</button>
            <div className="greyBackG"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Bills;
