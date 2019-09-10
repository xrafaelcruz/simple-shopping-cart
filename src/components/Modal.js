import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ModalStyle, { ModalWrapper } from 'styles/Modal';

function Modal(props) {
  return ReactDOM.createPortal(
    <ModalStyle data-component="modal" opened={props.opened}>
      <ModalWrapper onClick={e => e.stopPropagation()}>{props.children}</ModalWrapper>
    </ModalStyle>,
    document.getElementById('modal')
  );
}

Modal.propTypes = {
  opened: PropTypes.bool
};

export default Modal;
