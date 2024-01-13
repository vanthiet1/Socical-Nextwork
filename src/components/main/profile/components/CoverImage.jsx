import { camera } from '../DataIconProfile/DataIcon';
import '../../../../style/components/main/profile/CoverImage.scss';
const CoverImage = () => {
    return (
        <div className="cover__photo__image">
            <img src="" alt="" />
            <div className="add__cover__image">
                <button>
                    <i data-visualcompletion="css-img" style={camera}></i>
                    <span>Thêm ảnh bìa</span>
                </button>
            </div>
        </div>
    );
};

export default CoverImage;