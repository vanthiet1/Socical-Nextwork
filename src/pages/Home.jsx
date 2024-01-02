import { useEffect } from 'react';
import Navigation from '../layout/Navigation';
import SidebarList from '../layout/SidebarList';
import SidebarContact from '../layout/SidebarContact';
import Main from '../layout/Main';
import '../style/layouts/Main.scss';
import {  UseBirthdayContext } from '../components/sidebar/sidebarContact/BirthdayContext';
import InforBirthday from '../components/sidebar/sidebarContact/inforBirthday';

const Home = () => {
  const { show } = UseBirthdayContext();
  const TitleHome = 'Facebook';

  useEffect(() => {
    document.title = TitleHome;
  }, [TitleHome]);

  // const closeOverlay = () => {
  //   setShow(false);
  // };

  return (
    <>
      
        <div className="container">
          <Navigation />   
          <div className="content__slidebar__main">
            <div className="side__bar__list">
              <SidebarList />
            </div>
            <div className={`main ${show ? 'overlay-container' : ''}`}>
              <Main />
            </div>
            <div className="side__bar__contact">
              <SidebarContact />
            </div>
          </div>
          {show && (
              <div className="container__sidebar__contact">
                <InforBirthday />
              </div>
            )}
        </div>
    
    </>
  );
};

export default Home;
