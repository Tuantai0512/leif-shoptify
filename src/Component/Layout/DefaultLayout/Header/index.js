import classNames from 'classnames';
import styles from './Header.module.scss';
/* import image from "~/assets/images" */

const cx = classNames.bind(styles);
console.log(cx.wrapper);

function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.topbar}>
                <div>
                    HEY THERE! ENJOY FREE SHIPPING ON ANY ORDER OF $150+ (OR FREE IN-STORE PICKUP)
                </div>
            </div>
            <div className={styles.inner}>
                <div className={styles.mobileMenuButton}>
                    <input className={styles.searchBar} placeholder='Search'></input>
                </div>
            </div>
        </header>
    );
}

export default Header;
