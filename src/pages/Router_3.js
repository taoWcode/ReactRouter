/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-28 14:56:52
 * @version $Id$
 */

/*认证？ 好像是做登录这一块的流程的*/ 

import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Redirect,
	withRouter
} from 'react-router-dom';

const RouterPage3 = () => {
	return (
		<Router>
			<div>
			<AuthButton/>
				<ul>
					<li>
						<NavLink to="/public">Public</NavLink>
					</li>
					<li>
						<NavLink to="/protected">Protected</NavLink>
					</li>
				</ul>
				<Route path="/public" component = {Public}></Route>
				<Route path="/login" component={Login}></Route>
				<PrivateRoute path="/protected" component={Protected} />
			</div>
		</Router>
		)
}

/*withRouter  用来监听路由更新*/
const AuthButton = withRouter(({history}) => {

	return (
		fakeAuth.isAuthenticated ? (
			<p>Welcome! <button onClick = {
				()=>{
					console.log(history);
					fakeAuth.signout(()=>{
						history.push('/')
					})
				}
			}>Sign out</button></p>
			):(
				<p>You are  not logged in</p>
			)
		)
})

/*PrivateRoute是一个自定义组件   props传入组件 和{...rest}其它参数*/
const PrivateRoute = ({component:Component,...rest}) =>{

	return (
		/*返回一个路由,render() 实现对应的组件*/
		<Route {...rest} render={(props)=>{return (
			fakeAuth.isAuthenticated ? (
				<Component {...props}/>
				):(
				<Redirect to = {{
					pathname:'/login',
					state:{from:props.location}/*state数据,跳转login前的地址location*/
				}}/>
				)	

			)}}/>
		)
}

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			redirectToReferrer:false
		}
	}

	login = ()=>{
		const _t = this;
		fakeAuth.authenticate( ()=> {
			_t.setState({redirectToReferrer:true})
		} )
	}

	render(){
		console.log(this.props.location)
		const _t = this;
		const { from } = this.props.location.state || { from: {pathname:'/'}};
		const {redirectToReferrer} = this.state;

		if(redirectToReferrer){
			return <Redirect to={from}/>
		}

		return (
			<div>
				<p>You must log in to view the page at {from.pathname}</p>
				<button onClick = {_t.login}>Log in</button>
			</div>
		)
	}
}

const fakeAuth = {
	isAuthenticated:false,
	authenticate(cb){
		this.isAuthenticated = true;
		setTimeout(cb,100);
	},
	signout(cb){
		this.isAuthenticated = false;
		setTimeout(cb,100);
	}
}

const Protected = ()=>{
	return (<h3>Protected</h3>)
}
const Public = ()=>{
	return (<div>Public</div>)
}


export default RouterPage3;