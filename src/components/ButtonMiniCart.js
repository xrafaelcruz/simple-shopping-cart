import React from 'react';
import { connect } from 'react-redux';

import ButtonMiniCartStyle, { Circle, Button } from 'styles/ButtonMiniCart';

import MiniCart from 'components/MiniCart';

function ButtonMiniCart(props) {
  function showMiniCart() {}

  return (
    <ButtonMiniCartStyle data-component="button-mini-cart" className={props.className}>
      <Button onMouseEnter={showMiniCart}>
        <i className="fas fa-shopping-cart"></i>
        <Circle>{props.quantityOfProducts}</Circle>
      </Button>

      <MiniCart show />
    </ButtonMiniCartStyle>
  );
}

const mapStateToProps = states => ({
  quantityOfProducts: states.cart.quantityOfProducts
});

export default connect(mapStateToProps)(ButtonMiniCart);
