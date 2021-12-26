import React from "react";
import { TodoProvider } from "./TodoContext";
import { AppUI } from "./AppUI";

// import './App.css';
// const defaultItem = [
//   {text: 'Cortar cebolla' , completed: true},
//   {text: 'data scines' , completed:false},
//   {text:  'backend' , completed:false}

// ]
// el nombre de customer react hook
// extraer la logica de localstorage
// los parametros recoge los elementos  que van a cambiar

function App() {
  // const [Item, saveItem] = useLocalStorage('Item_V1');
  
  return (
   <TodoProvider>
   <AppUI />
   </TodoProvider>
  );
}

export default App;
