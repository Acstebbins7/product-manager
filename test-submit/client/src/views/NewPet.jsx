import React, { useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const NewPet = (props) => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        descritption: "",
        skills1: "",
        skills2: "",
        skills3: ""
    })
    const [error, setError] = useState({});

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/new", form)
            .then(res => {
                console.log(res);
                console.log(form);
                if(res.data.error){
                    console.log(res.data.error.errors)
                    setError(res.data.error.errors)
                } else {
                    console.log("It Worked!");
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }
    return(
        <div>
            <h2>Register a Pet in need!</h2>
            <Form onSubmitHandler={onSubmitHandler} form={form} onChangeHandler={onChangeHandler} error={error}/>
        </div>
    )
}

export default NewPet;