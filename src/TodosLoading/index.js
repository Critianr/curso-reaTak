import React from 'react';

function TodosLoading(){
    return (
    <div className='LoadingTodo-container'>
        <span className='Loading-Todo-completeIcon'></span>
         <p className='LoadingTodo-text'>Estamos cargando</p>
         <span className='LoadingTodo-deleteIcon'></span>
    </div>)
}
export {TodosLoading}

