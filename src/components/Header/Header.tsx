import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.sass';
import { Modal } from '../modal/Modal';

export const Header = (): JSX.Element => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <header className={styles.header}>
            <NavLink to="/main">
                <img src="/logo.png" alt="logo" className={styles.logo} />
            </NavLink>
            <nav className={styles.links}>
                <NavLink to="/main" className={styles.point}>
                    Главная
                </NavLink>
                <NavLink to="/points" className={styles.point}>
                    Пункты сбора
                </NavLink>
                <NavLink to="/ecomarket" className={styles.point}>
                    ЭкоМаркет
                </NavLink>
                <NavLink to="/about" className={styles.point}>
                    О сервисе
                </NavLink>
            </nav>
            <nav className={styles.personal}>
                <NavLink to="/location" className={styles.map}>
                    <img src="/location.png" alt="location" />
                    Казань
                </NavLink>
                <NavLink to="/cash" className={styles.money}>
                    <img src="/money.png" alt="money" />
                    1000
                </NavLink>
                <NavLink to="/account" className={styles.data}>
                    <img src="/user.png" alt="user" />
                    Алексей
                </NavLink>
                <button onClick={openModal}>Открыть модалку</button>
            </nav>
            <Modal visible={modalVisible} onClose={closeModal} />
        </header>
    );
};
