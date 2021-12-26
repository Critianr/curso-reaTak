import React from "react";


    function useLocalStorage(itemName, initialValue) {
        const [error, setError] = React.useState(false);
        const [loading, setLoading] = React.useState(true);
        const [item, setItem] = React.useState(initialValue);
      
        // localstorage.getitem permite agreagar 
        // El método getItem() de la interfaz Storage devuelve el valor de la clave cuyo nombre se le pasa por parámetro.
        React.useEffect(() => {
          setTimeout(() => {
            try {
        const localStorageItem = localStorage.getItem(itemName);
        // variable declarada vacia para que inicio si null o 0 
        // paraque inicie a guardar las tareas al inicio de un usuario nuevo
        let parsedItem; //se envia al reack hook 
      // un condicional: verificar si no hay nada en local storage
        if (!localStorageItem) {
          // setitem va crear elemento Item_v1, al principioo va hacer un arrary vacio
          localStorage.setItem(itemName, JSON.stringify([initialValue]));
          parsedItem = initialValue; //cuando recien entremos el array ess vacio
        } else { // si no ya yiene unos Item o tarea creados
          // parse convierte un array con Item eos usuarios
          parsedItem = JSON.parse(localStorageItem);
        }
      
        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }
      }, 1000);
      });
          // funcion como puente llama 
          const saveItem = (newItem) => {
            // convertir en un string todo los Items
            const stringifiedItem = JSON.stringify(newItem);
            // llamar local storange guardar esta informacion Item_v1
            localStorage.setItem(itemName, stringifiedItem);
            // modificar el estado
            setItem(newItem);
          };
          return {item, 
            saveItem, 
            loading,
            error,
        }
      }

export {useLocalStorage};