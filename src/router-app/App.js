import React, {Component} from 'react';
import NavBar from './components/navbar';
import './App.css';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
//
import Home from './components/home';
import Products from './components/products';
import Posts from './components/posts';
import Admin from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar/>
                    <div className="container">
                        <Switch>
                            <Route path="/products/:id" component={ProductDetails} />
                            <Route path="/products" component={(props) => <Products sortBy="newest" {...props} />    } />
                            <Route path="/posts/:year?/:month?" component={Posts} />
                            <Route path="/admin" component={Admin} />
                            <Redirect from="/messages" to="/posts" />
                            <Route path="/not-found" component={NotFound} />
                            <Route path="/" exact component={Home} />
                            <Redirect to="/not-found" />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
