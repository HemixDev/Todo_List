const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./models/Todos')
const CountsModel = require('./models/Counts')

const app = express()
app.use(cors())
app.use(express.json())

// Connexion à la base de données MongoDB

mongoose.connect('mongodb://127.0.0.1:27017/Todo_List')

// Routes pour les opérations de CRUD sur les todos

app.get('/Todo', (req,res) => {
    TodoModel.find({})
    .then(todos => res.json(todos))
    .catch(err => res.json(err))
})

app.get('/getTodo/:id', (req, res) => {
    const id = req.params.id;
    TodoModel.findById({_id:id})
    .then(todos => res.json(todos))
    .catch(err => res.json(err))
})

app.delete('/deleteTodo/:id', (req, res) => {
    const id = req.params.id;   
    TodoModel.findByIdAndDelete({_id: id})
    .then(todos => res.json(todos))
    .catch(err => res.json(err))
})

app.put('/updateTodo/:id', (req, res) => {
    const id = req.params.id;
    TodoModel.findByIdAndUpdate({_id: id}, {
        activity: req.body.activity,
        time: req.body.time})
    .then(todos => res.json(todos))
    .catch(err => res.json(err))
})
// app.post("/register", (req, res) => {
//     CountsModel.create(req.body)
//         .then(register => {
//             console.log("Registration successful:", register);
//             res.json(register);
//         })
//         .catch(err => {
//             console.error("Error during registration:", err);
//             res.status(500).json(err);
//         });
// });

app.post("/createTodo", (req, res) => {
    TodoModel.create(req.body)
    .then(todos => res.json(todos))
    .catch(err => res.json(err))
})

// Écoute le serveur sur le port 3001

app.listen(3001, () => {
    console.log("server is running")
})