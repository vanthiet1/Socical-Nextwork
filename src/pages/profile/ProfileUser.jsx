import Navigation from "../../layout/Navigation";
import { useParams } from "react-router-dom";
import { Users } from "../../data/dataUser";
const ProfileUser = () => {
    const { id } = useParams();

    const user = Users.find(user => user.id === parseInt(id));
    if (!user) {
        return <div>User not found</div>
    }
    return (
        <>
            <div className="main">
                <div className="navigation">
                    <Navigation />
                </div>
                <h2>User Profile Page</h2>
                <p>User ID: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
            </div>
        </>
    );
};

export default ProfileUser;