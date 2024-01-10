import '../../../style/components/main/profile/ProfileUser.scss';
import { camera } from './DataIconProfile/DataIcon';
const ProfileUser = () => {
    return (
        <>
            <div className="container__profile__users">
                <div className="header__profile">
                     <div className="cover__photo__image">
                        <img src="" alt="" />
                        <div className="add__cover__image">
                           <button>
                           <i data-visualcompletion="css-img" style={camera}></i>
                             <span>Thêm ảnh bìa</span>
                           </button>
                        </div>
                     </div>
                     <div className="user__posts__infor">
                        <div className="name"></div>
                         <div className="settings__post">
                             <div className="add__stories">
                             <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/q-yRM7K9T0l.png?_nc_eui2=AeGCe9WtmLSktJW9MQNAkMfE6I4InDVgcrTojgicNWBytF4osp6SnbUNvUR_l_Koh6M8VrJ_RS6wDS_-TURZc1Gq" alt="" />
                             <span>Thêm vào tin</span>
                             </div>
                             <div className="edit__profile">
                             <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/tmaz0VO75BB.png?_nc_eui2=AeG_R25wID4Ng5LvipATPWuQPeqkNBZWYnQ96qQ0FlZidIggkmAShs9gZ-oiSCv-A_GfYYruDsm4Ez3ZtJJKPHdl" alt="" />
                                <span>Chỉnh sửa trang cá nhân</span>
                             </div>
                            <button>
                            <i data-visualcompletion="css-img" style= {{
                              backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/127UtGAhcTj.png?_nc_eui2=AeFKAPn64kSImARqOupuGFqLWeJBEvN3zkZZ4kES83fORg3Ml3Ci6xZppqADDzzHvQSEiC6cZMoQU-2_jKgcA_D8")',backgroundPosition:'0 -186px',backgroundSize:'22px 306px',width:'16px',
                                height:'16px',backgroundRepeat:'no-repeat',
                                display:'inline-block'
                            }}></i>
                            </button>
                         </div>
                     </div>
                </div>
            </div>
        </>
    );
};

export default ProfileUser;