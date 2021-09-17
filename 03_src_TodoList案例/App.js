// 创建外壳组件
import React, {Component} from 'react'
import './App.css'
import Header from './components/Header'
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
    // 状态在哪里， 操作状态的方法就在哪里
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true },
            {id: '002', name: '睡觉', done: true },
            {id: '003', name: '代码', done: false },
            {id: '004', name: '逛街', done: false },
        ]
    }
    addTodo = (todoObj) => {
        const {todos} = this.state;
        const newTodos = [todoObj, ...todos];
        this.setState({
            todos: newTodos,
        })
    }
    updateTodo = (id, done) => {
        // 获取状态中的todos，查找替换
        const {todos} = this.state;
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return {...todoObj, done: done};
            else return todoObj;
        })
        this.setState({
            todos: newTodos,
        })
    }
    deleteTodo = (id) => {
        // 获取状态中的todos，查找删除
        const {todos} = this.state;
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        })
        this.setState({todos: newTodos});
    }
    // 用于全选Todo
    checkAllTodo = (done) => {
        const {todos} = this.state;
        const newTodos = todos.map((todoObj) => {
            return {...todoObj, done: done};
        })
        this.setState({todos: newTodos});
    }
    clearAllDoneTodo = () => {
        const {todos} = this.state;
        const newTodos = todos.filter((todoObj) => {
            return todoObj.done === false;
        })
        this.setState({todos: newTodos});
    }
    render() {
        const {todos} = this.state;
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo = {this.addTodo}/>
                        <List todos = {todos} updateTodo = {this.updateTodo} deleteTodo = {this.deleteTodo}/>
                        <Footer todos = {todos} checkAllTodo = {this.checkAllTodo} clearAllDoneTodo = {this.clearAllDoneTodo}/>
                    </div>
                </div>

            </div>
        )
    }
}
