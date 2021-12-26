import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () =>{
    // realizar una funcion que devuelva el o retorne en setOpenModal para enviar a setOpenModeal
    // para cerrar el modal
    props.setOpenModal(prevState => !prevState)
    
  };
  return (
    <button 
    className="CreateTodoButton"
    onClick={onClickButton}
    >+</button>
  );
}

export { CreateTodoButton };