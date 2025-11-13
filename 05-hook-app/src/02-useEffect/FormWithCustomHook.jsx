import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const {formSimple, onInputChange, username, email, password, onResetForm} = useForm({
    username: '',
    email: '',
    password: ''
  })

  // const {username, email, password} = formSimple


  return (
    <>
    <h1>Formulario con custom hook</h1>
    <hr />

    <input type="text"
    className="form-control "
    placeholder="Username"
    name="username"
    value={username}
    onChange={onInputChange}
     />

     {
        username === 'Shino' && <Message/>
     }
    <input type="email"
    className="form-control mt-2"
    placeholder="Username"
    name="email"
    value={email}
    onChange={onInputChange}
     />

    <input type="password"
    className="form-control mt-2"
    placeholder="Username"
    name="password"
    value={password}
    onChange={onInputChange}
     />

     <button className="btn btn-primary" onClick={ () => onResetForm() }>Borrar</button>
    </>
  )
}
