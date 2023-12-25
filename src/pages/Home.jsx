import Navigation from "../layout/Navigation";
import SidebarList from "../layout/SidebarList";
import SidebarContact from "../layout/SidebarContact";
import Main from "../layout/Main";
import '../style/layouts/Main.scss';
const Home = () => {
    const TitleHome = 'Facebook';
    document.title = `${TitleHome}`;
    return (
        <>
            <div className="container">
                <Navigation></Navigation>
                <div className="content__slidebar__main">
                    <div className="silde__bar__list">
                        <SidebarList></SidebarList>
                    </div>
                    <div className="main">
                        <Main></Main>
                    </div>
                    <div className="side__bar__contact">
                        <SidebarContact></SidebarContact>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;