import React from 'react';
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext();
// la funcion va hacer una atajo para llegar a 
// todocounte.provider darle los estados que queremos compartir

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false)
    
      // const [searchValue, setSearchValue] = React.useState('');
      
      // const completedItem = Item.filter(todo => todo.completed == true);
      const completedTodos  = todos.filter(todo  => !!todo.completed).length;
      const totalTodos  = todos.length;
    
      let searchedTodos = [];
      if(!searchValue.length >= 1){
        searchedTodos  = todos
      }else{
        searchedTodos  = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText =  searchValue.toLowerCase();
          return todoText.includes(searchText)
        });
      }
    
  const addTodo = (text) =>{
    const newTodos = [...todos];
    // iniciar un nuevo objeto
    // enviamos esos datos al conectar context
      newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
      
    }; 
    const completeTodo = (text) =>{
    // entrar la posicion de la lista y modificarlo encontar 
    // ese todo cual condicion debe cambiar para editarlo
      const todoIndex = todos.findIndex(todo => todo.text === text);
      // sprint opereitor ... newItem inyectar Item los Item
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      // actualizar nuestro estado
      saveTodos(newTodos);
      // Item[todoIndex] = {
      //   text: Item[todoIndex].text,
      //   completed: true
      // }
    };
    const deleteTodo = (text) =>{
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    
    }
    return(
//  este provider va envolver esta aplicacion
<TodoContext.Provider value={{
loading,
error,
totalTodos,
completedTodos,
searchValue,
setSearchValue,
searchedTodos,
addTodo,
completeTodo,
deleteTodo,
// props del modal pasados al componente appui.js
openModal,
setOpenModal,
}}>
{/* tenga por dentro cual quier omponente para que llame aqui y utiilzar los props para consumir*/}
{props.children}
</TodoContext.Provider>

    )
}

// envuelve la aplicacion en app context


<TodoContext.Consumer></TodoContext.Consumer>

export {TodoContext, TodoProvider};