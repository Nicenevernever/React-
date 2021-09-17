import React, {Component} from 'react';
import './index.css';

class Item extends Component {
    state = {
        mouse: false,
    }
    // 鼠标移入移出的回调
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag});
        }
    }
    // 勾选取消勾选的回调
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        }
    }
    // 删除一个todo的回调
    handleDelete = (id) => {
        if (window.confirm("确定删除吗？")){
            this.props.deleteTodo(id);
        }
    }
    render() {
        const {id, name, done} = this.props;
        const {mouse} = this.state;
        return (
            <div>
                <li style={{background: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={() => {this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse ? 'block' : 'none'}}>删除</button>
                </li>
            </div>
        );
    }
}

export default Item;