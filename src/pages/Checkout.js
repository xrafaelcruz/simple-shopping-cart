import React from 'react';

import Page, { ContentWrapper } from 'styles/Page';
import H1, { H3 } from 'styles/Title';

import Cart from 'components/Cart';

import withHeaderCustom from 'pages/withHeaderCustom';

function Checkout() {
  return (
    <Page data-page="checkout">
      <H1>Finalizar Pedido</H1>

      <ContentWrapper>
        <H3>Revise os seus itens</H3>
        <Cart />
      </ContentWrapper>
    </Page>
  );
}

export default withHeaderCustom(Checkout);
