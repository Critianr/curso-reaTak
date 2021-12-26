import React from "react";
import { TodoContext} from './TodoContext'
import './TodoCounter.css'
// const estilos={  
//     color: 'red',
//     backgroundColor:'yellow',
// }
function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return(
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}
// obliga al importar el modulo a escribirlo exactamente
export {TodoCounter};