import React, { useEffect, useState, createRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import categories from 'assets/jsons/categories';

import ProductListStyle from 'styles/ProductList';
import Select from 'styles/Select';
import List, { ListItem } from 'styles/List';

import { getProducts } from 'redux/ducks/productList';

import ProductCard from 'components/ProductCard';
import Pagination from 'components/Pagination';

function ProductList(props) {
  const pageSize = 4;
  const maxPage = 5;
  const [categoryRef] = useState(createRef());

  useEffect(() => {
    props.getProducts({ begin: 0, end: pageSize });
    // eslint-disable-next-line
  }, []);

  function getProducts(begin = 0, end = pageSize) {
    props.getProducts({
      idCategory: categoryRef.current.value,
      begin,
      end
    });
  }

  return (
    <ProductListStyle data-component="product-list">
      <Select ref={categoryRef} onChange={() => getProducts()}>
        <option value="">Selecione a categoria</option>

        {categories.map((category, i) => (
          <option key={i} value={category.id}>
            {category.name}
          </option>
        ))}
      </Select>

      {props.products.length > 0 && (
        <List>
          {props.products.map((product, i) => (
            <ListItem key={i}>
              <ProductCard product={product} />
            </ListItem>
          ))}
        </List>
      )}

      <Pagination totalItems={props.totalItems} pageSize={pageSize} maxPage={maxPage} getItems={getProducts} />
    </ProductListStyle>
  );
}

const mapStateToProps = states => ({
  products: states.productList.products,
  totalItems: states.productList.totalItems
});

const mapDispatchToProps = dispatch => bindActionCreators({ getProducts }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
