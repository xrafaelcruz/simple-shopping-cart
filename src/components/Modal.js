import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ModalStyle, { ModalWrapper, ButtonClose } from 'styles/Modal';

function Modal(props) {
  return ReactDOM.createPortal(
    <ModalStyle data-component="modal" onClick={props.closeEvent} opened={props.opened}>
      <ModalWrapper onClick={e => e.stopPropagation()}>
        <ButtonClose onClick={props.closeEvent}>
          <i className="fas fa-times"></i>
        </ButtonClose>
        {props.children}
      </ModalWrapper>
    </ModalStyle>,
    document.getElementById('modal')
  );
}

Modal.propTypes = {
  closeEvent: PropTypes.func.isRequired
};

export default Modal;
