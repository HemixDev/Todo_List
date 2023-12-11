import React, {useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function UpdateTodo() {
    const {id} = useParams()
    const [activity, setActivity] = useState()
    const [time, setTime] = useState()
    const navigate = useNavigate()

    // chargement des données de la todo à mettre à jour

    useEffect(() =>{
        console.log("ID avant axios :", id);
        axios.get(`http://localhost:3001/getTodo/`+id)
        .then(result => {console.log(result.data)
            setActivity(result.data.activity)
            setTime(result.data.time)
        })
        .catch(err => console.log(err))
    }, [])
    // fonction pour update la todo

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateTodo/"+id, {activity, time})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    // affichage du formulaire d'update

    return (
        <div>
            <div className='todo-upp-add'>
                <form onSubmit={Update}>
                    <h2>Update Activity</h2>
                    <div className="contain-all">
                        <div className="contenair-up-add">
                            <div className="contain-update-create">
                                <label htmlFor="">Activity</label>
                                <input type="text" value = {activity} onChange={(e) => setActivity(e.target.value)}/>
                            </div>
                            <div className="contain-update-create">
                                <label htmlFor="">Hourly</label>
                                <input type="time"value = {time} onChange={(e) => setTime(e.target.value)}/>
                            </div>
                        </div>
                        <div className="update-create">
                            <button className='add-btn'><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UpdateTodo;