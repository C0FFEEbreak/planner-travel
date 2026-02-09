import React, { useState } from "react";
import Input from "./components/Input";
import DatePicker from "./components/DatePicker";
import Dropdown from "./components/Dropdown";
import DestinationList from "./components/DestinationList";
import StatsBoard from "./components/StatsBoard";
import "./App.css";

export default function MyPlanner() {
  const [myInputVar, myInputFunc] = useState("");
  const [myDateVar, myDateFunc] = useState("");
  const [myTransVar, myTransFunc] = useState("");
  const [myActVar, myActFunc] = useState("");
  const [myListVar, myListFunc] = useState([]);

  const myTransOpt = [
    { id: 1, label: "car" },
    { id: 2, label: "bus" },
    { id: 3, label: "train" },
  ];
  const myActOpt = [
    { id: 1, label: "snorkel" },
    { id: 2, label: "shopping" },
    { id: 3, label: "dining" },
  ];

  const myAddFunc = () => {
    const myEntry = {
      id: Date.now(),
      text: myInputVar,
      date: myDateVar,
      transportation: myTransVar,
      activity: myActVar,
      isVisited: false,
    };
    myListFunc([...myListVar, myEntry]);
    myInputFunc("");
    myDateFunc("");
    myTransFunc("");
    myActFunc("");
  };

  const deleteItem = (itemId) => {
    const updatedList = myListVar.filter((trip) => trip.id !== itemId);
    myListFunc(updatedList);
  };

  const totalCount = myListVar.length;
  const completedCount = myListVar.filter((item) => item.isVisited).length;
  const activeCount = totalCount > 0 ? totalCount - completedCount : 0;

  const myToggleVisitedStatus = (itemId) => {
    myListFunc(
      myListVar.map((trip) =>
        trip.id === itemId ? { ...trip, isVisited: !trip.isVisited } : trip,
      ),
    );
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="container">
        <header>
          <h1>Travel Tracker</h1>
        </header>
        <main>
          <main>
            <Input valueProp={myInputVar} changeProp={myInputFunc} />
            <DatePicker valueProp={myDateVar} changeProp={myDateFunc} minDate={today} />
            <Dropdown valueProp={myTransVar} changeProp={myTransFunc} listOpt={myTransOpt} />
            <Dropdown valueProp={myActVar} changeProp={myActFunc} listOpt={myActOpt} />
            <button onClick={myAddFunc}>Add</button>
            <StatsBoard total={totalCount} completed={completedCount} active={activeCount} />
            <DestinationList listProp={myListVar} toggleProp={myToggleVisitedStatus} deleteProp={deleteItem} />
          </main>
          <footer>
            <p>© 2026 Portfolio Project | Built with React</p>
          </footer>
        </main>
      </div>
    </>
  );
}
