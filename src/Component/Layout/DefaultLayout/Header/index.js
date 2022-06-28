import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from "~/assets/images"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('topbar')}>
                <div>HEY THERE! ENJOY FREE SHIPPING ON ANY ORDER OF $150+ (OR FREE IN-STORE PICKUP)</div>
            </div>
            <div className={cx('inner')}>
                <div className={cx('mobile-menu-button')}>
                    <div className={cx('search-bar')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input placeholder="Search"></input>
                    </div>
                </div>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Leif-shopify" style={{ height: '100%'}}/>
                </div>
                <div className={cx('shoping-cart')}>
                    <a href='/cartpage'>shopping cart</a>
                    <FontAwesomeIcon icon={faBasketShopping} />
                </div>
            </div>
        </header>
    );
}

export default Header;
