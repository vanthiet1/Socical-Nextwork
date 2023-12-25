// import { Link } from 'react-router-dom';
import Avartar from "../../../public/image/avatar.png";
import '../../../style/components/main/sidebarList/sidebarList.scss';
import { listSidebar,imglistSidebar } from "./data/dataList";
import { listGroups , imgListGroups } from "./data/dataListGroups";

const SidebarList = () => {

    const allList = listSidebar.map((item, index) => ({
        text: item,
        image: imglistSidebar[index]
      }));
      
    const allListGroups = listGroups.map((item, index) => ({
        text: item,
        image: imgListGroups[index]
      }));
    return (
        <>
            <div className="container__sidebarList">
                <div className="categories__item__list">
                    <div className="item__categories">
                        <img src={Avartar} alt="" />
                        <span>Văn Thiết</span>
                    </div>
                    {allList.map((item, index) => (
                        <div key={index}>
                            <div className="item__categories">
                                <img src={item.image} alt="" />
                                <span>{item.text}</span>
                            </div>
                        </div>
                    ))}
                 
                    <div className="item__categories">
                        <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" ><g fillRule="evenodd" transform="translate(-448 -544)"><path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
                        <span>Xem thêm</span>
                    </div>
                    <div className="line"></div>
                     <div className="title__group">
                        <span>Lối tắt của bạn</span>
                        <span>Chỉnh sửa</span>
                     </div>
                     {allListGroups.map((item, index) => (
                        <div key={index}>
                            <div className="item__categories">
                                <img src={item.image} alt="" style={{
                                    borderRadius:'10px'
                                }} />
                                <span>{item.text}</span>
                            </div>
                        </div>
                    ))}
                    <div className="copyright">
                     <span>
                     Quyền riêng tư - Điều khoản - lựa chọn quảng cáo - Cookie - Xem thêm - Meta 2023
                     </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarList;