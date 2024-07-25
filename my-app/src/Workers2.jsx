import React, { useState } from "react";
import Header from "./Components/Header";
import WorkersData2 from "./Components/WorkesData2";
import Sidebar from "./Components/Sidebar";

function Workers2() {
  const [selected, setSelected] = useState("Departments");

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{ selected, setSelected }} />
        <main>
          <WorkersData2 />
        </main>
      </div>
    </>
  );
}

export default Workers2;
