import React, { useState } from "react";
import "../components/todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-feed">
        <div className="main-div">
          <h1> TODO List with Redux</h1>
        </div>
        <div className="add-items">
          <input
            type="text"
            placeholder="Add Items"
            className="input-field"
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(addTodo(inputData), setInputData(""));
            }}
          >
            Add
          </button>
        </div>
        <div className="show-items">
          {list.map((elem) => {
            return (
              <div
                key={elem.id}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                  width: "300px",
                  height: "auto",
                  borderRadius: "5px",
                  color: "black",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {elem.data}
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch(deleteTodo(elem.id))}
                  style={{ marginLeft: "auto" }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <div className="bottom-button">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(removeTodo())}
          >
            {" "}
            <span>Remove All</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
