import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { addToDo, editToDo } from "../redux/action/actions";

const FormModel = ({ handleModal, open, editItem, editValue, editId }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editItem) {
      setInputValue(editValue);
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const empty = inputValue.trim();
    if (empty !== "") {
      if (!editItem) {
        dispatch(addToDo(inputValue));
      } else {
        dispatch(editToDo(editId, inputValue));
      }
      handleModal();
    } else {
      setError("*cannot be empty");
    }
  };

  return (
    <div className="container">
      <Modal show={open} onHide={handleModal}>
        <Modal.Header
          className={
            editItem ? 
            "bg-warning text-light" :
            "bg-info text-light"
          }
          closeButton
        >
          <Modal.Title>
            {" "}
            <strong> { !editItem ? "Add": "Edit" } Your Todo !</strong>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <div className="my-3">
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control text-capitalize"
                    placeholder="add a todo item"
                    value={inputValue}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                { error && (
                  <p className="text-danger text-center">{error}</p>
                  
                )}
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-light">
          <button
            type="button"
            className={
              editItem
                ? "btn btn-block btn-warning mt-1"
                : "btn btn-block btn-primary mt-1"
            }
            onClick={handleSubmit}
          >
            {editItem ? "Done" : "Add"}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FormModel;
