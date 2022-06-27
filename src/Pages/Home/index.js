import classNames from 'classnames/bind';
import styles from './ArivalPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('page')}>
            <div className={cx('header-page')}>
                <div className={cx('page-title')}>
                    <h3>New arrivals</h3>
                </div>
                <div className={cx('page-option')}>
                    <select className={cx('soft-by')}>
                        <option value="1">Sort by</option>
                        <option value="2">Price: Low to high</option>
                        <option value="3">Price: High to low</option>
                        <option value="4">a-z</option>
                        <option value="5">z-a</option>
                        <option value="6">oldest to newest</option>
                        <option value="7">newest to oldest</option>
                        <option value="8">best selling</option>
                    </select>
                    <button className={cx('filter')}><FontAwesomeIcon icon={faFilter} style={{marginRight: '10px'}}/>Filter</button>
                    <span className={cx('count-page')}>page 1/1</span>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Home;
