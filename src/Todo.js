import React, {useState} from 'react';
import axios from 'axios';

const Todo = ({todo, todos, setTodos}) => {
	let [updateMode, setUpdateMode] = useState(false);
	let [form, setForm] = useState({
		title: todo.title,
		body: todo.body
	});
	
	const changeForm = (e) => {
		setForm({
			...form,
			[e.target.name] : e.target.value
		});
	};
	
	const update = (e) => {
		e.preventDefault();
		
		axios.patch("/todos/" + todo.id, form)
			.then(response => {
				todos = todos.map(todoData => {
					console.log(response.data);
					if(todoData.id === response.data.id)
						return response.data;
					
					return todoData;
				});
				
				setTodos(todos);
			});
		
		setUpdateMode(false);
	};
	
	const remove = () => {
		axios.delete("/todos/" + todo.id)
			.then(response => {
				todos = todos.filter(todoData => {
					return todoData.id !== todo.id
				});
				
				setTodos(todos);
			});
	};
	
	return (
		<div className="todo">
			{updateMode ? (
				<form onSubmit={update}>
					<input type="text" name="title" defaultValue={form.title} onChange={changeForm}/>
					<br/>
					<input type="text" name="body" defaultValue={form.body} onChange={changeForm}/>
					<button>완료</button>
				</form>
			) : (
				<div>
					<p className="title">할일명: {todo.title}</p>
					<p className="body">할일 상세설명: {todo.body}</p>
					<button onClick={() => {setUpdateMode(true)}}>수정</button>
				</div>
			)}
			<button onClick={remove}>삭제</button>
		</div>
	);
}

export default Todo;