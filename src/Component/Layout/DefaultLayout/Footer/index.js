import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from "~/assets/images"
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBasketShopping } from '@fortawesome/free-solid-svg-icons'; */

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('page-width')}>
                <div className={cx('footer-section')}>
                    <div className={cx('menu-section')}>
                        <p>
                            <h3>Company</h3>
                        </p>
                        <ul>
                            <li>
                                <a href={'/'}>About us</a>
                            </li>
                            <li>
                                <a href={'/'}>Careers</a>
                            </li>
                            <li>
                                <a href={'/'}>Wholesale</a>
                            </li>
                            <li>
                                <a href={'/'}>Visit us</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('menu-section')}>
                        <p>
                            <h3>Customer care</h3>
                        </p>
                        <ul>
                            <li>
                                <a href={'/'}>Shipping + return</a>
                            </li>
                            <li>
                                <a href={'/'}>Gift card</a>
                            </li>
                            <li>
                                <a href={'/'}>FAQ</a>
                            </li>
                            <li>
                                <a href={'/'}>Accessibility policy</a>
                            </li>
                            <li>
                                <a href={'/'}>Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('infos-wrapper')}>
                    <p>
                        <h3>#Leiflifestyle</h3>
                    </p>
                    <p>
                        <h2>Good for living</h2>
                    </p>
                    <div className={cx('d-flex')}>
                        <div className={cx('info-section')}>
                            <p>Williamsburg, Brooklyn</p>
                            <p>99 Grand street</p>
                            <p>Brooklyn, Ny 11249</p>
                        </div>
                        <div className={cx('info-section')}>
                            <img src={images.stamp} alt="leif_stamp" />
                        </div>
                        <div className={cx('info-section')}>
                            <p><h4>Say hi:</h4></p>
                            <p>Follow us @leifshop</p>
                            <p>hello@leifshop.com</p>
                        </div>
                    </div>
                </div>
                <div className={cx('newsletter-wraper')}></div>
            </div>
            <div className={cx('footer-bottom')}>fottor bottom</div>
        </footer>
    );
}

export default Footer;
