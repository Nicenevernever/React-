import React, {Component} from 'react';
import './index.css';

class Footer extends Component {
    handleCheckAll = () => {
        return (event) => {
            this.props.checkAllTodo(event.target.checked);
        }
    }
    clearAll = () => {
        return () => {
            this.props.clearAllDoneTodo();
        }
    }
    render() {
        const {todos} = this.props;
        // 计算已完成的个数
        const doneCount = todos.reduce((pre, current) => {
            return pre + (current.done ? 1 : 0);
        }, 0)
        // 计算总数
        const allCount = todos.length;
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" onChange={this.handleCheckAll()} checked={doneCount === allCount && allCount !== 0}/>
                    </label>
                    <span>
                        <span>已完成{doneCount} / 全部{allCount}</span>
                    </span>
                    <button onClick={this.clearAll()} className="btn btn-danger">清除已完成任务</button>
                </div>
            </div>
        );
    }
}

export default Footer;