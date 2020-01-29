// @flow
import React from 'react';

const Todo = ({todo}) => (
  <div className="todo">
      <p className="title">할일명: {todo.title}</p>
      <p className="body">할일 상세설명: {todo.body}</p>
  </div> 
);

export default Todo;