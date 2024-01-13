import { useState } from 'react';
import '../../../../style/components/main/profile/OptionService.scss';
import { listHobies } from './Data/OptionHobies';

 

const OptionService = () => {

    const [showListHobies,setShowListHobies] = useState(false);
    const handleShowListHobies = ()=>{
        setShowListHobies(!showListHobies)
    }
    return (
        <>
            <div className="container__option__service">
                <div className="option__services">
                    <button>Bài viết</button>
                    <button>Giới thiệu</button>
                    <button>Bạn bè</button>
                    <button>Ảnh</button>
                    <button>Video</button>
                    <button>Check in</button>
                    <button onClick={handleShowListHobies}>
                        <span> Xem thêm</span>
                        <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" ><path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path></svg>
                        {showListHobies &&(
                            <div className="list__hobies">
                            {listHobies.map((hobies,index)=>(
                                <div key={index}>
                                <span>{hobies}</span>
                                </div>
                            ))}
                        </div>
                        )}
                       
                    </button>
                   
                </div>
            
                <div className="more__settings__item">
                    <div className="list__items">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" ><circle cx="12" cy="12" r="2.5"></circle><circle cx="19.5" cy="12" r="2.5"></circle><circle cx="4.5" cy="12" r="2.5"></circle></svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OptionService;