import React, {Component} from 'react';
import Item from "../Item";
import './index.css';

class List extends Component {

    render() {
        console.log(this.props);
        const {todos, updateChecked} = this.props;
        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map((todo, index) => {
                            return <Item key={todo.id} {...todo} updateChecked = {updateChecked}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;