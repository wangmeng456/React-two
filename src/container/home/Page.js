import React, { Component } from 'react'

export default class Page extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topic/'+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    // shouldComponentUpdate(){
        
    // }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.match.params.page !== this.props.match.params.page){
            let page = this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topic/'+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data});
                })
        }
    }
    render() {
        console.log(this.state.data);
        return (
            <div>
                <h1 dangerouslySetInnerHTML={{__html:this.state.data.title}}></h1>
                <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
            </div>
        )
    }
}