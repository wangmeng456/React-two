import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import All from './home/All';
import Good from './home/Good';
import Share from './home/Share';
import Ask from './home/Ask';
import Job from './home/Job';

export default class Home extends Component {
    render() {
        let url = this.props.match.url;
        console.log(url);
        return (
            <div>
                <div className='contentHeader'>
                    {/* <Link to='/home/all'>全部</Link>
                    <Link to='/home/good'>精华</Link>
                    <Link to='/home/share'>分享</Link>
                    <Link to='/home/job'>招聘</Link> */}

                    <Link to={url+'?tab=all'}>全部</Link>
                    <Link to={url+'?tab=good'}>精华</Link>
                    <Link to={url+'?tab=share'}>分享</Link>
                    <Link to={url+'?tab=ask'}>问答</Link>
                    <Link to={url+'?tab=job'}>招聘</Link>
                </div>
                <div>
                    {/* <Route path='/home/all' component={All} />
                    <Route path='/home/good' component={Good} />
                    <Route path='/home/share' component={Share} />
                    <Route path='/home/job' component={Job} />
                    <Route path='/home/:tab' component={List} /> */}

                    <Route path={`${url}`} component={All} />
                    {/* <Route path={`${url}/good`} component={Good} />
                    <Route path={`${url}/share`} component={Share} />
                    <Route path={`${url}/answer`} component={Answer} />
                    <Route path={`${url}/job`} component={Job} /> */}
                </div>
            </div>
        )
    }
}
