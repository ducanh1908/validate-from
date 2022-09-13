import React from 'react';

import TodoForm from './index';

ListTodo.propTypes = {
    
};

function ListTodo() {

    const handleTodoFormSubmit = (values) => {
        console.log('form submit', values);
    }
    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}/>
        </div>
    );
}

export default ListTodo;