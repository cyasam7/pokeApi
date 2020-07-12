import React from 'react';

const Form = () =>{
    return(
        <div className="jumbotron">
            <div className="container">
                <div className="form-group">
                    <fieldset>
                        <label className="control-label h2">Escribe un pokemon en especifico</label>
                        <input className="form-control" type="text"/>
                    </fieldset>
                </div>
                <button className="btn btn-block btn-success">Buscar</button>
            </div>
        </div>
    )
}
export default Form