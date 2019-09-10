import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ButtonMiniCartStyle, { Circle, Button } from 'styles/ButtonMiniCart';

import MiniCart from 'components/MiniCart';

function ButtonMiniCart(props) {
  const [showMiniCart, setShowMiniCart] = useState(false);

  return (
    <ButtonMiniCartStyle data-component="button-mini-cart" className={props.className}>
      <Button onClick={() => setShowMiniCart(!showMiniCart)}>
        <i className="fas fa-shopping-cart"></i>
        <Circle>{props.quantityOfProducts}</Circle>
      </Button>

      {showMiniCart && <MiniCart buttonMiniCartEvent={setShowMiniCart} />}
    </ButtonMiniCartStyle>
  );
}

ButtonMiniCart.propTypes = {
  quantityOfProducts: PropTypes.number.isRequired,
  className: PropTypes.string
};

const mapStateToProps = states => ({
  quantityOfProducts: states.cart.quantityOfProducts
});

export default connect(mapStateToProps)(ButtonMiniCart);
