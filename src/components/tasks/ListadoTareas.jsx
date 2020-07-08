import React, { Fragment, useContext } from 'react';
import Swal from 'sweetalert2';
import Tarea from './Tarea';

import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const ListadoTareas = () => {

    //Obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //Obtener tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    //Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>;

    //Array destructing para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;

    //Elimina un proyecto
    const onClickEliminar = () => {
        Swal.fire({
			title: "Estás Seguro?",
			text: "No es posible revertir esto!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#1a202d",
			cancelButtonColor: "#a00",
			confirmButtonText: "Si, Borralo!",
			cancelButtonText: "Cancelar",
		}).then((result) => {
            if (result.value) {
                eliminarProyecto(proyectoActual.id);
				Swal.fire({
					title: "Eliminado!",
					text: `El Proyecto ${proyectoActual.nombre} ha sido eliminado correctamente`,
					icon: "success",
					confirmButtonColor: "#2f3848",
				});
			}
		});
    }

    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea"><p>No hay Tareas</p></li>)
                    : tareasproyecto.map(tarea => (
                        <Tarea
                            key={tarea.id}
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
