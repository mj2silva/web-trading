import Modal from 'components/Modal';
import { FC, useState } from 'react';
import PrivacyPolicies from './PrivacyPolicies';

type Props = {
  className?: string,
}

const defaultProps: Partial<Props> = {
  className: '',
};

const PrivacyPoliciesButton: FC<Props> = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = (): void => setIsOpen(false);
  const openModal = (): void => setIsOpen(true);
  return (
    <>
      <button type="button" onClick={openModal} className={className}>POLÍTICAS DE PRIVACIDAD</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <PrivacyPolicies />
      </Modal>
    </>
  );
};

PrivacyPoliciesButton.defaultProps = defaultProps;

export default PrivacyPoliciesButton;
