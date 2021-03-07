import React, {useState } from 'react'
import { useForm } from '../../../Hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {


    const [formValues, handleInpuitchange] = useForm({
        name:'',
        email:'',
        password:''
    });
    const {name,email,password} = formValues;
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formValues);
    }
    return (
        <form onSubmit={handleSubmit} >
          <h1>FormWithCustomHook</h1>
          <hr/>
        <div className="form-group">
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInpuitchange}
            />
        </div>
        <div className="form-group">
            <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={email}
                onChange={handleInpuitchange}
            />
        </div>
        <div className="form-group">
            <input
                type="password"
                name="password"
                className="form-control"
                placeholder="*****"
                value={password}
                onChange={handleInpuitchange}
            />
        </div>
        <button type="submit" className="btn btn-primary">
            Guardar
        </button>
        </form>
    )
}
