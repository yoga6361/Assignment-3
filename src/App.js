import React, { useState } from "react";
import Icon from "./Components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import "./style.css"

const tiktactoeArray = new Array(9).fill("");
const App = () => {
    
let [isCross, setIsCross] = useState(true);
let [winMessage, setWinMeassge] = useState("");

const playAgain = () => {
  setIsCross = true;
  setWinMeassge = "";
  tiktactoeArray = Array.fill("");
};

const findWinner = () => {
  if (Array[1] && Array[2] && Array[3]) {
    setWinMeassge = "X won";
  } else if (Array[4] && Array[5] && Array[6]) {
    setWinMeassge = "X won";
  } else if (Array[7] && Array[8] && Array[9]) {
    setWinMeassge = "X won";
  } else if (Array[1] && Array[4] && Array[7]) {
    setWinMeassge = "X won";
  } else if (Array[2] && Array[5] && Array[8]) {
    setWinMeassge = "X won";
  } else if (Array[3] && Array[6] && Array[9]) {
    setWinMeassge = "X won";
  } else if (Array[1] && Array[5] && Array[9]) {
    setWinMeassge = "X won";
  } else if (Array[3] && Array[5] && Array[7]) {
    setWinMeassge = "X won";
  } else {
    setWinMeassge = "O won";
  }
};

  return (
    <div>
      <Icon choice="circle" />
    </div>
  );
};


export default App;
