import { useState } from 'react';

import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await fetch('http://localhost:5000/todos');
      const data = await res.json();

      setTodos(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="container">
        <InputTodo fetchTodos={fetchTodos} />
        <ListTodos fetchTodos={fetchTodos} todos={todos} />
      </div>
    </>
  );
}

export default App;
