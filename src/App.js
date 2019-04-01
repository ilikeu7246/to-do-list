import React, { Component } from 'react';
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
        <TodoListTemplate form={<Form />}>
          <div>여기엔 children 자리구요.</div>
        </TodoListTemplate>
    );
  }
}

export default App;
