import React, { useState } from "react";

import FormModel from "./FormModel";
import TodoList from "./TodoList";

function Todo() {
  const [addOpen, setAddOpen] = useState(false);
  const [showTodo, setShowTodo] = useState(false);

  const showList = () => setShowTodo(!showTodo);
  const handleModal = () => setAddOpen(!addOpen);

  return (
    <div>
      <div className="main container-fluid row">
        <div className="my-2 text-center  text-dark">
          <h2 className="head"> Todo-Task </h2>
        </div>
        <div className="content col-10 my-2 text-center">
          <button className="mx-1 btn btn-sm btn-success" onClick={handleModal}>
            Add
          </button>
          <button className="mx-1 btn btn-sm btn-primary" onClick={showList}>
            { !showTodo ? "Show" : "Hide" } 
          </button>
        </div>
      </div>
      <hr />
      <div className="my-2">{showTodo && <TodoList />}</div>
      <div>
        {" "}
        {addOpen && <FormModel handleModal={handleModal} open={addOpen} />}
      </div>
    </div>
  );
}

export default Todo;
