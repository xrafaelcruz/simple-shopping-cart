import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { disableHeaderCustom } from 'redux/ducks/header';

const withHeaderDefault = Comp => props => {
  useEffect(() => {
    props.disableHeaderCustom();
    // eslint-disable-next-line
  }, []);

  return <Comp />;
};

const mapDispatchToProps = dispatch => bindActionCreators({ disableHeaderCustom }, dispatch);

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withHeaderDefault
);
