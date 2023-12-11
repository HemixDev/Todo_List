import { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Todo from './Todo';
import CreateTodo from './CreateTodo';
import UpdateTodo from './UpdateTodo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo />}></Route>
          <Route path='/create' element={<CreateTodo />}></Route>
          <Route path='/update/:id' element={<UpdateTodo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
