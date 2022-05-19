import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { deleteToDo } from "../redux/action/actions";

function DeleteModal({ handleModal, open, id }) {
  const [count, setCount] = useState(30);
  const dispatch = useDispatch();

  useEffect(() => {
    if(count > 0) {
      setTimeout(() => {
        setCount(count-1);
      }, 1000);
    }
    if(count == 0){
      onConfirm(id)
    }
  }, [count])
  

  const onConfirm = () => {
    dispatch(deleteToDo(id));
    handleModal();
  }

  return (
    <div>
      <div className="container">
        <Modal show={open} onHide={handleModal}>
          <Modal.Header className="bg-danger text-light" closeButton>
            <Modal.Title>
              {" "}
              <strong> Delete Your Todo !</strong>{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-body">Timer: 00:{count} s</div>
          </Modal.Body>
          <Modal.Footer className="bg-light">
            <button
              type="button"
              className={"btn btn-danger mt-1"}
              onClick={onConfirm}
            >
              Delete
            </button>

            <button
              type="button"
              className={"btn btn-success mt-1"}
              onClick={handleModal}
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
      </div>
      );
    </div>
  );
}

export default DeleteModal;
