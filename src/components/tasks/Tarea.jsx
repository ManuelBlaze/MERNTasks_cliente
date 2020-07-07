import React from 'react'

const Tarea = ({tarea}) => {
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
                ><i className="fas fa-trash"></i></button>
            </div>
        </li>
    )
}

export default Tarea;
