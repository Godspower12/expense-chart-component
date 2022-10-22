import React, {useState} from 'react'
import "./expenses.css";

const Expenses = () => {
const [mon, setMon] = useState(false);
const [tue, setTue] = useState(false);
const [wed, setWed] = useState(false);
const [thu, setThu] = useState(false);
const [fri, setFri] = useState(false);
const [sat, setSat] = useState(false);
const [sun, setSun] = useState(false);
 
  return (
    <div className = "containers1">
    <div className = "containers">
    <div className='myCharts'>
  <div className="balance">
    <h4>My balance</h4>
    <h1>$921.48</h1>
  </div>
  <div className="circles">
    <div className="transparent-circle"></div>
    <div className="fill-circle"></div>
  </div>
    </div>
    <div className="chart-container">
  <div className="spending">
    <h2>Spending - Last seven days</h2>
  </div>
      
      <div className = "days">
        <div className = "monday">
      <div className = "mon">
      <div className = {mon ? "mon-box visible" : "mon-box"} >
      $17.45
      </div>
      <div onClick = {() => setMon(!mon)} className = {mon ? "mon-bar hover" : "mon-bar"}></div>
      <h5>mon</h5>
      </div>
      </div>

        <div className = "tuesday">
      <div className = "tue">
      <div className = {tue ? "tue-box visible" : "tue-box"}>
      $34.91
      </div>
      <div onClick = {() => setTue(!tue)} className = {tue ? "tue-bar hover" : "tue-bar"}></div>
      <h5>tue</h5></div>
      </div>
        <div className = "wednesday">
      <div className = "wed">
      <div className = {wed ? "wed-box visible" : "wed-box"}>
      $52.36
      </div>
      <div onClick = {() => setWed(!wed)} className = {wed ? "wed-bar hove" : "wed-bar"}></div>
      <h5>wed</h5></div>
      </div>
        <div className = "thursday">
      <div className = "thu">
       <div className = {thu ? "thu-box visible" : "thu-box"}>
      $31.07
      </div>
      <div onClick = {() => setThu(!thu)} className = {thu ? "thu-bar hover" : "thu-bar"}></div>
      <h5>thu</h5></div>
      </div>
        <div className = "friday">
      <div className = "fri">
   <div className = {fri ? "fri-box visible" : "fri-box"}>
      $23.39
      </div>
      <div onClick = {() => setFri(!fri)} className = {fri ? "fri-bar hover" : "fri-bar"}></div>
      <h5>fri</h5></div>
      </div>
        <div className = "saturday">
      <div className = "sat">
      <div className ={sat ? "sat-box visible" : "sat-box"}>
      $43.28
      </div>
      <div onClick = {() => setSat(!sat)} className = {sat ? "sat-bar hover" : "sat-bar"}></div>
      <h5>sat</h5></div>
      </div>
        <div className = "sunday">
      <div className = "sun">
      <div className = {sun ? "sun-box visible" : "sun-box"}>
      $25.48
      </div>
      <div onClick = {() => setSun(!sun)} className = {sun ? "sun-bar hover" : "sun-bar"}></div>
      <h5>sun</h5></div>
      </div>



      </div>
       <hr/>
       <div className = "footers">
       <p>Total this month</p>
       <div className= "footer-info">
      <h1>$478.33</h1>
        <div>
        <span>+2.4%</span>
        <p>From last month</p>
        
        </div>
       </div>
       </div>
       

    </div>
    </div>
    </div>
  )
}

export default Expenses