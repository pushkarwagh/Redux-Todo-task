import React, { useState } from "react";
import { useSelector } from "react-redux";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";

import DeleteModal from "./DeleteModal";
import FormModel from "./FormModel";
import LikeTodo from "./FavTodo";

function TodoList() {
  const [open, setOpen] = useState({
    editOpen: false,
    delOpen: false,
  });

  const [id, setId] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
  // const[like, setLike] = useState(false);

  const list = useSelector((state) => state.TodoReducer.list);

  const handleEditModal = () => setOpen({ ...open, editOpen: !open.editOpen });
  const handleDelModal = () => setOpen({ ...open, delOpen: !open.delOpen });

  // const handleLike = () => {
  //  setLike(!like);
   
  // };

  const handleEdit = (id, title) => {
    setId(id);
    setTitleValue(title);
    setToggleButton(true);
    setOpen({ ...open, editOpen: !open.editOpen });
  };

  const handleDelete = (id) => {
    setId(id);
    setOpen({ ...open, delOpen: !open.delOpen });
  };

  return (
    <div className="main container-fluid row">
      <div className="content col-10">
        <h3 className="head"> TODO List</h3>
        {list.length > 0 ? (
          <div className="head">
            {Object.values(list).map((element, i) => {
              return (
                <div className="mt-4" key={i}>
                  <div>
                    <table className="container-table table-striped table shadow">
                      <thead>
                        <tr>
                          <th> Fav </th>
                          <th> Todo </th>
                          <th> Actions </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr key={element.id}>
                          <td>
                            {" "}
                            <LikeTodo/>
                            {/* <FontAwesomeIcon
                              icon={faStar}
                              onClick={handleLike}
                              style={{ color: `${like ? "red" : "black"}` }}
                            /> */}
                          </td>
                          <td> {element.title} </td>
                          <td>
                            <button
                              className="mx-1 btn btn-sm btn-warning"
                              onClick={() =>
                                handleEdit(element.id, element.title)
                              }
                            >
                              {" "}
                              Edit{" "}
                            </button>

                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(element.id)}
                            >
                              {" "}
                              Delete{" "}
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="my-2 text-center text-info">please, add a todo</div>
        )}
      </div>
      <div>
        {open.editOpen && (
          <FormModel
            handleModal={handleEditModal}
            open={open.editOpen}
            editItem={toggleButton}
            editValue={titleValue}
            editId={id}
          />
        )}
      </div>
      <div>
        {open.delOpen && (
          <DeleteModal
            handleModal={handleDelModal}
            open={open.delOpen}
            id={id}
          />
        )}
      </div>
    </div>
  );
}
export default TodoList;
