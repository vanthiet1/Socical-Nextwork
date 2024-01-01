import { useState, useEffect } from "react";
import "../../../style/components/main/sidebarContact/sidebarContact.scss";
import { hidentPonsor, reportPonsor, inforPonsor, birthdayIcon } from "./iconSideBarContact/icon";
// import { sponsor } from "./iconSideBarContact/Sponser/Sponser";
import { Users } from "../../main/data/dataUser";
import { UseBirthdayContext } from "./BirthdayContext";
const SidebarContact = () => {
    const { toggleInforBirthday } = UseBirthdayContext();
    const handleDivClick = () => {
        toggleInforBirthday();
      };
    const [showOptionSponsor, setShowOptionSponsor] = useState(false);
    const [showSponsor, setShowSponsor] = useState(true);
    
    const handleShow = (e) => {
        e.stopPropagation();
        setShowOptionSponsor(true);
    };
 
    useEffect(() => {
        const handleWindowClick = () => {
            setShowOptionSponsor(false)     
        };
        window.addEventListener('click', handleWindowClick);
        return () => {
            window.removeEventListener('click', handleWindowClick);
        };
    }, []);
   
   
    const handleRemoveSponsor = () => {
        setShowSponsor(false)
    }
    // birthday
    const userBirthday = Users[4];
  

    return (
        <>
            <div className="container__sidebar__contact">
                <div className="content__sponsor">
                    <div className="title__sponsor">
                        <span>Được tài trợ</span>
                    </div>
                    {showSponsor && (
                        <div className="content">
                            <div className="options__content__sponsor">
                                <div className="icon__options" onClick={handleShow}>
                                    <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor"  ><g transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
                                </div>
                            </div>
                            {showOptionSponsor && (
                                <div className="content__options">
                                    <div className="more__options">
                                        <i className="x1b0d499 xep6ejk" style={hidentPonsor}></i>
                                        <div className="option" onClick={handleRemoveSponsor}>
                                            <span>Ẩn quảng cáo</span>
                                            <span>Không hiển thị quảng cáo này nữa</span>
                                        </div>
                                    </div>
                                    <div className="more__options">
                                        <i className="x1b0d499 xep6ejk" style={reportPonsor}></i>
                                        <div className="option">
                                            <span>Báo cáo quảng cáo</span>
                                            <span>Hãy cho chúng tôi biết quảng cáo này có vấn đề gì</span>
                                        </div>
                                    </div>
                                    <div className="more__options">
                                        <i className="x1b0d499 xep6ejk" style={inforPonsor}></i>
                                        <div className="option">
                                            <span>Tại sao tô nhìn thấy quảng cáo này?</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                            <div className="img__content">
                                <img src="https://scontent-hkg1-1.xx.fbcdn.net/v/t45.1600-4/406758427_120203597309650470_3303699855645786187_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=1&ccb=1-7&_nc_sid=528f85&_nc_eui2=AeHsgqPSCZ-5puAlUFztQiNuR1HK5ql1kA5HUcrmqXWQDqsEEzzzNvT4x7v8ImXVrKsGVjx0ClapPaKlheQ4gmmE&_nc_ohc=kgghfrhHpb4AX-TV4bA&_nc_ht=scontent-hkg1-1.xx&oh=00_AfAtd0pTMGEnNi3I02DkBF-Eslu1B6f8HfpNVCIfuncHxA&oe=65931ED6" alt="Shopee" />
                            </div>
                            <div className="title__content">
                                <span>THAM GIA SHOPEE VIDEO NGAY</span>
                                <span>shopee.vn</span>
                            </div>
                        </div>
                    )}
                </div>
                
                
                <div className="birthday__user">
                    <span>Sinh nhật</span>
                    {userBirthday && (
                        <div className="birthday__today" onClick={handleDivClick}>
                            <i data-visualcompletion="css-img" className="x1b0d499 xl1xv1r" style={birthdayIcon}></i>
                            <span>Hôm nay là sinh nhật của <b>{userBirthday.name}</b></span>
                        </div>
                    )}
                </div>
                <div className="users__contact">
                    <div className="func__users__contact">
                         <div className="title">
                            <span>Người liên hệ</span>
                         </div>
                        <div className="icon__search__option">
                          <div className="search">
                          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><g fillRule="evenodd" transform="translate(-448 -544)"><g fillRule="nonzero"><path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path><path d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path><path d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path><path d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path></g></g></svg>
                          </div>
                         <div className="option">
                         <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" ><g fillRule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
                         </div>
                        </div>
                    </div>
                    <div className="all__user">
                    {
                        Users.map((userContact,index)=>(
                            <div className="information_users" key={index}>
                            <img src={userContact.avatarUser} alt="" />
                            <span>{userContact.name}</span>
                        </div>
                        ))  
                    }  
                    </div>
                </div>
            </div>
        </>
    );
};

  
export default SidebarContact;
