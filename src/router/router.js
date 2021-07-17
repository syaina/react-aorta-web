import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/Header';

import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';


function routes() {
    return(
        <Router>
            <div>
                <Header/>
                <Route exact path="/" component={Home} />
                <Route exact path="/daftar" component={Signup} />
                <Route exact path="/login" component={Login} />
                {/* <Route exact path="/articles" component={Articles} />
                <Route path="/articles/:id" component={ArticlesDetail} />
                <Route path="/faq" component={Faq} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/products" component={Products} />
                <Route path="/products/:id" component={ProductDetail} /> */}

                {/* <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} /> */}
            </div>
        </Router>
    );
}
export default routes;