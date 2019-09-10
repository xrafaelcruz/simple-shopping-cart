import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ButtonAdd } from 'styles/Button';
import CardStyle, { CardBody, CardFooter, CardButtons, CardName, CardDescription, CardPrice } from 'styles/Card';

import { addToCart } from 'redux/ducks/cart';

function ProductCard(props) {
  return (
    <CardStyle>
      <CardBody onClick={() => props.addToCart(props.product)}>
        <img src={props.product.image} alt={props.product.name} />
      </CardBody>

      <CardFooter>
        <CardName>{props.product.name}</CardName>
        <CardDescription>{props.product.description}</CardDescription>
        <CardPrice>R$ {props.product.price}</CardPrice>
      </CardFooter>

      <CardButtons>
        <ButtonAdd onClick={() => props.addToCart(props.product)}>Adicionar ao carrinho</ButtonAdd>
      </CardButtons>
    </CardStyle>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators({ addToCart }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ProductCard);
