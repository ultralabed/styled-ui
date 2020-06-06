import React, { forwardRef } from 'react';
import Box from '../Box';
import useColorMode from '../useColorMode';
import { useModal } from './context';

const ModalOverlay = forwardRef((props, ref) => {
  const { colorMode } = useColorMode();
  const {
    onClose,
    closeOnOverlayClick,
  } = useModal();
  const backgroundColor = {
    dark: 'rgba(0, 0, 0, .7)', // TBD
    light: 'rgba(0, 0, 0, .7)', // TBD: light mode is not defined yet
  }[colorMode];

  return (
    <Box
      ref={ref}
      position="fixed"
      left="0"
      top="0"
      width="100vw"
      height="100vh"
      backgroundColor={backgroundColor}
      zIndex="modal"
      onClick={event => {
        event.stopPropagation();
        if (closeOnOverlayClick) {
          onClose(event);
        }
      }}
      {...props}
    />
  );
});

ModalOverlay.displayName = 'ModalOverlay';

export default ModalOverlay;
