import classNames from 'classnames/bind';
import styles from './ShopItem.module.scss';

const cx = classNames.bind(styles);

function ShopItem(props) {
    return (
        <div className={cx('card')} onClick={props.handleClick}>
            <img src={props.img} className={cx('card-img-top')} alt="..." />    
            <div className={cx('card-body')}>
                <h5 className={cx('card-title')}>{props.title}</h5>
                <p className={cx('price')}>${props.price}</p>
            </div>
        </div>
    );
}

export default ShopItem;
