import Post from "../components/main/home/Post";
import Stories from "../components/main/home/Stories";
import UserPosts from "../components/main/home/UserPosts";

const Main = () => {
    return (
        <>
            <div className="container__main">
                <Stories></Stories>
                <Post></Post>
                <UserPosts></UserPosts>
            </div>
        </>
    );
};

export default Main;