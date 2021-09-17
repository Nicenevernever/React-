import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {
    search = () => {
        const keyWord = this.keyWordElement.value;
        // 发送请求前通知App更新状态
        this.props.updateAppState({
            isFirst: false,
            isLoading: true,
        })
        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response => {
                // 发送请求后通知App更新状态
                this.props.updateAppState({
                    isLoading: false,
                    users: response.data.items,
                });},
            error => {
                // 请求失败后通知App更新状态
                this.props.updateAppState({
                    isLoading: false,
                    err: error.message,
                });}
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={(c) => {this.keyWordElement = c;}} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </ section>
        );
    }
}

export default Search;