import { useState } from 'react';
import { Users } from '../../../../data/dataUser';
import '../../../../style/components/main/mainpage/stories.scss';
import '../../../../style/components/main/mainpage/reels.scss'
const DataReels = () => {
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
                    <div className="personal__reels">
                        <div className="create_reels_personal">
                            <div className="video__reels">
                                <i
                                    data-visualcompletion="css-img"
                                    style={{
                                        backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/aKzLqjpn2wq.png?_nc_eui2=AeGynKw1WZTnF_W2NKBy871ca9SwiTxXqcBr1LCJPFepwOUNdTaS5KSo-3iBkIpMgeVXU1hE7zmKxhGhJDTYDl5a")`,
                                        backgroundPosition: "0px 0px",
                                        backgroundSize: "33px 52px",
                                        width: "30px",
                                        height: "38px",
                                        backgroundRepeat: "no-repeat",
                                        display: "inline-block"
                                    }}
                                ></i>
                                <div className="icon__create">
                                    <i
                                        data-visualcompletion="css-img"
                                        style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/aKzLqjpn2wq.png?_nc_eui2=AeGynKw1WZTnF_W2NKBy871ca9SwiTxXqcBr1LCJPFepwOUNdTaS5KSo-3iBkIpMgeVXU1hE7zmKxhGhJDTYDl5a")',
                                            backgroundPosition: "0px -38px",
                                            backgroundSize: "38px 52px",
                                            width: "12px",
                                            height: "12px",
                                            backgroundRepeat: "no-repeat",
                                            display: "inline-block",
                                        }}
                                    ></i>
                                </div>
                            </div>
                            <div className="create__movie">
                                <span>Tạo thước phim</span>
                            </div>
                        </div>

                    </div>
                    {Users.map((user, index) => (
                        <div className="users__stoties" key={index}>
                            <div className="create_stories_personal">
                                <img src={user.avatarUser} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DataReels;