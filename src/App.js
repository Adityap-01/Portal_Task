import React, { useState } from "react";
import './App.css';
import Toggle from "./Components/Toggle"
import Checkbox from "./Components/Checkboxes"
import Textbox from "./Components/Textbox";
import Fetching from "./Components/Fetching";


const App = () => {
  // useState hooks for toggles
  const [toggled1, setToggled1] = useState(false);
  const [toggled2, setToggled2] = useState(false);
  const [toggled3, setToggled3] = useState(false);
  const [btn, setbtn] = useState(false);
  

  return (
    <div className="cont">
      <div className="head"><h3> <label>Filter By</label> </h3> </div>

      {/* Table containing 3 toggles  */}
      <div className="mat">
        <table id="tab">
          <tr class="border-bottom">
            <td>by Date</td>
            <td>
              <Toggle onChange={(event) => setToggled1(event.target.checked)}/> 
            </td>
          </tr>

          <tr>
            <td></td>
            <td><p className="sectext">{toggled1 ? <div> <Checkbox/> <hr /> </div>: ""}</p></td>
          </tr>

          <tr class="border-bottom">
            <td>by Location</td>
            <td>
              <Toggle onChange={(event) => setToggled2(event.target.checked)}/>
            </td>
          </tr>

          <tr>
            <td></td>
            <td>{toggled2 ? <div> <Textbox/><hr /> </div> : ""}</td>
          </tr>

          <tr class="border-bottom">
            <td>Liked Posts</td>
            <td rowSpan="2">
              <Toggle onChange={(event) => setToggled3(event.target.checked)}/><p className="sectext">{toggled3 ? "On" : ""}</p>
            </td>
          </tr>

        </table>
      </div>

      <input type="button" class="button" value="Fetch Button" onClick={(event) => setbtn(event.target.value)}></input>
      {btn ?<div className="card1">
        <Fetching/>
      </div>:""}
      
    </div>
  );
};

export default App;
