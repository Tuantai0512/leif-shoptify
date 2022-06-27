import classNames from "classnames/bind";
import styles from './ShopItem.module.scss';

const cx = classNames.bind(styles);

function ShopItem() {
    return ( 
        <div className={cx('Item')}>
            <img src={} alt={}></img>
            <p></p>
            <p className={cx('price')}></p>
        </div>
     );
}

export default ShopItem;