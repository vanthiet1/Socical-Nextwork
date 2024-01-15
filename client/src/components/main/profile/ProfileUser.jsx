import '../../../style/components/main/profile/ProfileUser.scss';
import CoverImage from './components/CoverImage';
import InformationUser from './components/InformationUser';
import OptionService from './components/OptionService';
const ProfileUser = () => {
    return (
        <>
            <div className="container__profile__users">
                <div className="header__profile">
                    <CoverImage />
                    <InformationUser />
                    <OptionService />
                </div>
            </div>
        </>
    );
};

export default ProfileUser;