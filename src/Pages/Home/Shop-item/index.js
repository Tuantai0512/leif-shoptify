import classNames from 'classnames/bind';
import styles from './ShopItem.module.scss';
import data from '~/data';

const cx = classNames.bind(styles);

function ShopItem(props) {
    function addCart(item) {
        return data.cartData.push(item)
    }

    return (
        <div className={cx('card')} onClick={addCart(props.item)}>
            <img src={props.img} className={cx('card-img-top')} alt="..." />
            <div className={cx('card-body')}>
                <h5 className={cx('card-title')}>{props.title}</h5>
                <p className={cx('price')}>{props.price}</p>
            </div>
        </div>
    );
}

export default ShopItem;
