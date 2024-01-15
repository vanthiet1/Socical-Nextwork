// import { Link } from 'react-router-dom';
import { useState } from "react";
import '../../../style/components/main/sidebarList/sidebarList.scss';
import { listSidebar, imglistSidebar } from "./data/DataList";
import { listGroups} from "./data/DataListGroups";
import { Users } from "../../../data/dataUser";
import { Link } from "react-router-dom";

const SidebarList = () => {
    const [toggleShow, setToggleShow] = useState("Xem thêm");
    const [visibleCount, setVisibleCount] = useState(6);
    const [isSeeMoreVisible, setIsSeeMoreVisible] = useState(true);
    const [isArrowDown, setIsArrowDown] = useState(false);
    const allList = listSidebar.map((item, index) => ({
        text: item,
        image: imglistSidebar[index]
    }));
    const visibleList = allList.slice(0, visibleCount);

    const handleSeeMoreClick = () => {
        setIsArrowDown(!isArrowDown);
        if (isSeeMoreVisible) {
            setVisibleCount(allList.length);
            setToggleShow("Ẩn bớt")
        } else {
            setVisibleCount(6);
            setToggleShow("Xem thêm");
        }
        setIsSeeMoreVisible(!isSeeMoreVisible)
    };



    return (
        <>
            <div className="container__sidebarList">
                <div className="categories__item__list">
                    <Link to={`/ProfileUser/${Users[0].id}`}>
                        <div className="item__categories" >
                            <img src={Users[0].avatarUser} alt="" />
                            <span>{Users[0].name}</span>
                        </div>
                    </Link>
                    {visibleList.map((item, index) => (
                        <div key={index}>
                            <div className="item__categories">
                                <img src={item.image} alt="" />
                                <span>{item.text}</span>
                            </div>
                        </div>
                    ))}

                    {visibleCount && (
                        <div className="item__categories" onClick={handleSeeMoreClick}>
                            <svg className={`${isArrowDown ? 'rotate-arrow-down' : ''}`} id="noneContent" viewBox="0 0 16 16" width="20" height="20" fill="currentColor"><g fillRule="evenodd" transform="translate(-448 -544)"><path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
                            <span>{toggleShow}</span>
                        </div>
                    )}
                    <div className="line"></div>
                    <div className="title__group">
                        <span>Lối tắt của bạn</span>
                        <span>Chỉnh sửa</span>
                    </div>
                    {listGroups && (
                        <div>
                            <div className="item__categories">
                                <img src={listGroups[0].img} alt="" style={{
                                    borderRadius: '10px'
                                }} />
                                <span>{listGroups[0].name}</span>
                            </div>
                        </div>
                    )}
                    <div className="copyright">
                        <span>
                            Quyền riêng tư - Điều khoản - lựa chọn quảng cáo - Cookie - Xem thêm - Văn Thiết Frontend Dev
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarList;