import { useState } from "react";
import Navigation from "../layout/Navigation";
import SidebarList from "../layout/SidebarList";
import SidebarContact from "../layout/SidebarContact";
import Main from "../layout/Main";
import '../style/layouts/Main.scss';
import { BirthdayProvider } from "../components/sidebar/sidebarContact/BirthdayContext";
// 
import InforBirthday from "../components/sidebar/sidebarContact/inforBirthday";
const Home = () => {
    const [inforBirthday, setInforBirthday] = useState(false);


    const TitleHome = 'Facebook';
    document.title = `${TitleHome}`;
    return (
        <>
            <BirthdayProvider>
                <div className="container">
                    <Navigation></Navigation>

                    <div className="content__slidebar__main">
                        {inforBirthday && (
                            <div className="container__sidebar__contact">
                                <InforBirthday ></InforBirthday>
                            </div>
                        )}
                        <div className="side__bar__list">
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
            </BirthdayProvider>
        </>
    );
};

export default Home;