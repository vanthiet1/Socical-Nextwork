import { useState } from "react";
import "../../../style/components/main/mainpage/userPosts.scss";
import { iconLike, closePost, iconComment, iconShare, iconCommentStiker, iconFelling, iconCamera, iconGifs, iconEmoji } from './Data/DataIcon/Icon';
import allUserPost from './Data/DataUserPost/Post';
// import ReactPlayer from 'react-player';

const UserPosts = () => {
    const isImageOrURL = (str) => {
        const imageFormats = /\.(jpeg|jpg|gif|png)$/;
        const videoFormats = /\.(mp4|webm|ogg)$/;
        return imageFormats.test(str) || videoFormats.test(str) || isURL(str);
    };

    const isVideoURL = (str) => {
        const videoFormats = /\.(mp4|webm|ogg)$/;
        return videoFormats.test(str);
    };
    // Hàm kiểm tra xem đối tượng có phải là URL không
    const isURL = (str) => {
        try {
            new URL(str);
            return true;
        } catch (error) {
            return false;
        }
    };
    const [postVisibility, setPostVisibility] = useState(allUserPost.map(() => true));
    const togglePostVisibility = (index) => {
        const newPostVisibility = [...postVisibility];
        newPostVisibility[index] = !newPostVisibility[index];
        setPostVisibility(newPostVisibility);
    };
    // comment trạng thái ban đầu class
    const [inputComments, setInputComments] = useState(' ');
    const handdleAdd = (tab) => {
        setInputComments(tab);
    }
    //user post
    // state post
    const [activeLikes, setActiveLikes] = useState(Array(UserPosts.length).fill(false));

    const handleActiveLike = (index) => {
        const newActiveLikes = [...activeLikes];
        newActiveLikes[index] = !newActiveLikes[index];
        setActiveLikes(newActiveLikes);
    }
    const [count, setCount] = useState(0);
    const handleSetcount = () => {
        setCount(
            count + 1
        )
    }
    return (
        <>
            <div className="container__user_posts">
                {allUserPost.map((inforUser, index) => (
                    <div key={index} className={`all__content ${postVisibility[index] ? '' : 'hidden'}`}>
                        <div className="content__information">
                            <div className="information__user">
                                <div className="avatar">
                                    <img src={inforUser.avatar} alt="" />
                                </div>
                                <div className="name__time__post">
                                    <span>{inforUser.name}</span>
                                    <span>{inforUser.timePost}</span>
                                </div>
                            </div>
                            <div className="options__user">
                                <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" ><g transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
                                <i className="close__post" style={closePost} onClick={
                                    () => togglePostVisibility(index)}
                                />

                            </div>
                        </div>
                        <div className="caption_post">
                            <p>{inforUser.captions}</p>
                        </div>
                        <div className="content__posts">
                            {isVideoURL(inforUser.content) ? (
                                <video controls width="100%" >
                                    <source src={inforUser.content} type="video/mp4" />
                                </video>
                            ) : isImageOrURL(inforUser.content) ? (
                                <img src={inforUser.content} alt="Ảnh" />
                            ) : (
                                <p>{inforUser.content}</p>
                            )}
                        </div>
                        <div className="likes__comments">
                            <span> {count} Lượt thích</span>
                            <div className="comment__share">
                                <span>{inforUser.comments} bình luận</span>
                                <span>{inforUser.shares} Chia sẻ</span>
                            </div>
                        </div>
                        <div className="service_state">
                            <div className="state" onClick={() => {
                                handleActiveLike(index)
                                handleSetcount()
                            }
                            }
                            >
                                <i data-visualcompletion="css-img" style={iconLike}></i>
                                <span className={activeLikes[index] ? 'active__like' : ''}>
                                    Thích
                                </span>
                            </div>
                            <div className="state">
                                <i className="x1b0d499 x1d69dk1 my-custom-icon" style={iconComment} />
                                <span>Bình luận</span>
                            </div>
                            <div className="state" >
                                <i data-visualcompletion="css-img" style={iconShare}></i>
                                <span>Chia sẻ</span>
                            </div>
                        </div>
                        <div className="list__create__comments">
                            <div className="avatar">
                                <img src={inforUser.avatar} alt="" />
                            </div>
                            <div className="create__comments">

                                <input className={
                                    `${inputComments === ' ' ? 'active__input' : ''}`
                                } onClick={handdleAdd} type="text" placeholder="Viết bình luận..." />

                                <div className="list__option__create">
                                    <i style={iconCommentStiker}></i>
                                    <i style={iconFelling}></i>
                                    <i style={iconCamera}></i>
                                    <i style={iconGifs}></i>
                                    <i style={iconEmoji}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default UserPosts;