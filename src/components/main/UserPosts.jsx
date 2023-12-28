import "../../style/components/main/mainpage/userPosts.scss";
import { iconLike, closePost, iconComment, iconShare } from './dataIcon/icon';
import allUserPost from './dataUserPost/userPost';
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
    return (
        <>
            <div className="container__user_posts">
                {allUserPost.map((inforUser, index) => (
                    <div key={index} className="all__content">
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
                                <i className="close__post" style={closePost} />
                            </div>
                        </div>
                        <div className="caption_post">
                            <p>{inforUser.captions}</p>
                        </div>
                        <div className="content__posts">
                            {isVideoURL(inforUser.content) ? (
                                <video controls width="100%">
                                    <source src={inforUser.content} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                isImageOrURL(inforUser.content) ? (
                                    <img src={inforUser.content} alt="Ảnh" />
                                ) : (
                                    <p>{inforUser.content}</p>
                                )
                            )}
                        </div>

                        <div className="likes__comments">
                            <span>1 Lượt thích</span>
                            <div className="comment__share">
                                <span>1 bình luận</span>
                                <span>1 Chia sẻ</span>
                            </div>
                        </div>
                        <div className="service_state">
                            <div className="state">

                                <i data-visualcompletion="css-img" style={iconLike}></i>
                                <span>Thích</span>
                            </div>
                            <div className="state">
                                <i className="x1b0d499 x1d69dk1 my-custom-icon" style={iconComment} />
                                <span>Bình luận</span>
                            </div>
                            <div className="state">
                                <i data-visualcompletion="css-img" style={iconShare}></i>
                                <span>Chia sẻ</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UserPosts;