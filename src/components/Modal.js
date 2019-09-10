import React from 'react';
import ReactDOM from 'react-dom';

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

export default Modal;
