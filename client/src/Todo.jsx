import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

function Todo() {
    // stocker la liste des todos

    const [todos, setTodos] = useState([])

    // charges des todos depuis le serveur

    useEffect(() =>{
        axios.get('http://localhost:3001/Todo')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])

    // gérer de la suppression d'une todo

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteTodo/'+id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(err => console.log(err))
    } 
    // clic sur une todo pour la raturer

    const handleTodoClick = (id) => {
+        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo._id === id ? { ...todo, selected: !todo.selected } : todo
            )
        );
    }
    // affichage de la liste des todos

    return (
        <div className='app'>
            <div className="title-class">
                <h1>Welcome in your personnal To-do list</h1>
                <div className="section">
                <h4>what should you do ?</h4>
                <Link to='/create' className='add-btn'><FontAwesomeIcon icon={faPlus} /></Link>
                </div>
            </div>
            <div className='todos'>
                        {
                        todos.map((todo) => {
                            return <div
                            key={todo._id}
                            className={`todo ${todo.selected ? 'selected' : ''}`}
                            onClick={() => handleTodoClick(todo._id)}
                        >
                            <div className="checkbox"></div>
                            <div className='text-'>{todo.time}</div>
                            <div className='text'>{todo.activity}</div>
                            <div className='button-container'>
                                <Link to={`/update/${todo._id}`} className='update-btn'><FontAwesomeIcon icon={faPen} /></Link>
                                <button className='delete-btn' onClick={(e) => handleDelete(todo._id)}><FontAwesomeIcon icon={faTimes} /></button>
                            </div>
                        </div>
                        })
                        }
            </div>
        </div>
    )
}
export default Todo;