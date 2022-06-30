import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from "~/assets/images"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBasketShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const nav = useNavigate();

    const handleClick = () => {
        nav('/')
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('topbar')}>
                <div>HEY THERE! ENJOY FREE SHIPPING ON ANY ORDER OF $150+ (OR FREE IN-STORE PICKUP)</div>
            </div>
            <div className={cx('inner')}>
                <div className={cx('mobile-menu-button')}>
                    <div className={cx('search-bar')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{marginRight: '10px'}}/>
                        <input className={cx('search-input')} placeholder="Search"></input>
                    </div>
                    <button onClick={handleClick}><FontAwesomeIcon icon={faBars} /></button>
                </div>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Leif-shopify" style={{width:'100%', maxWidth: '200px'}}/>
                </div>
                <div className={cx('shoping-cart')}>
                    <a href='/cartpage'>shopping cart</a>
                    <FontAwesomeIcon icon={faBasketShopping} style={{padding: '10px'}}/>
                </div>
            </div>
        </header>
    );
}

export default Header;
