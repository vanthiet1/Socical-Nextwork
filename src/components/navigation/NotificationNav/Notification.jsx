
import '../../../style/components/navigation/Notification.scss';
import { iconOptions } from '../../main/dataIcon/icon';
const NotificationNav = () => {
    return (
        <>
            <div className="container__notification">
                <div className="options_notification">
                    <div className="title">
                        <h2>Thông báo</h2>
                    </div>
                    <div className="options">
                        <i style={iconOptions}></i>
                    </div>
                </div>
                <div className="list__notifications">
                    <button>Tất cả</button>
                    <button>Chưa đọc</button>
                </div>
                <div className="see__all__notification">
                    <span>Trước đó</span>
                    <span>Xem tất cả</span>
                </div>
            </div>
        </>
    );
};

export default NotificationNav;