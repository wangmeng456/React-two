import React, { Component } from 'react';
import Header from './components/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import Start from './container/Start';
import About from './container/About';
import Login from './container/Login';
import Page from './container/home/Page';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className="content">
                            <Route path='/home' component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/login' component={Login} />
                            <Route path='/topic/:page' component={Page} />
                        </div>
                        <div className="sider">
                            <div className="siderDiv">
                                <p>CNode：Node.js专业中文社区</p>
                                <a>您可以 登录 或 注册 , 也可以</a>
                                <br/>
                                <button>通过 GitHub 登录</button>
                            </div>
                            <div className="siderDiv">
                                <img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/>
                                <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"/>
                                <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
                            </div>
                            <div className="siderDiv">
                                <div className="siderDivHeader">无人回复的话题</div>
                                <p>node安装完成后npm -v检查报错</p>
                                <p>前端react window.location.href='下载路径'...</p>
                                <p>一种支持插件式开发的命令行工具开发模式</p>
                                <p>请问缓存的内存模型是什么呢</p>
                                <p>Hackers周刊第十期（2019-11-03）</p>
                            </div>
                            <div className="siderDiv">
                                <div className="siderDivHeader">积分榜   TOP 100 >></div>
                                <p>21755 i5ting</p>
                                <p>15675 alsotang</p>
                                <p>9350 leapon</p>
                                <p>9150 atian25</p>
                                <p>8780 jiyinyiyong</p>
                                <p>7335 yakczh</p>
                                <p>6825 im-here</p>
                                <p>6095 DevinXian</p>
                                <p>5815 chapgaga</p>
                                <p>5350 magicdawn</p>
                            </div>
                            <div className="siderDiv">
                                <div className="siderDivHeader">友情社区</div>
                                <img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png"/>
                                <img src="https://static2.cnodejs.org/public/images/golangtc-logo.png"/>
                                <img src="https://static2.cnodejs.org/public/images/phphub-logo.png"/>
                                <img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"/>
                            </div>
                            <div className="siderDiv">
                                <div className="siderDivHeader">客户端二维码</div>
                                <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
                                <span style={{textAlign:"center"}}><p>客户端源码地址</p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
