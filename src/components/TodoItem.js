import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component{
    render(){
        //text : todo 내용
        //checked : 체크박스 상태
        //id : todo의 고유 아이디
        //onToggle : 체크박스를 키고 끄는 함수
        //onRemove : 아이템을 삭제시키는 함수

        const { text, checked, id, onToggle, onRemove } = this.props;

        return(
            <div className="todo-item" onclick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation() //onToggle이 실행되지 않도록 함. -> 코드 실행시 해당 DOM의 부모의 클릭 이벤트에 연결되어있는 onToggle이 실행도니는데 onRemove -> onToggle 이렇게 실행이 되면서 코드가 의도치 않게 작동하여 삭제가
                                        //제대로 진행된지 않는. 즉, 이벤트의 확산을 멈춘다.
                    onRemove(id)}
                }>&times;</div>
                <div className={"todo-text ${checked && 'checked'}"}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark"></div>)
                }
            </div>
        );
    }
}

export default TodoItem;