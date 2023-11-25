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

        console.log('Submitting..')

        await submitHandler(values, defaultParameter);
    }

    return { values, onChange, onSubmit };
}

export default useForm;