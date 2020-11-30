import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Main = (props) => {
    const [pets, setPets] = useState();
    const [update, setUpdate] = useState(0);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data.pets))
    }, [update])

    const removePets = _id => {
        axios.delete(`http://localhost:8000/api/pets/delete/${_id}`)
            .then(res => setUpdate(update+1))
            .catch(err => console.log(err))
    }
    
    return(
        <div>
            <h1>These Pets Are Looking For A New Home!</h1>
            <table className="table table-dark">
                <tr>
                    <th>Pet Name</th>
                    <th>Pet Type</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                {
                    pets ? 
                    pets.map((pets, i) => {
                        return <tr>
                            <td><a href={`http://localhost:3000/pets/${pets._id}`}>{pets.name}</a></td>
                            <td>{pets.type}</td>
                            <td>{pets.description}</td>
                            <td><button onClick={() => removePets(pets._id)} className="btn btn-success">Adopt</button>&nbsp;&nbsp;<a href={`http://localhost:3000/pets/update/${pets._id}`} className="btn btn-primary">Update</a></td>
                        </tr>
                    }) : ""
                }
            </table>
        </div>
    )
}

export default Main;