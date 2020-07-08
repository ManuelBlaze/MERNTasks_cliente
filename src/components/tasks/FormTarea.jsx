import React, { useContext, useState, useEffect } from "react";

import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
    
    //Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener función del context de tarea
    const tareasContext = useContext(tareaContext);
    const { errortarea, tareaseleccionada, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;

    //Effect que detecta si hay tarea seleccionada
    useEffect(() => {
        if (tareaseleccionada !== null) {
            setTarea(tareaseleccionada)
        } else {
            setTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada])

    //State del formulario
    const [tarea, setTarea] = useState({
        nombre: ''
    });

    const {nombre} = tarea;

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;

    //Array destructing para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;

    //Leer los valores del form
    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //Validar
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        //Revisar si es edicion o nueva tarea
        if (tareaseleccionada === null) {
            //tarea nueva
            //Agregar una tarea al State de Tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        } else {
            //tarea existente
            actualizarTarea(tarea);
            limpiarTarea();
        }
        //Pasar la validación
        //Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        //Reiniciar el Form
        setTarea({
            nombre: ''
        })
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        name="nombre"
                        className="input-text"
                        placeholder="Nombre tarea..."
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'} 
                        className="btn btn-primario ntn-submit btn-block"

                    />
                </div>
            </form>

            {errortarea ? <p className="mensaje error"><i class="fas fa-exclamation-circle"></i> Pon un nombre a tu tarea</p> : null}
        </div>
    )
}

export default FormTarea;
