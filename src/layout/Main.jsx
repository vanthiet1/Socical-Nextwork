import Post from "../components/main/Post";
import Stories from "../components/main/Stories";
import UserPosts from "../components/main/UserPosts";

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