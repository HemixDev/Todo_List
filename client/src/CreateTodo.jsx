import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus } from '@fortawesome/free-solid-svg-icons';


function CreateTodo() {
    const [activity, setActivity] = useState()
    const [time, setTime] = useState()
    const navigate = useNavigate()
    // fonction pour créer une nouvelle todo

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createTodo", {activity, time})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    // affichage du formulaire d'une todo

    return (
        <div>
            <div className='todo-upp-add'>
                <form onSubmit={Submit}>
                    <h2>Add Activity</h2>
                    <div className='contain-all'></div>
                        <div className="contain-update-create">
                            <label htmlFor="">Activity</label>
                            <input type="text" placeholder='Name of activity' className='form-control'
                            onChange={(e) => setActivity(e.target.value)}/>
                        </div>
                        <div className="contain-update-create">
                            <label htmlFor="">Hourly</label>
                            <input type="time" className='form-control'
                            onChange={(e) => setTime(e.target.value)}/>
                        </div>
                        <div className="update-create">
                            <button className='add-btn'><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTodo;