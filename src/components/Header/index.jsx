import React, {Component} from 'react';
import './index.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="todo-header">
                    <input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                </div>
            </div>
        );
    }
}

export default Header;