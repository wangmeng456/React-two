import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class All extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let page = this.props.location.search;
        console.log(page);
        fetch('https://cnodejs.org/api/v1/topics'+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
            console.log(res.data);
        })
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.location.search !== this.props.location.search){
            let page = this.props.location.search;
            fetch('https://cnodejs.org/api/v1/topics'+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data});
                })
        }
    }
    render() {
        var p=[1,2,3,4,5,6,7,8,9,10];
        var u=this.props.location.search.split("&")[0] ? this.props.location.search.split("&")[0] : '?tab=all';
        return (
            <div className="contentUl">
                {
                    this.state.data.map((item)=>(
                        <div className="contentLi">
                            <img src={item.author.avatar_url} alt={item.author.loginname} />
                            <span style={{marginLeft:"8px"}}>{item.reply_count}/</span>
                            <span style={{color:"#ddd"},{fontSize:"10px"}}>{item.visit_count}</span>
                            <a className="contentSpan"> 置顶 </a>
                            <Link to={'/topic/' + item.id} style={{color:"#000"}}>{item.title}</Link>
                            <span style={{color:"#000"}, {float:"right"}}>2天前</span>
                            <img style={{float:"right"}} src={item.author.avatar_url} alt={item.author.loginname} />
                        </div>
                    ))
                }
                {
                    p.map((item)=>(
                        <li className="contentFooter"><Link to={`${u}&page=${item}`}>{item}</Link></li>)
                    )
                }
            </div>
        )
    }
}