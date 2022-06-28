import classNames from 'classnames/bind';
import styles from './CartPage.module.scss';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function CartPage(props) {
    const [quantity, setQuantity] = useState(1);
    const x = Number.parseInt(quantity);
    const location = useLocation();
    const state = location.state;

    return (
        <div className={cx('cartpage-main')}>
            <h1 className={cx('cartpage-title')}>shopping cart</h1>
            <div className={cx('cartpage-header')}>
                <div className={cx('cartpage-header_list')}>
                    <h3>item</h3>
                    <h3>price</h3>
                    <h3>quantity</h3>
                    <h3>total</h3>
                </div>
            </div>
            <div className={cx('cartpage-content')}>
                {state && (
                    <div className={cx('cartpage-content-list')}>
                        <div className={cx('cartpage-content-item')}>
                            <img src={state.img} alt="img1" style={{ width: '175px' }}></img>
                            <div className={cx('cartpage-content-item-description')}>
                                <h3>{state.title}</h3>
                                <button>Remove</button>
                            </div>
                        </div>
                        <div className={cx('cartpage-content-item-price')}>
                            <h3>${state.price}</h3>
                        </div>
                        <div className={cx('cartpage-content-item-price')}>
                            <input
                                type="number"
                                placeholder={quantity}
                                min="0"
                                onChange={(event) => setQuantity(event.target.value)}
                            ></input>
                        </div>
                        <div className={cx('cartpage-content-item-price')}>
                            <h3>${(state.price) * x}</h3>
                        </div>
                    </div>
                )}
            </div>
            <div className={cx('cart-button')}>
                <button className={cx('cart-button-payment')} onClick={() => alert('Payment sucsessful ^^')}>Payment</button>
            </div>
        </div>
    );
}

export default CartPage;
