/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-28 14:30:12
 * @version $Id$
 */
import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';


/*路由传值*/
const RouterPage2 = ()=>{
	return (
		<Router>
			<div>
				<h2>账号</h2>
				<ul>
					<li>
						<NavLink to="/react-router">React Router</NavLink>
					</li>
					<li>
						<NavLink to="/leoashin">Leoashin</NavLink>
					</li>
					<li>
						<NavLink to="/justjavac">justjavac</NavLink>
					</li>
					<li>
						<NavLink to="/reacttraining">React Training</NavLink>
					</li>
				</ul>
				<Route path="/:id" component = {Child} />
			</div>
		</Router>
		)
}

const Child = ({match}) => {
	return (<div>{match.params.id}</div>)
}


export default RouterPage2;