import React, {Component} from 'react';
import './index.css';

class Item extends Component {

    handleChange = (id) => {
        const {updateChecked} = this.props;
        return (event) => {
            updateChecked(id, event.target.checked);
        }
    }
    render() {
        const {id, name, done} = this.props;
        return (
            <div>
                <li>
                    <label>
                        <input type="checkbox" checked={done} onChange={this.handleChange(id)}/>
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" style={{display:'none'}}>删除</button>
                </li>
            </div>
        );
    }
}

export default Item;