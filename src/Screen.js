import Cards from "./Screen/Cards";
import Overview from "./Screen/Overview";
import Customers from "./Screen/Customers";
import { IoNotifications } from "react-icons/io5";

function Screen(){
    let style = {display: "grid", alignItems: "start", gridTemplateColumns: "5fr 2fr"}
    let headoverStyle = {display: "flex", justifyContent: "space-between", margin: "15px"}
    let overviewStyle = {fontSize: "24px", fontWeight: "bold"}
    let daysStyle = {backgroundColor: "white", padding: "10px", borderRadius: "20px", fontWeight: "bold"}
    return (
        <div className="screen">
          <div className="top">
            <div className="greet">Dashboard&#128075;</div>
            <div className="nav">
              <form action="">
                  <input type="text" className="search" placeholder="search" />
              </form>
              <div className="notibell"><IoNotifications/></div>
              <div className="user">Alex Man (Product Manager)</div>
            </div>
          </div>

          <div style = {headoverStyle}>
            <div style = {overviewStyle}>Overview</div>
            <div style = {daysStyle}>Last 30 days &#11167;</div>
          </div>

          <Cards></Cards>

          <div style = {style}>
            <Overview></Overview>
            <Customers></Customers>
          </div>
        </div>
    )
}

export default Screen;