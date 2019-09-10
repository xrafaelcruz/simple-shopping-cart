import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logo from 'assets/images/logo2.png';

import HeaderStyle, { Item } from 'styles/Header';
import { ButtonLink } from 'styles/Button';

import { setNewUrl } from 'redux/ducks/route';

import ButtonMiniCart from 'components/ButtonMiniCart';

function Header(props) {
  function back() {
    props.setNewUrl('back');
  }

  function home() {
    props.setNewUrl('/');
  }

  return (
    <HeaderStyle data-component="header">
      <Item x="flex-start">
        {props.showBackOption && (
          <ButtonLink onClick={back} className="fade-in">
            <i className="fas fa-chevron-left"></i>
          </ButtonLink>
        )}
      </Item>

      <Item x="center">
        <ButtonLink onClick={home}>
          <img className="logo" src={logo} alt="Simple Shopping Logo" />
        </ButtonLink>
      </Item>

      <Item x="flex-end">{props.showMiniCart && <ButtonMiniCart />}</Item>
    </HeaderStyle>
  );
}

Header.propTypes = {
  showMiniCart: PropTypes.bool,
  showBackOption: PropTypes.bool,
  setNewUrl: PropTypes.func.isRequired
};

const mapStateToProps = states => ({
  showMiniCart: states.header.showMiniCart,
  showBackOption: states.header.showBackOption
});

const mapDispatchToProps = dispatch => bindActionCreators({ setNewUrl }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
