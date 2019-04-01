//함수형 컴포넌트이다. 파라미터로 받게되는 것은 prop이다 이를 비구조화 할당하여
//원래 (props) => {...} 를 해야하는 것을 ({form, children}) => { ... }
// -> jsx를 컴포넌트의 props로 넣어주려면 위와 같은 방법은 아주 편하다.

import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <div className="form-wrapper">
                {form}
            </div>
            <div className="todos-wrapper">
                { children }
            </div>
        </main>
    );
};

export default TodoListTemplate;

