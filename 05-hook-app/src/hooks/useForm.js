import { useState } from "react";

export const useForm = (form = {}) => {

    const [formSimple, setFormSimple] = useState(form)

    const onInputChange = ({target}) => {
        const {name, value} = target;
        
        setFormSimple({
            ...formSimple,
            [name]: value
        })
        // console.log({name, value});
    }

    const onResetForm = () => {
        setFormSimple(form)
    }
  return{
    ...formSimple,
    formSimple,
    onInputChange,
    onResetForm
  }
}
