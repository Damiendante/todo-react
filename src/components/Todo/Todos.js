import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todos() {
    return (
        <div className="container">
            <h1>Todo List</h1>
            <TodoForm />
            <TodoList />
        </div>
    );
}

export default Todos;
