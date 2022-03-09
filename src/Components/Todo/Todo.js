import React, { useState } from 'react';
import './Todo.css'
const Todo = () => {
    const [todoItem, setTodoItem] = useState({});
    console.log(todoItem);
    const hendleTodo = (e) => {
        e.preventDefault();
        let todos;
        if (localStorage.getItem("todos") === null) {
            todos = []
        } else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        todos.push(todoItem);
        localStorage.setItem("todos", JSON.stringify(todos));
        setTodoItem(todos);
    }
    const allTodos = JSON.parse(localStorage.getItem('todos'));

    function removeLocalTodos(todo, index) {
        let todos;
        if (localStorage.getItem("todos") === null) {
            todos = []
        } else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        todos.splice(todos.indexOf(index), 1)
        localStorage.setItem('todos', JSON.stringify(todos));
        setTodoItem(todos);

    }
    return (
        <div>
            <form onSubmit={hendleTodo}>
                <input type="text" onChange={(e) => setTodoItem(e.target.value)} name="todo" placeholder='Todo Name' className="todo_input" />
                <button type='submit' className="todo_button"><i className="fas fa-plus-square"></i></button>

            </form>
            <div className="todo_container">
                { allTodos?
                    allTodos.map((item) => <div className='d-flex justify-content-between border-bottom pb-2'> <h6>{item}</h6>
                        <button className='btn btn-danger' onClick={() => removeLocalTodos(allTodos, item)}>delete</button>
                    </div>)
               : null }
            </div>

        </div>
    );
};

export default Todo;