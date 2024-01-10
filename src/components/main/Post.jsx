import { useState } from "react";
import "../../style/components/main/mainpage/post.scss";
import avatar from '../../public/image/avatar.png';
import '../../style/components/main/sidebarContact/sidebarContact.scss';
// import { PostProvider } from "./postContext/postContext";
import { listOptionPost } from "./dataListOptionPost/dataList";
const Post = () => {
    const [showLive, setShowLive] = useState(false);
    const handdleShowLive = () => {
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
                <div className="list__styles__post" >
                    {listOptionPost.map((optionPost, index) => (
                        <div className="style__post" onClick={handdleShowLive} key={index}>
                            <img height="24" width="24" alt="" src={optionPost.img}></img>
                            <span>{optionPost.content}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Post;