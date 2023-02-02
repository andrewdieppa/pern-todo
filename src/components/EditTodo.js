import { useState } from 'react';

const EditTodo = props => {
  const { todo } = props;
  const [description, setDescription] = useState(todo.description);

  const submitHandler = async e => {
    e.preventDefault();

    try {
      const body = { description };
      await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      console.log(`changed id: ${todo.todo_id}`);

      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <form
              className="modal-body d-flex flex-column"
              onSubmit={submitHandler}
            >
              <input
                className="mb-2"
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
              <button className="btn btn-primary align-self-center">
                Save
              </button>
            </form>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
