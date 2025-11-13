import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formSimple, setFormSimple] = useState({
        username: 'Shino',
        email: 'shino@gmail.com'
    })

    const {username, email} = formSimple;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        
        setFormSimple({
            ...formSimple,
            [name]: value
        })
        // console.log({name, value});
    }

    useEffect(() => {

    },[])
    

  return (
    <>
    <h1>Formulario simple</h1>
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
    name="username"
    value={email}
    onChange={onInputChange}
     />
    </>
  )
}
