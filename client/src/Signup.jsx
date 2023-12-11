// import React from 'react'
// import { useState } from 'react';
// import './App.css'
// import axios from 'axios';

// function Signup() {
//     const [name, setName] = useState()
//     const [email, setEmail] = useState()
//     const [password, setPassword] = useState()

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         axios.post('http://localhost:3001/register',{name, email, password})
//         .then(result => console.log(result))
//         .catch(err => console.log(err))
//     }

//     return (
//         <div>
//             <div className='todo-upp-add'>
//                 <h2>Register</h2>
//                 <form onSubmit={handleSubmit} className='contain-all'>
//                 <div className="contenair-up-add">
//                         <label htmlFor="email">
//                             <strong>Name</strong>
//                         </label>
//                         <input type="text" 
//                         placeholder='Enter your name'
//                         autoComplete='off'
//                         name='name'
//                         onChange={(e) => setName(e.target.value)}/>
//                     </div>
//                     <div className="contenair-up-add">
//                         <label htmlFor="email">
//                             <strong>Email</strong>
//                         </label>
//                         <input type="text" 
//                         placeholder='Enter your email'
//                         autoComplete='off'
//                         name='email'
//                         onChange={(e) => setEmail(e.target.value)}/>
//                     </div>
//                     <div className="contenair-up-add" >
//                         <label htmlFor="email">
//                             <strong>Password</strong>
//                         </label>
//                         <input type="password"
//                         placeholder='enter your password'
//                         name='password' 
//                         onChange={(e) => setPassword(e.target.value)}/>
//                     </div>
//                     <div className="update-create">
//                         <button className='login-register' type='Submit'> Register </button>
//                     </div>
//                     <div className="update-create">
//                     <p>already have a account</p>
//                     <button className='login-register'> Login</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
// export default Signup;