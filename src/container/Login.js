import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.history.push('/home');
    }
    render() {
        return (
            <div>
                <div className='contentHeader'>
                    <a>主页/登录</a>
                </div>
                <p className='contentName1'>
                    用户名<input type="text"/>
                </p>
                <p className='contentName2'>
                    密码<input type="password"/>
                </p>
                <p className='contentName3'>
                    <button onClick={this.handleClick}>登录</button>
                </p>
            </div>
        )
    }
}
