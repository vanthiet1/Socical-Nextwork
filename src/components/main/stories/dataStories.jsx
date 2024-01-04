import { useState } from 'react';
import { Users } from '../data/dataUser';
import avatarProfile from '../../../public/image/imgProfile.png';
import '../../../style/components/main/mainpage/stories.scss';
const DataStories = () => {
    const [slider, setSlider] = useState(0);
    const [showArowLeft, setShowArrowLeft] = useState(false);
    const handleSliderRight = () => {
        setSlider((prevSlider) => prevSlider - 200);
        setShowArrowLeft(true);

    };
    const handleSliderLeft = () => {
        if (slider < 0) {
            setSlider((prevSlider) => prevSlider + 200);
        } else if (slider === 0) {
            setShowArrowLeft(false)
        }

    };
    return (
        <>
            <div className="slide__profile__right"
                onClick={handleSliderRight}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M9.209 5.207 16 12l-6.791 6.793a1 1 0 1 0 1.415 1.414l7.5-7.5a1 1 0 0 0 0-1.414l-7.5-7.5a1 1 0 1 0-1.415 1.414z"></path></svg>
            </div>
            {showArowLeft && (
                <div className="slide__profile__left" onClick={handleSliderLeft}
                    style={{
                        transition: 'ease 0.5s',
                    }}
                >
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M9.209 5.207 16 12l-6.791 6.793a1 1 0 1 0 1.415 1.414l7.5-7.5a1 1 0 0 0 0-1.414l-7.5-7.5a1 1 0 1 0-1.415 1.414z"></path></svg>
                </div>
            )}
            <div className="list__stories">
                <div className="content__stories" style={
                    {
                        transform: `translateX(${slider}px)`,
                        transition: `ease 0.5s`
                    }
                }>
                    <div className="personal__stories">
                        <img src={avatarProfile} alt="" />
                        <div className="create_stories_personal">
                            <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor"><g transform="translate(-446 -350)"><g ><path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)"></path><path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)"></path></g></g></svg>
                        </div>
                        <span>Tạo tin</span>
                    </div>
                    {Users.map((user, index) => (
                        <div className="users__stoties" key={index}>
                            <div className="create_stories_personal">
                                <img src={user.avatarUser} alt="" />
                                <div className="avatar__user">
                                    <img src={user.avatarUser} alt="" />
                                </div>
                                <div className="name">
                                    <span>{user.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DataStories;