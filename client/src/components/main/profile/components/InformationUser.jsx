import { arowDow, add, edit, cameraPost } from "../DataIconProfile/DataIcon";
import '../../../../style/components/main/profile/InformationUser.scss';

import { useParams } from 'react-router-dom';
import { Users } from "../../../../data/dataUser"; // Import dữ liệu người dùng

const InformationUser = () => {
  const { id } = useParams();
  const user = Users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <div>Người dùng không tồn tại</div>;
  }

  const { avatarUser, name } = user;

  return (
    <div className="user__posts__infor">
      <div className="name">
        <div className="image__user">
          <img src={avatarUser} alt="" />
          <div className="camera_posts">
            <i data-visualcompletion="css-img" style={cameraPost}></i>
          </div>
        </div>
        <div className="name__and__friends">
          <span>{name}</span>
          <span>2,4K bạn bè </span>
        </div>
      </div>
      <div className="settings__post">
        <div className="add__stories">
          <img src={add.Image} alt="" />
          <span>Thêm vào tin</span>
        </div>
        <div className="edit__profile">
          <img src={edit.Image} alt="" />
          <span>Chỉnh sửa trang cá nhân</span>
        </div>
        <button className="option__friends">
          <i data-visualcompletion="css-img" style={arowDow}></i>
        </button>
      </div>
    </div>
  );
};

export default InformationUser;
