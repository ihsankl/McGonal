import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';
// ===============PAGES==================
import Home from './Pages/Home';
import Items from './Pages/Items';
// import Carts from './Pages/Carts';
// import Itemdetail from './Pages/Itemdetail';
// import Restaurants from './Pages/Restaurants'
// import History from './Pages/History'
// import Search from './Pages/Search'
// ===============END PAGES==============
// ===============COMPS==================
import Header from './Component/Header';
import Footer from './Component/Footer';

const token = Cookie.get('token')

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper" id="wrapper">
          <Header />
          <Switch>
            <Route path='/' render={() => <Home />} exact></Route>
            <Route path='/items' render={() => <Items />} exact></Route>
            {/* <Route path='/itemdetail/:id' exact component={Itemdetail}></Route> */}
            {/* <Route path='/restaurants' render={() => <Restaurants />} exact></Route> */}
            {/* <Route path='/search' render={() => <Search />} exact></Route> */}
            {/* {token ? <Route path='/carts' render={() => <Carts />} exact></Route> : <Redirect to='/' />} */}
            {/* {token ? <Route path='/history' render={() => <History />} exact></Route> : <Redirect to='/' />} */}
          </Switch>
          <Footer />
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    )
  }

}

export default App;
