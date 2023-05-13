import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { isDoneTodo } from "../store/todoSlice";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import ImportantBtn from "./btns/ImportantBtn";
import EditBtn from "./btns/EditBtn";
import DeleteBtn from "./btns/DeleteBtn";

const ListTodo: React.FC = () => {

  const dispatch = useAppDispatch();
  const todoList  = useAppSelector((state) => state.todo.todoList);
  const [ isEditing, setEditing ] = useState(false); 
  const [ todo, setTodo ] = useState({});

  return (
    <div>
      {
        isEditing ? (
          <EditTodo 
          setTodo={setTodo} 
          todo={todo}
          setEditing={setEditing} 
          isEditing={isEditing}
          />
        ) : (
          <AddTodo />
        )
      }

      <ul className="list-wrapper">
        {
          todoList.map((state) => {
            return (
              <li className="list-item" key={state.id}>
                <input 
                  type="checkbox"
                  onChange={() => dispatch(isDoneTodo(state.id))}
                />

                <div className={state.done ? "done" : ""  || state.important ? " important" : "" }>
                  <div className="list-text">
                    <span className="text">{state.text}</span>
                  </div>
                </div>

                <div className="list-buttons">
                  <ImportantBtn 
                    id={state.id} 
                    done={state.done} 
                    important={state.important}
                  />

                  <EditBtn 
                    done={state.done} 
                    id={state.id} 
                    text={state.text}
                    setEditing={setEditing}
                    setTodo={setTodo} 
                    todo={todo}
                  />

                  <DeleteBtn 
                    id={state.id}
                  />
                </div>
              </li>
            )
          }) 
        }
      </ul>
    </div>
  );
};

export default ListTodo;