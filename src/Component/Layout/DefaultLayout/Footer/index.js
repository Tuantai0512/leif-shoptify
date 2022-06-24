import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
/* import images from "~/assets/images" */
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBasketShopping } from '@fortawesome/free-solid-svg-icons'; */

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('page-width')}>Page ưidth</div>
            <div className={cx('footer-bottom')}>fottor bottom</div>
        </footer>
    );
}

export default Footer;
