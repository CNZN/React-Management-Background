import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.less';
import Login from './login/index';
import Register from './register/index';
import Main from './main/index';

const CheckLogin = (props) => {
  const isLogin = localStorage.getItem('user') ? true : false;
  const { children, ...reset } = props
  return <Route {...reset} render={() => { return isLogin ? children : <Redirect to="/login" /> }} />
}
function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavLink to="/main">主页</NavLink> */}
        <Switch>
          <CheckLogin path="/main">
            {/* <Route path="/main" component={Main} /> */}
            <Main />
          </CheckLogin>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect to="/main" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
