//TodoItem 컴포넌트 여러개를 렌더링해주는 역할
//리스트를 렌더링하게 될 때는, 특히 보여주는 리스트가 동적인 경우에는 함수형이 아닌 클래스형 컴포넌트로 작성.
// 그 이유는, 클래스형 컴포넌트로 작성해야 나중에 컴포넌트 성능 최적화를 할 수 있기 떄문.

import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoItemList extends Component{
    shouldComponentUpdate(nextProps, nextState){ //컴포넌트 라이프 사이클 메소드 중, shouldComponentUpdate는 컴포넌트가 리렌더링을 할지 말지 정해줌.default === true
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const {todo, onToggle, onRemove} = this.props;
        //todos todo 객체들이 들어있는 배열
        //onToggle 체크박스를 키고 끄는 함수
        //onRemove 아이템을 삭제시키는 함수

        const todoList = todo.map(
            ({id, text, checked}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id} //배열을 렌더링할 떄, 꼭 key값이 있어야함.
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;

//const todoList = todos.map(todo => ...) 이런 형태여야 하는데
// const todoList = todos.map(
//             ({id, text, checked}) => (
//                 <TodoItem
//                     id={id}
//                     text={text}
//                     checked={checked}
//                     onToggle={onToggle}
//                     onRemove={onRemove}
//                     key={id}
//                 />
//             )
//         );
// 이렇게 한 이유 -> 함수의 파라미터 부분에서 비구조화 핟랑을 하여 객체 내부의 값들을 따로 레퍼런스를 만들어줌.