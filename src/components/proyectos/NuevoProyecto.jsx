import React, { Fragment, useState } from 'react'

const NuevoProyecto = () => {

    //state para el proyecto
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    //Extraer nombre
    const { nombre } = proyecto;

    //Lee el contenido del input
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    //Cuando se realiza un submit
    const onSubmitProyecto = e => {
        e.preventDefault();

        //Validar el proyecto

        //Agregar al state

        //Reiniciar el Form
    }

    return (
        <Fragment>
            <button 
                type="button"
                className="btn btn-block btn-primario"
                >
                Nuevo Proyecto
            </button>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <input 
                    type="text" 
                    name="nombre" 
                    placeholder="Nombre Proyecto"
                    className="input-text"
                    value={nombre}
                    onChange={onChangeProyecto}
                />

                <input 
                    type="submit" 
                    value="Agregar" 
                    className="btn btn-primario btn-block"
                />
            </form>
        </Fragment>
    )
}

export default NuevoProyecto;
