// 创建外壳组件
import React, {Component} from 'react'
import './App.css'
import Header from './components/Header'
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
    // 状态在哪里， 操作状态的方法就在哪里
    state = {
        todos:[
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '学习', done: false},
            {id: '004', name: '跑步', done: false},
        ]
    }
    addTodo = (todoObj) => {
        const {todos} = this.state;
        const newtodos = [todoObj, ...todos];
        this.setState({
            todos: newtodos,
        })
    }
    updateChecked = (id, done) => {
        const {todos} = this.state;
        const newTodos = todos.map((item) => {
            if (item.id === id) return {...item, done: done};
            else return item;
        })
        this.setState({
            todos: newTodos,
        })
    }
    render() {
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo = {this.addTodo}/>
                        <List todos = {this.state.todos} updateChecked = {this.updateChecked}/>
                        <Footer/>
                    </div>
                </div>

            </div>
        )
    }
}
