import "../../style/components/main/mainpage/post.scss";
import avatar from '../../public/image/avatar.png';
import '../../style/components/main/sidebarContact/sidebarContact.scss';
import { PostProvider } from "./postContext/postContext";
import { useState,useContext } from "react";
const Post = () => {
    const [showLive,setShowLive]= useState(false);
    const handdleShowLive =()=>{
        setShowLive(!showLive)
    }
// dùng provoder 

    return (
        <>
            <div className="container__post">
                <div className="post__now">
                    <img src={avatar} alt="" />
                    <input type="text" placeholder="User ơi, bạn đang nghĩ gì thế ?" />
                </div>
                <div className="list__styles__post">
                    <div className="style__post" onClick={handdleShowLive}>
                        <img height="24" width="24" alt="" src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png?_nc_eui2=AeE5020WieuqcrCISepFKJQ53Eh3Wgl8GJPcSHdaCXwYkwKTVCbdKztMAGgqKEo8VZwERKIdMMcXny5GS93Sy7KA"></img>
                        <span>Video trực tiếp</span>
                    </div>
                    <div className="style__post">
                        <img height="24" width="24" alt="" src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png?_nc_eui2=AeEmHOZBo8gC4SxOONUeUarWfK5Z1qDG7FV8rlnWoMbsVaBEyh6TLQ2DDZbyQGVFp38Y-KGWZ7kHpnlHUiwDwp4Q"></img>
                        <span>Ảnh/video</span>
                    </div>
                    <div className="style__post">
                        <img height="24" width="24" alt="" src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png?_nc_eui2=AeEDkK_EfoC4wZjnpoC_DXWEv2_PAiqLvPK_b88CKou88vP8iSPPYCfawLoFN6AlffmAogN3f3p0lgbMD66VgIJE"></img>
                        <span>Cảm xúc/hoạt động</span>
                    </div>
                </div>
                
            </div>
         
        
        </>
    );
};

export default Post;