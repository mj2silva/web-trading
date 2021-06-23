import { FC, ReactNode } from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import styles from '@styles/Modal.module.scss';
import cn from 'classnames';

type Props = ReactModalProps & {
  WarningBodyElement?: FC | string,
  warningTitle?: string,
  children?: ReactNode,
  popupWarningOnClose?: boolean,
  title?: string,
  height?: 'fit' | 'default',
}

const defaultProps: Partial<Props> = {
  WarningBodyElement: undefined,
  warningTitle: undefined,
  popupWarningOnClose: false,
  children: null,
  title: '',
  height: 'default',
};

const Modal: FC<Props> = (props: Props) => {
  ReactModal.setAppElement('#__next');
  const {
    isOpen,
    children,
    onRequestClose,
    height,
  } = props;
  const contentClassName = cn(styles.Modal_Content, {
    [styles.Modal_Content_fitHeight]: height === 'fit',
  });
  const bodyClassName = cn(styles.Modal_Body, {
    [styles.Modal_Body_fitHeight]: height === 'fit',
  });
  return (
    <>
      <ReactModal
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={styles.Modal_Overlay}
        className={contentClassName}
      >
        <div className={bodyClassName}>
          { children }
        </div>
      </ReactModal>
    </>
  );
};

Modal.defaultProps = defaultProps;

export default Modal;
