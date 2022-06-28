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
                <li><a href='/'>NEW ARRIVALS</a></li>
                <li><a href='/'>HOME DECOR</a></li>
                <li><a href='/'>ARTWORK</a></li>
                <li><a href='/'>KITCHEN & DINING</a></li>
                <li><a href='/'>BATH & APOTHECARY</a></li>
                <li><a href='/'>JEWELRY & ACCESSORIES</a></li>
                <li><a href='/'>PAPER GOODS</a></li>
                <li><a href='/'>SALE</a></li>
                <li><span>______</span></li>
            </ul>
        </div>
    </div>;
}

export default SideBar;
