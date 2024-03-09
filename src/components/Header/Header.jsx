import styles from './Header.module.css';

export default function Header() {
    return (
        <>
            <img
                className={styles.logo}
                src='/public/bull-logo-svgrepo-com_.svg'
                alt='logo'
            />
        </>
    );
}


