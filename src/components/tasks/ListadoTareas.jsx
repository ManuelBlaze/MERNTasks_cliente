import React, { Fragment, useContext } from 'react'
import Tarea from './Tarea';
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {

    //Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>;

    //Array destructing para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;

    const tareasProyecto = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir colores', estado: false},
        {nombre: 'Elegir Plataformas de Pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true}
    ];

    //Elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay Tareas</p></li>)
                    : tareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button 
                className="btn btn-primario"
                type="eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    )
}

export default ListadoTareas;
