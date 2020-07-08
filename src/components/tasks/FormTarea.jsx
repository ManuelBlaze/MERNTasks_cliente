import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const FormTarea = () => {

    //Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;

    //Array destructing para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;

    const onSubmit = e => {
        e.preventDefault();

        //Validar

        //Pasar la validación

        //Agregar una tarea al State de Tareas

        //Reiniciar el Form
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onsubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text" 
                        name="nombre"
                        className="input-text"
                        placeholder="Nombre tarea..."
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit" 
                        value="Agregar Tarea" 
                        className="btn btn-primario ntn-submit btn-block"

                    />
                </div>
            </form>
        </div>
    )
}

export default FormTarea;
