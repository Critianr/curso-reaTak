import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import {TodoList} from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import {Modal} from "./Modal"
import {TodoForm} from "./TodoForm"
import { TodosLoading } from "./TodosLoading";
import { EmptyTodos } from "./EmptyTodos";
import {TodosError} from "./TodoError" 


function AppUI(){
  // asignar el valor a value
  const {error, 
    loading, 
    searchedTodos, 
    completeTodo,
     deleteTodo,
    openModal,
    setOpenModal
    } = React.useContext(TodoContext);

    return(
        <React.Fragment>
        <TodoCounter 
        // total={totalTodos} 
        // completed={completedTodos}
     
        />
        <TodoSearch 
        />
        
        
  
             <TodoList> 
             {error && <TodosError error={error} />}
            {loading && <TodosLoading />}
            {(!loading && !searchedTodos.length) && <EmptyTodos />}
              {searchedTodos.map(todo=>(
                <TodoItem 
                key={todo.text} text={todo.text} 
                completed={todo.completed} 
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}
                />
              ))} 
              
            </TodoList>
            {/* MODAL */}
            {!!openModal && (
              <Modal>
              <TodoForm />
            </Modal>
            )}
          {/* )} */}
        {/* </TodoContext.Consumer> */}
        <CreateTodoButton 
        setOpenModal={setOpenModal}
        />
     </React.Fragment>
    );
}

export {AppUI}