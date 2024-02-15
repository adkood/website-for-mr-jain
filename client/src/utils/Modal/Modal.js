import React from 'react';
import styles from '../Modal/Modal.module.css';
import { useDispatch } from 'react-redux';

const Modal = ({isOpen, closeModal, children }) => {

    const dispatch = useDispatch();
    return isOpen ? (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                {children}
                <span className={styles.closeButton} onClick={() => {dispatch(closeModal())}}>
                    &times;
                </span>
            </div>
        </div>
    ) : null;
};

export default Modal;
