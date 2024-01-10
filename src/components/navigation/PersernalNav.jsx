import { useEffect, useRef, useState } from 'react';
import Avatar from '../../public/image/avatar.png';
import '../../style/components/navigation/PersernalNav.scss';
// menu
import Menu from './MenuNav/Menu';
import NotificationNav from './NotificationNav/Notification';
import { Users } from '../../data/dataUser';
import { iconSetingUser } from './dataIcon/iconSetting';
import { Link } from 'react-router-dom';
const PersernalNav = () => {
    const menuRef = useRef();
    const notificationRef = useRef();
    const setingUser = useRef();
    const [showMenu, setShowMenu] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [showSetingUser, setShowSetingUser] = useState(false);


    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }
    const handleShowNotification = () => {
        setShowNotification(!showNotification);
    }
    const handleShowSetingUser = () => {
        setShowSetingUser(!showSetingUser);
    }

    const handleClickOutside = (event) => {
        if (
            menuRef.current && !menuRef.current.contains(event.target) &&
            notificationRef.current && !notificationRef.current.contains(event.target) &&
            setingUser.current && !setingUser.current.contains(event.target)
        ) {
            setShowMenu(false);
            setShowNotification(false);
            setShowSetingUser(false);

        } else if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenu(false);
        } else if (notificationRef.current && !notificationRef.current.contains(event.target)) {
            setShowNotification(false);
        } else if (setingUser.current && !setingUser.current.contains(event.target)) {
            setShowSetingUser(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [])
    return (
        <>
            <div className="content__personal">
                <div className="page__icon" ref={menuRef} onClick={handleShowMenu}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" ><path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>
                    <div className="hover__page__home">
                        <span>Menu</span>
                    </div>
                    {showMenu && (
                        <Menu></Menu>
                    )}
                </div>
                <div className="page__icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5c-1.922 0-3.736-.472-5.33-1.308a.63.63 0 0 0-.447-.069l-3.4.882a1.5 1.5 0 0 1-1.828-1.829l.882-3.4a.63.63 0 0 0-.07-.445A11.454 11.454 0 0 1 .5 12zm17.56-1.43a.819.819 0 0 0-1.125-1.167L14 11.499l-3.077-2.171a1.5 1.5 0 0 0-2.052.308l-2.93 3.793a.819.819 0 0 0 1.123 1.167L10 12.5l3.076 2.172a1.5 1.5 0 0 0 2.052-.308l2.931-3.793z"></path></svg>
                    <div className="hover__page__home">
                        <span>Messenger</span>
                    </div>
                </div>
                <div className="page__icon" onClick={handleShowNotification} ref={notificationRef}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path></svg>
                    <div className="hover__page__home">
                        <span>Thông báo</span>
                    </div>
                    {showNotification && (
                        <div className="notification__nav" >
                            <NotificationNav></NotificationNav>
                        </div>
                    )}
                </div>
                <div className="icon__avatar">
                    <img ref={setingUser} onClick={handleShowSetingUser} src={Avatar} alt="" />
                    <div className="hover__page__home">
                        <span>Tài khoản</span>
                    </div>
                    {showSetingUser && (
                        <div className="list__setting_users">
                            {Users && (
                                <Link to={`/ProfileUser/${Users[0].id}`}>
                                    <div className="users_infomation">
                                        <img src={Users[0].avatarUser} alt="" />
                                        <span>{Users[0].name}</span>
                                    </div>
                                </Link>
                            )}
                            <div className="list__setings">
                                {iconSetingUser.map((iconSetting, index) => (
                                    <div className="option__setings" key={index}>
                                        <i data-visualcompletion="css-img" style={iconSetting}></i>
                                        <span style={{
                                            color: '#fff'
                                        }}>{iconSetting.name}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="copyright">
                                <p><a href="">Quyền riêng tư </a> · <a href="">Điều khoản</a>·<a href="">Quảng cáo </a>·<a href=""> Lựa chọn quảng cáo </a>·<a href="">Cookie</a>·<a href="">Meta © 2024</a></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default PersernalNav;