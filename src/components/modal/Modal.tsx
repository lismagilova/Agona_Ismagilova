import React, { useRef, useState } from 'react'
import { ModalAuth } from './ModalAuth'
import { ModalReg } from './ModalReg'
import { useModalClose } from "../../hooks/useModalClose"

interface ModalProps {
    visible: boolean;
    onClose: () => void;
}

export const Modal = ({ visible, onClose }: ModalProps): JSX.Element => {
    const [isRegistrationModalVisible, setRegistrationModalVisible] = useState(false)

    const openRegistrationModal = () => {
        setRegistrationModalVisible(true)
    }

    const closeRegistrationModal = () => {
        setRegistrationModalVisible(false)
    }
    const ref = useRef<HTMLDivElement>(null)
    useModalClose(ref, () => onClose())

    return (
        <>
            {visible && (
                <div ref={ref}>
                    <ModalAuth visible={visible} onClose={onClose} openRegistrationModal={openRegistrationModal} />
                    {isRegistrationModalVisible && (
                        <ModalReg visible={isRegistrationModalVisible} onClose={closeRegistrationModal} />
                    )}
                </div>
            )}
        </>
    );
};
