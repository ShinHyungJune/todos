import React from 'react';
import Todo from './Todo';

const Todos = ({}) => {
    let todos = [ // 임시로 가상 할일목록 설정
        {
            id: 1,
            title: "빨래",
            body: "수건을 복도 펜트리, 사복은 드레스룸"
        },
        {
            id: 2,
            title: "식기세척",
            body: "식기세척기에 넣고 고온건조"
        },
        {
            id: 3,
            title: "먼지청소",
            body: "거실과 안방 공기청정기 가동, 창문 다 열고 식탁 의자 올려놓은 다음에 로봇청소기 돌리기"
        },
    ];

    return (
       <div className="todos">
           {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
       </div>
    );
}
export default Todos;