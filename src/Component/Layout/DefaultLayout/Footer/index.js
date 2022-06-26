import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
                            <p>
                                <h4>Say hi:</h4>
                            </p>
                            <p>Follow us @leifshop</p>
                            <p>hello@leifshop.com</p>
                        </div>
                    </div>
                </div>
                <div className={cx('newsletter-wraper')}>
                    <img src={images.stay} alt="stay-in-touch" style={{ width: '50%', marginLeft: '60px' }} />
                    <div className={cx('footer-newsletter-from')}>
                        <p className={cx('caption')}>
                            Let's be friends — get 10% off your first order when you sign up for our emails.
                        </p>
                        <div className={cx('newsletter-from')}>
                            <input className={cx('input-email')} placeholder={'Enter Email'} />
                            <button className={cx('subscribe-button')}>subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-bottom')}>
                <div className={cx('footer-section')}>
                    <div className={cx('credit')}>
                        <p>© 2022 LEIF, ALL RIGHTS RESERVED</p>
                    </div>
                </div>
                <div className={cx('infos-wrapper')}>
                    <p>
                        <h2>
                            Follow us
                            <a href="https://www.facebook.com/">
                                <FontAwesomeIcon icon={faFacebook} className={cx('mxh-icon')} />
                            </a>
                            <a href="https://www.instagram.com/">
                                <FontAwesomeIcon icon={faInstagram} className={cx('mxh-icon')} />
                            </a>
                        </h2>
                    </p>
                </div>
                <div className={cx('newsletter-wraper')}>
                    <div className={cx('footer-newsletter-from')}>
                        <div className={cx('info-section')}>
                            <p>
                                <a href="/">Privacy policy</a>
                            </p>
                            <p>
                                <a href="/">Terms & condition</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
