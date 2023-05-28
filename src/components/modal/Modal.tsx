import React, { FC, ReactElement, useState } from 'react';
import { ModalAuth } from './ModalAuth';
import { ModalReg } from './ModalReg';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ visible, onClose }: ModalProps): ReactElement => {
    const [isRegistrationModalVisible, setRegistrationModalVisible] = useState(false);

    const openRegistrationModal = () => {
        setRegistrationModalVisible(true);
    };

    const closeRegistrationModal = () => {
        setRegistrationModalVisible(false);
    };

    return (
        <>
            {visible && (
                <>
                    <ModalAuth visible={visible} onClose={onClose} openRegistrationModal={openRegistrationModal} />
                    {isRegistrationModalVisible && (
                        <ModalReg visible={isRegistrationModalVisible} onClose={closeRegistrationModal} />
                    )}
                </>
            )}
        </>
    );
};
