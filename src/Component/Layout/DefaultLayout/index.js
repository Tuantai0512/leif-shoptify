import Header from "./Header";
import SideBar from "./Sidebar";
import Footer from "./Footer";
import styles from "./DefaultLayout.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return ( 
        <div>
            <Header />
            <div className={cx('Main-content')}>
                <SideBar />
                <div className={cx('content')}>
                    { children }
                </div>
            </div>
            <Footer />
        </div>
     );
}

export default DefaultLayout;