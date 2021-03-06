import React, { useContext } from 'react';

import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Tarea = ({tarea}) => {

    //Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener función del context de tarea
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, actualizarTarea, guardarTareaActual } = tareasContext;

    //EXTRAER el proyecto
    const [proyectoActual] = proyecto

    //Funcion para eliminar
    const tareaEliminar = id => {
        eliminarTarea(id, proyectoActual._id);
        obtenerTareas(proyectoActual.id)
    }

    //Modificar el estado de las tareas
    const cambiarEstado = tarea => {
        if (tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        actualizarTarea(tarea);
    }

    //Agrega tarea actual cuando el usuario da click en editar
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
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
                                onClick={() => cambiarEstado(tarea)}
                            >Completo</button>
                        )
                        :
                        (
                            <button 
                                type="button"
                                className="incompleto"
                                onClick={() => cambiarEstado(tarea)}                    
                            >Incompleto</button>
                        )
                }
            </div>
            
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea)}
                ><i className="fas fa-pen"></i></button>
                
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea._id)}
                ><i className="fas fa-trash"></i></button>
            </div>
        </li>
    )
}

export default Tarea;
