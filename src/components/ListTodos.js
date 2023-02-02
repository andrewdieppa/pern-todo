import { useEffect } from 'react';

import EditTodo from './EditTodo';

const ListTodos = props => {
  const { fetchTodos, todos } = props;

  const handleDelete = async id => {
    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      fetchTodos();
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="mt-4">
      <ul>
        {todos.map(todo => {
          return (
            <li
              className="d-flex justify-content-between mb-2 border-bottom p-2"
              key={todo.todo_id}
            >
              {todo.description}
              <div className="d-flex">
                <EditTodo todo={todo} />
                <button
                  className="btn btn-danger"
                  onClick={handleDelete.bind(null, todo.todo_id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListTodos;
