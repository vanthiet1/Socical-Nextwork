import Navigation from "../../layout/Navigation";
import ProfileUsers from "../../components/main/profile/ProfileUser";
// import { useParams } from "react-router-dom";
// import { Users } from "../../data/dataUser";
const ProfileUser = () => {
    // const { id } = useParams();

    // const user = Users.find(user => user.id === parseInt(id));
    // if (!user) {
    //     return <div>User not found</div>
    // }
    return (
        <>
            <div className="main">
                <div className="navigation">
                    <Navigation />
                </div>
                  <div className="profile__users">
                  <ProfileUsers></ProfileUsers>
                  </div>
            </div>
        </>
    );
};

export default ProfileUser;