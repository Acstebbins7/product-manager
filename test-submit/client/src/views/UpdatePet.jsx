import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const UpdatePet = (props) => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        descritption: "",
        skills1: "",
        skills2: "",
        skills3: ""
    })
    const [error, setError] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => setForm(res.data.pets));
    }, [])

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props._id}`, form)
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
            <h1>Edit Pet!</h1>
            <Form onSubmitHandler={onSubmitHandler} form={form} onChangeHandler={onChangeHandler} UpdatePet={UpdatePet} error={error}/>
        </div>
    )
}

export default UpdatePet;