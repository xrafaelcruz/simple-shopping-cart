import React from 'react';
import { connect } from 'react-redux';

import MiniCartStyle from 'styles/MiniCart';

function MiniCart(props) {
  return <MiniCartStyle data-component="mini-cart"></MiniCartStyle>;
}

const mapStateToProps = states => ({
  finalValue: states.cart.finalValue
});

export default connect(mapStateToProps)(MiniCart);
