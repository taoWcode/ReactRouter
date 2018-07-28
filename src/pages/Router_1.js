/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-28 11:26:25
 * @version $Id$
 */
/*最基础的路由*/

import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

const RouterPage1 = ()=>{
		return (
			<Router>
				<div>
					<ul className="m-nav">
						<li>
							<NavLink to="/">首页</NavLink>
						</li>
						<li>
							<NavLink to="/About">关于我们</NavLink>
						</li>
						<li>
							<NavLink to="/Topics">主题</NavLink>
						</li>
					</ul>
					
					<Route path = '/' exact component ={Home}/>
					<Route path = '/About' component = {About}/>
					<Route path = '/Topics' component = {Topics}/>
				</div>
			</Router>
			)
}


const Home = ()=> {
	return (<div>Home</div>)
}

const About = (props)=>{ 
	return (<div>About</div>);
}

const Topics = (props) =>{
	console.log(props);
	return (<div>
			<h2>主体列表</h2>
			
			<ul>
				<li>
					<NavLink to={`${props.match.url}/rendering`}>使用React渲染</NavLink>
				</li>
				<li>
					<NavLink to={`${props.match.url}/components`}>组件</NavLink>
				</li>
				<li>
					<NavLink to={`${props.match.url}/props-v-state`}>属性 v. 状态</NavLink>
				</li>
			</ul>
			
			<div>
			<Route path = {`${props.match.url}/:topicId`} component={Topic}/>
			

			<Route exact path={props.match.url} render= { ()=>(<h3>请选择一个主题</h3>)} />
			
			
			</div>
			

		</div>);
}			

const Topic =({match})=>{
	return (<div>
		<h3>{match.params.topicId}</h3>
	</div>)
}
export default RouterPage1;

