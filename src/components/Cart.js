import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setNewUrl } from 'redux/ducks/route';
import { addToCart, removeFromCart, checkout } from 'redux/ducks/cart';

import { H2 } from 'styles/Title';
import { ButtonRemove, ButtonSum, ButtonCheckout } from 'styles/Button';
import CartStyle, { List, ListItem, WrapperImg, Detail, ButtonsWrapper, Block } from 'styles/Cart';

import Modal from 'components/Modal';

function Cart(props) {
  const [openedModal, setOpenedModal] = useState(false);
  const [openedModalCheckout, setOpenedModalCheckout] = useState(false);

  useEffect(() => {
    if (props.products.length === 0) {
      setOpenedModal(true);
    }
  }, [props.products.length]);

  return (
    <CartStyle data-component="cart">
      <List>
        {props.products.length > 0 &&
          props.products.map((product, i) => {
            return (
              <ListItem key={i}>
                <Block>
                  <ButtonsWrapper>
                    <ButtonRemove onClick={() => props.removeFromCart(product)}>
                      <i className="fas fa-minus"></i>
                    </ButtonRemove>

                    <Detail>{product.amount}</Detail>

                    <ButtonSum onClick={() => props.addToCart(product)}>
                      <i className="fas fa-plus"></i>
                    </ButtonSum>
                  </ButtonsWrapper>

                  <WrapperImg>
                    <img src={product.image} alt={product.name} />
                  </WrapperImg>

                  <Detail>{product.name}</Detail>
                </Block>

                <Block>
                  <Detail>R$ {product.price}</Detail>
                </Block>
              </ListItem>
            );
          })}

        <ListItem>
          <Detail>Total </Detail>
          <Detail>R$ {props.finalValue}</Detail>
        </ListItem>
      </List>

      <ButtonCheckout onClick={() => setOpenedModalCheckout(true)}>Finalizar compra</ButtonCheckout>

      {openedModal && (
        <Modal opened={openedModal}>
          <H2>Carrinho vazio, volte para a tela inicial!</H2>

          <ButtonCheckout type="button" onClick={() => props.setNewUrl('/')}>
            Voltar
          </ButtonCheckout>
        </Modal>
      )}

      {openedModalCheckout && (
        <Modal opened={openedModalCheckout}>
          <H2>Pedido realizado com sucesso!</H2>

          <ButtonCheckout type="button" onClick={() => props.checkout()}>
            Fechar
          </ButtonCheckout>
        </Modal>
      )}
    </CartStyle>
  );
}

Cart.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  product: PropTypes.shape(),
  finalValue: PropTypes.number
};

const mapStateToProps = states => ({
  products: states.cart.products,
  finalValue: states.cart.finalValue
});

const mapDispatchToProps = dispatch => bindActionCreators({ setNewUrl, addToCart, removeFromCart, checkout }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
