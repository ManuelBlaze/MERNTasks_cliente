import React, { useContext } from 'react';

import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Tarea = ({tarea}) => {

    //Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener función del context de tarea
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas } = tareasContext;

    //EXTRAER el proyecto
    const [proyectoActual] = proyecto

    //Funcion para eliminar
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id)
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado 
                    ? 
                        (
                            <button 
                                type="button"
                                className="completo"
                            
                            >Completo</button>
                        )
                    :
                        (
                            <button 
                                type="button"
                                className="incompleto"
                            
                            >Incompleto</button>
                        )
                }
            </div>
            
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                ><i className="fas fa-pen"></i></button>
                
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea.id)}
                ><i className="fas fa-trash"></i></button>
            </div>
        </li>
    )
}

export default Tarea;
