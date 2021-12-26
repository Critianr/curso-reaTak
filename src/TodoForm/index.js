import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewnewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal
          }= React.useContext(TodoContext);
    // manejador
    const onChange = (event) =>{
       setNewnewTodoValue(event.target.value)
    }
    const onCancel = ()=>{
        setOpenModal(false)
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)

    }
    return(
        
        <form onSubmit={onSubmit}>
            <label>Escriba tu nuevo TODO</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="escribe" />
            <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick = {onCancel}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type= "submit"
        >
          Añadir
          </button>
      </div>
        </form>
    );
}
export {TodoForm};