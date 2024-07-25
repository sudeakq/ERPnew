import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Admin from "./Components/Admin";

function AdminPage() {
  const [selected, setSelected] = useState("Admin");

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar {...{ selected, setSelected }} />
        <main>
          <Admin />
        </main>
      </div>
    </>
  );
}

export default AdminPage;
