import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentComponent from "./component/StudentComponent"



class App extends Component{
  render(){
    return(
      // <div className="container">
      //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //     <Link to={'/'} className="navbar-brand">React CRUD Operation</Link>
      //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //         <ul className="navbar-nav mr-auto"></ul>
      //           <li >
      //             <Link to={'/'} >Home</Link>
      //           </li>
      //           <li >
      //             <Link to={'/create'} >Create</Link>
      //           </li>
      //           <li>
      //             <Link to={'/index'} >Index</Link>
      //           </li>
      //       </div>
      //     </nav><br/>
      //     <h2>Welcome to CRUD</h2><br/>
      //     <Switch>
      //       <Route exact path='/create' component={Create}></Route>
      //       <Route exact path='/edit/:id' component={Edit}></Route>
      //       <Route exact path='/index' component={Index}></Route>
      //     </Switch>
      //</div>
      <div className="App">
        <StudentComponent />

      </div>
    );
  }
}
export default App;
