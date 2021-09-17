import React, {Component} from 'react';
import {nanoid} from "nanoid";
import './index.css';

class Header extends Component {

    handleKeyUp = (event) => {
        console.log("Event: ",event);
        const {keyCode, target} = event;
        if (keyCode !== 13) return;
        if (target.value.trim() === ''){
            alert("输入不能为空")
            return;
        }

        const todoObj = {
            id: nanoid(),
            name: target.value,
            done: false
        }
        this.props.addTodo(todoObj);
        // 添加后输入框置空
        target.value = '';
    }


    render() {
        return (
            <div>
                <div className="todo-header">
                    <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
                </div>
            </div>
        );
    }
}

export default Header;