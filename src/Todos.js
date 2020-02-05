import React, {useEffect, useState} from 'react';
import Todo from './Todo';
import axios from 'axios';

const Todos = ({}) => {
	let [todos, setTodos] = useState([]);
	let [form, setForm] = useState({
		title: "",
		body: ""
	});
	
	useEffect(() => {
		// 페이지가 열리면 할일 목록 받아오기
		axios.get("/todos")
			.then(response => {
				setTodos(response.data);
			});
	}, []);
	
	// 사용자 입력에 따른 form 데이터 변경
	const changeForm = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		});
	};
	
	// 할일 생성
	const submit = (e) => {
		// 페이지 새로고침 막기
		e.preventDefault();
		
		// 할일 생성 api 요청
		axios.post("/todos", form)
			.then(response => {
				// 할일 목록에 저장한 할일 추가
				setTodos([...todos, response.data]);
			})
	};
	
	return (
		<div className="todos">
			<form onSubmit={submit}>
				<input type="text" name="title" placeholder="할일 제목" onChange={changeForm}/>
				<input type="text" name="body" placeholder="할일 내용" onChange={changeForm}/>
				<button>할일 생성</button>
			</form>
			
			{todos.map(todo => <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>)}
		</div>
	);
};

export default Todos;