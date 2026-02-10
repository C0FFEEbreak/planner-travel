import React, { useState, useEffect } from "react";
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
  const [myListVar, myListFunc] = useState(() => {
  const saved = localStorage.getItem("travelList");
    return saved ? JSON.parse(saved) : []; // Line 1-2: Load data
  });

  const myTransOpt = [
    { id: 1, label: "car" },
    { id: 2, label: "bus" },
    { id: 3, label: "train" },
  ];
  const myActOpt = [
    { id: 1, label: "public lake" },
    { id: 2, label: "park forest" },
    { id: 3, label: "city downtown" },
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

  useEffect(() => {
    localStorage.setItem("travelList", JSON.stringify(myListVar));
  }, [myListVar]);

  return (
    <div className="app-wrapper">
<header className="category-box title-bg hero-header">
  <div className="hero-content">
    <h1>Travel Planner</h1>
    <p>Plan trips, activities, and moments in one place</p>
  </div>
</header>

      <main className="main-content">
        <section className="category-box interaction-bg">
          <Input valueProp={myInputVar} changeProp={myInputFunc} />

          <div className="input-group">
            <div className="field-wrapper">
              <label>Transportation</label>
              <Dropdown
                valueProp={myTransVar}
                changeProp={myTransFunc}
                listOpt={myTransOpt}
              />
            </div>

            <div className="field-wrapper">
              <label>Activity</label>
              <Dropdown
                valueProp={myActVar}
                changeProp={myActFunc}
                listOpt={myActOpt}
              />
            </div>

            <div className="field-wrapper">
              <label>Travel Date</label>
              <DatePicker
                valueProp={myDateVar}
                changeProp={myDateFunc}
                minDate={today}
              />
            </div>
          </div>

          <button className="add-btn" onClick={myAddFunc}>Add</button>
        </section>

        <section className="category-box data-bg">
          <StatsBoard
            total={totalCount}
            completed={completedCount}
            active={activeCount}
          />
        </section>

        <section className="category-box list-bg">
          <DestinationList
            listProp={myListVar}
            toggleProp={myToggleVisitedStatus}
            deleteProp={deleteItem}
          />
        </section>
      </main>

      <footer>
        <p>© 2026 Portfolio Project | Built with React</p>
      </footer>
    </div>
  );
}
