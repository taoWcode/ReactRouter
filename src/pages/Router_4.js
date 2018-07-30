/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-28 18:16:41
 * @version $Id$
 */

/*自定义链接*/

import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

const RouterPage4 = ()=>{
	return (
		<Router>
			<div>
				<OldSchoolMenuLink activeOnlyWhenExact = {true} to = "/" label="Home"/>
				<OldSchoolMenuLink  to = "/about" label="About"/>
			</div>
			<hr/>
			<Route exact path = "" component={home}/>
			<Route path = "/about" component={About}/>
		</Router>
		)
}

const OldSchoolMenuLink = ({{label,to,activeOnlyWhenExact}}) => {
	return (
			<Route path={to} exact={activeOnlyWhenExact} children = {({match}) => {
				return (<div className={match ? 'active' :''}>
						{match ? '>' : ''}
						<Link to = {to}>{label}</Link>
					</div>)
			}}></Route>
		)
}

const Home = () =>{
	return (<div>
		<h2>Home</h2>
	</div>)
}

const About = () =>{
	return (
		<div>
			<h2>About</h2>
		</div>
		)
}

export default RouterPage4;