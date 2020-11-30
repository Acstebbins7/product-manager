import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OnePet = (props) => {
    const [onePet, setOnePet] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => setOnePet(res.data.pets))
    }, [])
    return(
        <div>
            <h1>Welcome To The Pet Info For: {onePet.name}</h1>
            <h3>Type: {onePet.type}</h3>
            <h3>Description: {onePet.description}</h3>
            <h3>Skill 1: {onePet.skill1}</h3>
            <h3>Skill 2: {onePet.skill2}</h3>
            <h3>Skill 3: {onePet.skill3}</h3>
            <button className="btn btn-info">Like</button>&nbsp;&nbsp;<counter>Likes</counter>
        </div>
    )
}
export default OnePet;