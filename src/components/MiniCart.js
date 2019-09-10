import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setNewUrl } from 'redux/ducks/route';

import { ButtonCheckout } from 'styles/Button';
import MiniCartStyle, { List, ListItem, WrapperImg, Details, Detail } from 'styles/MiniCart';

function MiniCart(props) {
  return (
    <MiniCartStyle data-component="mini-cart">
      <List>
        {props.products.length > 0 &&
          props.products.map((product, i) => {
            return (
              <ListItem key={i}>
                <WrapperImg>
                  <img src={product.image} alt={product.name} />
                </WrapperImg>
                <Details>
                  <Detail highlight>{product.name}</Detail>
                  <Detail>Quantidade: {product.amount}</Detail>
                  <Detail>R$ {product.price}</Detail>
                </Details>
              </ListItem>
            );
          })}
      </List>

      <Details>
        <Detail highlight margin="0 0 8px">
          Total R$ {props.finalValue}
        </Detail>
      </Details>

      {props.products.length > 0 && (
        <ButtonCheckout
          onClick={() => {
            props.buttonMiniCartEvent(false);
            props.setNewUrl('/checkout');
          }}
        >
          Fechar pedido
        </ButtonCheckout>
      )}
    </MiniCartStyle>
  );
}

MiniCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any),
  finalValue: PropTypes.number.isRequired,
  buttonMiniCartEvent: PropTypes.func.isRequired,
  setNewUrl: PropTypes.func.isRequired
};

const mapStateToProps = states => ({
  products: states.cart.products,
  finalValue: states.cart.finalValue
});

const mapDispatchToProps = dispatch => bindActionCreators({ setNewUrl }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniCart);
