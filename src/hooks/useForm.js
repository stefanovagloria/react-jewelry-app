import { useState } from "react";

const useForm = (initialValues, submitHandler) => {

    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {

        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e, defaultParameter) => {
        e.preventDefault();

        await submitHandler(values, defaultParameter);

       setValues(initialValues);
    }

    return { values, onChange, onSubmit };
}

export default useForm;