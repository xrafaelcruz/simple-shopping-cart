import React, { useEffect } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductList from 'pages/ProductList';
import Checkout from 'pages/Checkout';

import { setNewUrl } from 'redux/ducks/route';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

function Routes({ newUrl, setNewUrl }) {
  useEffect(() => {
    if (newUrl) {
      if (newUrl === 'back') {
        history.goBack();
      } else {
        history.push(newUrl);
      }

      setNewUrl();
    }
  }, [newUrl, setNewUrl]);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/product-list" component={ProductList} />
        <Route exact path="/checkout" component={Checkout} />
        <Redirect from="*" to="/" />}
      </Switch>
    </Router>
  );
}

const mapStateToProps = states => ({
  newUrl: states.route.newUrl
});

const mapDispatchToProps = dispatch => bindActionCreators({ setNewUrl }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
