import Post from "../components/main/Post";
import Stories from "../components/main/Stories";
const Main = () => {
    return (
        <>
            <div className="container__main">
                <Stories></Stories>
                <Post></Post>
            </div>
        </>
    );
};

export default Main;