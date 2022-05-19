import React from "react";

import Todo from "./components";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4 bg-light">
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
