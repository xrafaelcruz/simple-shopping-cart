import React from 'react';

import Page from 'styles/Page';
import ProductList from 'components/ProductList';
import withHeaderDefault from 'pages/withHeaderDefault';

function ProductListPage(props) {
  return (
    <Page data-page="product-list">
      <ProductList />
    </Page>
  );
}

export default withHeaderDefault(ProductListPage);
