import { iconCreate, iconStories, iconMovies, iconEvent,iconFanpage,iconCommercial,iconGroup,iconEvents,iconMarketplace} from "../../../style/assets/icon/IconMenu";
const Menu = () => {
    return (
        <>
            <div className="all__list_menus">
                <div className="title__menu">
                    <span>Menu</span>
                </div>
                <div className="all__list__service__menu">
                    <div className="service__menu__left">
                        <div className="search__infor">
                            <label htmlFor="" className='search__content'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder='Tìm kiếm trong menu'
                                />
                            </label>
                        </div>
                        <div className="list__socicals">
                            <div className="title__socicals">
                                <span>Xã hội</span>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png?_nc_eui2=AeFvvX0awJ1HB_TinsX3MrWHOrbvO-r1cmA6tu876vVyYJBBzwcItSKgb1kjSGpiEGgjoG6xsODhK2yrCG7I2F-x" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Sự kiện</span>
                                    <span>Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây.</span>
                                </div>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/-UR-mdYpyXa.png?_nc_eui2=AeEWOvjOmjhmP5PPI2ohRG_E2v0Ks8D2aPza_QqzwPZo_HzCRwKdRxfoDz4MUaN_ylXRUvq0wp9Fwflt8D854qFE" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Bạn bè</span>
                                    <span>Tìm kiếm bạn bè hoặc những người bạn có thể biết </span>
                                </div>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/NCc4ln3EAaS.png?_nc_eui2=AeH92XAuvj_HgLANbmou0ZeHvkgS0InGPLq-SBLQicY8usx-QK72BAORgnJqM8scQ1r0ouMuYO_tAcjmcpZLcJIk" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Nhóm</span>
                                    <span>Kết nối với những người cùng chung sở thích cùng bạn và chia sẽ</span>
                                </div>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/E__N70WXrPM.png?_nc_eui2=AeGiS3h4MLt4xmh_9wMXD_oBs5fWsvLd7DOzl9ay8t3sM4QrFhIzQFAO5HdFCkEWL5JRuofwo2bZz63xAnYe5jZB" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Bảng tin</span>
                                    <span>Xem bài viết phù hợp của những người và Trang bạn theo dõi</span>
                                </div>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png?_nc_eui2=AeHVDkoyXc64e72bBPNmT7lv9As6vsZg84r0Czq-xmDzillpBbInyKwXxydUNJ3JY5Gs2Wbk6w2_qxt-Uz-JDd-i" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Bảng feed</span>
                                    <span>Xem bài viết gần đây nhất từ bạn bè,nhóm,Trang và hơn thế nữa</span>
                                </div>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/2QQIoQlVGnh.png?_nc_eui2=AeF5WtypKp7Rg0XMGqzoURTystc3rB0XV7Sy1zesHRdXtC2NcKI2tZQSEb-yKPXkUv9BQLPsV6Sg5J11kQJd6XW0" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Trang</span>
                                    <span>Khám phá và kết nối với các doanh nghiệp trên Facebook</span>
                                </div>
                            </div>
                        </div>
                        <div className="line__menus"></div>
                        <div className="list__socicals">
                            <div className="title__socicals">
                                <span>Giải trí</span>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/eVgQ0NIygAW.png?_nc_eui2=AeGS0en2U2LnLkskFXsz98JVenDeBEBBMht6cN4EQEEyG0LVL-lwPJVXsMe0KktInEXQRU9gO4KCspn95HgA_tSc" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Video chơi game</span>
                                    <span>Xem, kết nối với những game và người phát trực tiếp mà bạn yêu thích.</span>
                                </div>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/Tvf-JvODx7o.png?_nc_eui2=AeEw0_0OQ8dCRfewMWs2cmzCFV6iKd6i-xgVXqIp3qL7GGBqZ8VjDrlSI0xDzfpGEJRkjqnAJmYyhwlBm5ceTrrj" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Chơi game</span>
                                    <span>Chơi game bạn yêu thích</span>
                                </div>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/8L2T81pQAIa.png?_nc_eui2=AeEPw6p0Kvcj-1t0EfFbJ_GvmROADeRWuvWZE4AN5Fa69XIZdCcugVq9t5PSjT6kjoYH9R-WdlS-YTwUzlfpicUJ" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Video</span>
                                    <span>Đích đến của video phù hợp với sở thích và quan hệ kết nối của bạn</span>
                                </div>
                            </div>
                        </div>
                        <div className="line__menus"></div>
                        <div className="list__socicals">
                            <div className="title__socicals">
                                <span>Mua sắm</span>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xH4w-lk44we.png?_nc_eui2=AeEAXxGX0f1XFOjTWe9PwYiZxcXEexUOKafFxcR7FQ4pp5k58W6uspJdCTZGxTEmFjhBnbnRmPk9vJP3Af7y0WyK" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Đơn đặt hàng và thanh toán</span>
                                    <span>Một cách dễ dàng, bảo mật để thanh toán trên các ứng dụng bạn đang dùng</span>
                                </div>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/rEk7fp0z5AA.png?_nc_eui2=AeFhWt-2__9aCYrxY4CfyQBs-2pFgOiuyx37akWA6K7LHflKrBx104Tw8_hd3Hpv_FLUnhoPMQI9Y8lQKGIpjSN3" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Marketplace</span>
                                    <span>Mua bán trong cộng đồng của bạn</span>
                                </div>
                            </div>
                        </div>
                        <div className="line__menus"></div>
                        <div className="list__socicals">
                            <div className="title__socicals">
                                <span>Cá nhân</span>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/VaQGECnx1Us.png?_nc_eui2=AeGVjQ_OvsuQIDsJmddBBuaWkycvohEyW_qTJy-iETJb-iBJjExPuU3KOCGQ1yfG_qs50cLGoy_7D0fwpFXIblFI" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Hoạt động gần đây với quảng cáo</span>
                                    <span>Xem toàn bộ quảng cáo mà bạn đã tương tác trên Facebook</span>
                                </div>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png?_nc_eui2=AeFfCFY31p1PlL1Egng_dKdpD7-9NrPNDkEPv702s80OQROUs40E8wF7TCfiry-pvhmxqdM1162g3N_k4zsBBCdq" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Kỷ niệm</span>
                                    <span>Lướt xem ảnh, video và bài viết cũ bạn thân trên Facebook </span>
                                </div>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/X1wwBNSCk5F.png?_nc_eui2=AeHnFRaePkg9LPH-UZUpStt6vfRhIpdGbHK99GEil0ZscqYkmLA0PU9E0KaW9Csg11HDz6xGhlGwTB4rVL0y-dnx" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Đã lưu</span>
                                    <span>Tìm bài viết, ảnh và video mà bạn đã lưu để xem sau </span>
                                </div>
                            </div>
                        </div>
                        <div className="line__menus"></div>
                        <div className="list__socicals">
                            <div className="title__socicals">
                                <span>Chuyên nghiệp</span>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/tx2VFwUKc-K.png?_nc_eui2=AeGVHBptHtsxlCw5LggSOTJQql6KcToA1eWqXopxOgDV5b6S80jsXi91S8vf2q6OS4Af5k9opZn1dOI9wiA2UDO9" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Trình quảng lí quảng cáo</span>
                                    <span>Tạo, quản lí và theo dõi hiệu quả quảng cáo </span>
                                </div>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/9iacGJP1ses.png?_nc_eui2=AeHH9OBCJSJjemi7MYKJ5GHNNipgPp3kjAg2KmA-neSMCEA8Dgc11keJQNiMcJi3iCE6EiiMlADsXlwoPPj-gpL7" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Meta Business Suite</span>
                                    <span>Cách tốt hơn để quản lí doanh nghiệp trên Facebook và Ingtagram - tất cả ở cùng một nơi</span>
                                </div>
                            </div>
                        </div>
                        <div className="line__menus"></div>
                        <div className="list__socicals">
                            <div className="title__socicals">
                                <span>Nguồn động lực cho cộng đồng</span>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/9LIH24rbn9J.png?_nc_eui2=AeFswigHmnsdwb_Y8-ACwnK8Nnk-z_y56zU2eT7P_LnrNRP1CTwdjsfYnx7FGnSAAhNP4o9_bNGXcv3dzM4J3uQ8" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Hiến máu</span>
                                    <span>Cập nhật thông tin về hoạt động hiến máu ở gần bạn</span>
                                </div>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/tKwWVioirmj.png?_nc_eui2=AeGm8RbY3ulMH9gP7rFOO61lruCnBWwp8W6u4KcFbCnxbsfFh120YtwjXgwHZvuRxUUqiQzHKpBOFyMWDc1iPbbL" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Trung tâm khoa học khí hậu</span>
                                    <span>Tìm hiểu về vấn đề biến đổi khí hậu và tác động của hiện tượng này </span>
                                </div>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/E_ZpLgQOkZb.png?_nc_eui2=AeGmVxcwfM6ZobYLKV-QFwj64QHBhWgB37vhAcGFaAHfuwspllJW9sW3ehJUErnULPLUzEDoPW_ri22XhngE0KjE" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Chiến dịch và gây quỹ</span>
                                    <span>Quyên góp và gây quỹ cho tổ chức phi lợi nhuận và cá nhân</span>
                                </div>
                            </div>
                        </div>
                        <div className="line__menus"></div>
                        <div className="list__socicals">
                            <div className="title__socicals">
                                <span>Sản phẩm khác của meta</span>
                            </div>
                            <div className="list__more__socicals">
                                <div className="img__item__socicals">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/-ZRs50L5kHA.png?_nc_eui2=AeHYoQPqgBj7gJk0g3L1_O88Lwix1Sv5VOUvCLHVK_lU5XEfpFCMKVic2ad3dQAxm9yk5x07pfnXcAKn3GoOEWAx" alt="" />
                                </div>
                                <div className="content__item__socicals">
                                    <span>Messenger Kids</span>
                                    <span>Cho phép bé nhắn tin với bạn thân và gia đình</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service__menu__right">
                        <div className="title_create">
                            <span>Tạo</span>
                        </div>
                        <div className="list__create_services">
                            <div className="list__more_items">
                            <div className="icon__menu__list">
                                <i
                                    data-visualcompletion="css-img"
                                    className="x1b0d499 xep6ejk"
                                    style={iconCreate}
                                />
                                </div>
                                <span>Đăng</span>
                            </div>
                            <div className="list__more_items">
                            <div className="icon__menu__list">
                                <i
                                    data-visualcompletion="css-img"
                                    className="x1b0d499 xep6ejk"
                                    style={iconStories}
                                />
                                </div>
                                <span>Tin</span>
                            </div>
                            <div className="list__more_items">
                             <div className="icon__menu__list">
                                <i
                                    data-visualcompletion="css-img"
                                    className="x1b0d499 xep6ejk"
                                    style={iconMovies}
                                />
                            </div>
                                <span>Thước phim</span>
                            </div>
                            <div className="list__more_items">
                                <div className="icon__menu__list">
                                <i
                                    data-visualcompletion="css-img"
                                    className="x1b0d499 xep6ejk"
                                    style={iconEvent}
                                />
                                </div>
                                <span>Sự kiện trong đời</span>
                            </div>
                            <div className="line__menus"></div>
                            <div className="list__more_items">
                                <div className="icon__menu__list">
                                <i
                                    data-visualcompletion="css-img"
                                    className="x1b0d499 xep6ejk"
                                    style={iconFanpage}
                                />
                                </div>
                                <span>Trang</span>
                            </div>
                            <div className="list__more_items">
                                <div className="icon__menu__list">
                                <i
                                    data-visualcompletion="css-img"
                                    className="x1b0d499 xep6ejk"
                                    style={iconCommercial}
                                />
                                </div>
                                <span>Quảng cáo</span>
                            </div>
                            <div className="list__more_items">
                                <div className="icon__menu__list">
                                <i
                                    data-visualcompletion="css-img"
                                    className="x1b0d499 xep6ejk"
                                    style={iconGroup}
                                />
                                </div>
                                <span>Nhóm</span>
                            </div>
                            <div className="list__more_items">
                                <div className="icon__menu__list">
                                <i
                                    data-visualcompletion="css-img"
                                    className="x1b0d499 xep6ejk"
                                    style={iconEvents}
                                />
                                </div>
                                <span>Sự kiện</span>
                            </div>
                            <div className="list__more_items">
                                <div className="icon__menu__list">
                                <i
                                    data-visualcompletion="css-img"
                                    className="x1b0d499 xep6ejk"
                                    style={iconMarketplace}
                                />
                                </div>
                                <span>Bài niêm yết trên Marketplace</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;