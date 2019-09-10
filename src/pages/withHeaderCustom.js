import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { enableHeaderCustom } from 'redux/ducks/header';

const withHeaderCustom = Comp => props => {
  useEffect(() => {
    props.enableHeaderCustom();
    // eslint-disable-next-line
  }, []);

  return <Comp />;
};

const mapDispatchToProps = dispatch => bindActionCreators({ enableHeaderCustom }, dispatch);

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withHeaderCustom
);
