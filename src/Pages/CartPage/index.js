import classNames from 'classnames/bind';
import styles from './CartPage.module.scss';

const cx = classNames.bind(styles);

function CartPage() {
    return (
        <div className={cx('cartpage-main')}>
            <h1 className={cx('cartpage-title')}>shopping cart</h1>
            <div className={cx('cartpage-header')}>
                <h3>item</h3>
                <div className={cx('d-flex')}>
                    <h3>price</h3>
                    <h3>quantity</h3>
                    <h3>item</h3>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
