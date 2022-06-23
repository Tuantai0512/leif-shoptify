import Header from "./Header";
import SideBar from "./Sidebar";

function DefaultLayout({ children }) {
    return ( 
        <div>
            <div className="topbar"></div>
            <Header />
            <div className="MainContent">
                <SideBar />
                <div className="content">
                    { children }
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;