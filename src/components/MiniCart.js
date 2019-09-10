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
        {props.productGroup.length > 0 &&
          props.productGroup.map((group, i) => {
            return (
              <ListItem key={i}>
                <WrapperImg>
                  <img src={group[0].image} alt={group[0].name} />
                </WrapperImg>
                <Details>
                  <Detail>Quantidade: {group[0].amount}</Detail>
                  <Detail>R$ {group[0].price}</Detail>
                </Details>
              </ListItem>
            );
          })}
      </List>
      <Details>
        <Detail margin="0 0 8px">Total R$ {props.finalValue}</Detail>
      </Details>
      <ButtonCheckout
        onClick={() => {
          props.buttonMiniCartEvent(false);
          props.setNewUrl('/checkout');
        }}
      >
        Fechar pedido
      </ButtonCheckout>
    </MiniCartStyle>
  );
}

MiniCart.propTypes = {
  productGroup: PropTypes.arrayOf(PropTypes.any),
  finalValue: PropTypes.number.isRequired,
  buttonMiniCartEvent: PropTypes.func.isRequired,
  setNewUrl: PropTypes.func.isRequired
};

const mapStateToProps = states => ({
  productGroup: states.cart.productGroup,
  finalValue: states.cart.finalValue
});

const mapDispatchToProps = dispatch => bindActionCreators({ setNewUrl }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniCart);
