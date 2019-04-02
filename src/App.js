import React, { Component } from 'react';
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {

    id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정


    state = {
        input : '',
        todos : [
            {id:0, text:' 리엑트 소개', checked : false},
            {id:1, text:' 리엑트 소개', checked : true},
            {id:2, text:' 리엑트 소개', checked : false},
        ]
    }

    handleChange = (e) => {
        this.setState({
           input: e.target.value // input 의 다음 바뀔 값
        });
    }

    handleCreate = () => {
        const { input, todos } = this.state;
        this.setState({
            input : '', //인풋 비우고
            // concat을 사용하여 배열에 추가
            // js에서는 보통 배열안에 새 데이터를 집어넣을 땐 주로 push를 사용함. 그런데 리엑트 state에서 배열을 다룰 때는 절대 push를 사용하면 안된다.
            // push 를 통하여 데이터를 추가하면 배열에 값이 추가되긴 하지만 가르키고 있는 배열은 똑같기 때문에 비교를 할 수 없습니다. 나중에 최적화를 하게 될 때, 배열을 비교하여 리렌더링을 방지를 하게 되는데요, 만약에 push 를 사용한다면 최적화를 할 수 없게 됩니다.
            todos : todos.concat({
                id : this.id++,
                text: input,
                checked : false
            })
        });
    }

    handleKeyPress = (e) => {
        // 눌려진 키가 Enter면 handleCreate 호출
        if(e.key === 'Enter'){
            this.handleCreate();
        }
    }

  render() {
        const {input} = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress
        } = this;
        // this.handleChange, ... 이것을 비구조화 할당으로 표현.

    return (
        <TodoListTemplate form={(
            <Form
              value={input}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate}
              />
        )}>
            <TodoItemList />
        </TodoListTemplate>
    );
  }
}

export default App;
