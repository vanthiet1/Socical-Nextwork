import { iconClose, iconMess } from "./iconSideBarContact/icon";
import { Users } from "../../main/data/dataUser";
import "../../../style/components/main/sidebarContact/sidebarContact.scss";

const InforBirthday = () => {
    const userBirthday = Users[4];
    return (
        <>
            <div className="content__birthday__friend">
                <div className="birthday__friend">
                    <h1>Sinh nhật của bạn bè</h1>
                    <div className="close">
                        <i data-visualcompletion="css-img" className="x1b0d499 x1d69dk1" style={iconClose}></i>
                    </div>
                </div>
                {userBirthday && (
                    <div className="birthday__of__user">
                        <div className="name_ib">
                            <img src={userBirthday.avatarUser} alt="avatar" />
                            <div className="groups__user">
                                <span>{userBirthday.name}</span>
                                <div className="inbox__mess">
                                    <i data-visualcompletion="css-img" className="x1b0d499 xep6ejk" style={iconMess}></i>
                                    <span>Nhắn tin</span>
                                </div>
                            </div>
                        </div>
                        <div className="age__user">
                            <span>{userBirthday.age} tuổi</span>
                        </div>
                    </div>
                )}
                <div className="see_more_birthday">
                    <button>Xem các sinh nhật sắp tới</button>
                </div>
            </div>


        </>
    );
};

export default InforBirthday;