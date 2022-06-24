import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SideBar() {
    
    return <div className={cx('side-bar')}>
        <div className={cx('title')}>
            <span>Shop</span>
        </div>
        <div className={cx('menu')}>
            <ul>
                <li><a href='/description'>NEW ARRIVALS</a></li>
                <li><a href='/description'>HOME DECOR</a></li>
                <li><a href='/description'>ARTWORK</a></li>
                <li><a href='/description'>KITCHEN & DINING</a></li>
                <li><a href='/description'>BATH & APOTHECARY</a></li>
                <li><a href='/description'>JEWELRY & ACCESSORIES</a></li>
                <li><a href='/description'>PAPER GOODS</a></li>
                <li><a href='/description'>SALE</a></li>
                <li><span>______</span></li>
            </ul>
        </div>
    </div>;
}

export default SideBar;
