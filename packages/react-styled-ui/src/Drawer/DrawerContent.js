import React, { forwardRef } from 'react';
import Box from '../Box';
import ButtonBase from '../ButtonBase';
import Icon from '../Icon';
import useForkRef from '../utils/useForkRef';
import { useDrawer } from './context';
import {
  useDrawerContentStyles,
  useDrawerCloseButtonStyle,
} from './styles';

const DrawerCloseButton = (props) => {
  const closeButtonStyleProps = useDrawerCloseButtonStyle();

  return (
    <ButtonBase {...closeButtonStyleProps} {...props}>
      <Icon name="_core.close" />
    </ButtonBase>
  );
};

const DrawerContentBackground = forwardRef((props, ref) => {
  const context = useDrawer(); // context might be an undefined value
  const {
    closeOnEsc,
    closeOnOutsideClick,
    onClose,
  } = { ...context };

  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      width="100%"
      height="100%"
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={event => {
        event.stopPropagation();
        if (closeOnOutsideClick) {
          (typeof onClose === 'function') && onClose(event);
        }
      }}
      onKeyDown={event => {
        if (event.key === 'Escape') {
          event.stopPropagation();
          if (closeOnEsc) {
            (typeof onClose === 'function') && onClose(event);
          }
        }
      }}
      zIndex="drawer"
      {...props}
    />
  );
});

const DrawerContentForeground = forwardRef(({ children, ...props }, ref) => {
  const context = useDrawer(); // context might be an undefined value
  const {
    placement,
    size,
    isCloseButtonVisible,
    onClose,

    // internal use only
    contentRef,
  } = { ...context };
  const combinedRef = useForkRef(ref, contentRef);
  const contentStyleProps = useDrawerContentStyles({ placement, size });

  return (
    <Box
      ref={combinedRef}
      role="dialog"
      tabIndex={-1}
      outline={0}
      position="absolute"
      width="100%"
      onClick={event => event.stopPropagation()}
      {...contentStyleProps}
      {...props}
    >
      {children}
      {!!isCloseButtonVisible && (
        <DrawerCloseButton onClick={onClose} />
      )}
    </Box>
  );
});

const DrawerContent = React.forwardRef(({ children, ...props }, ref) => {
  const context = useDrawer(); // context might be an undefined value

  if (!context) {
    return (
      <DrawerContentForeground ref={ref} {...props}>
        {children}
      </DrawerContentForeground>
    );
  }

  return (
    <DrawerContentBackground>
      <DrawerContentForeground ref={ref} {...props}>
        {children}
      </DrawerContentForeground>
    </DrawerContentBackground>
  );
});

DrawerContent.displayName = 'DrawerContent';

export default DrawerContent;
