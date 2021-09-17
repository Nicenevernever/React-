import React, {Component} from 'react';
import './index.css';

class Footer extends Component {

    render() {

        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" />
                    </label>
                    <span>
                        <span>已完成{} / 全部{}</span>
                    </span>
                    <button className="btn btn-danger">清除已完成任务</button>
                </div>
            </div>
        );
    }
}

export default Footer;