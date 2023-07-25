import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Peter Palmer"
        avatar="https://randomuser.me/api/portraits/men/85.jpg"
        online
        status
      />
      <Contact
        name="Teresa Welch"
        avatar="https://randomuser.me/api/portraits/women/36.jpg"
      />
      <Contact
        name="Mabel Reyes"
        avatar="https://randomuser.me/api/portraits/women/41.jpg"
        online
        status
      />
    </div>
  );
}

export default App;
