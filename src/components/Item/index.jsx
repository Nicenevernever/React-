import React, {Component} from 'react';
import './index.css';

class Item extends Component {
    render() {
        // eslint-disable-next-line no-unused-vars
        const {name, done} = this.props;
        return (
            <div>
                <li>
                    <label>
                        <input type="checkbox" defaultChecked={done}/>
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" style={{display:'none'}}>删除</button>
                </li>
            </div>
        );
    }
}

export default Item;