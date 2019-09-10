import React from 'react';

import Page from 'styles/Page';
import withHeaderCustom from 'pages/withHeaderCustom';

function Checkout() {
  return <Page data-page="checkout">Page checkout</Page>;
}

export default withHeaderCustom(Checkout);
