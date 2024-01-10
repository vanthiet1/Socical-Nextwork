import logoMess from '../../../../public/image/mes.png'
const listSidebar = [
    "Bạn bè",
    "Video",
    "Kỷ niệm",
    "Đã lưu",
    "Nhóm",
    "Bảng feed",
    "Chiến dịch gây quỷ",
    "Chơi game",
    "Đơn đặt hàng và thanh toán",
    "Hiến máu",
    "Hoạt dộng gần đây với quảng cáo",
    "Marketplace",
    "Messenger",
    "Messenger Kids",
    "Meta Business Suite",
    "Sự kiện",
    "Trang",
    "Trình quản lí quảng cáo",
    "Trung tâm khoa học khí hậu",
    "Video chơi game"
];
const imglistSidebar = [
    "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/-UR-mdYpyXa.png?_nc_eui2=AeEWOvjOmjhmP5PPI2ohRG_E2v0Ks8D2aPza_QqzwPZo_HzCRwKdRxfoDz4MUaN_ylXRUvq0wp9Fwflt8D854qFE",
    "https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/8L2T81pQAIa.png?_nc_eui2=AeEPw6p0Kvcj-1t0EfFbJ_GvmROADeRWuvWZE4AN5Fa69XIZdCcugVq9t5PSjT6kjoYH9R-WdlS-YTwUzlfpicUJ",
    " https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png?_nc_eui2=AeFfCFY31p1PlL1Egng_dKdpD7-9NrPNDkEPv702s80OQROUs40E8wF7TCfiry-pvhmxqdM1162g3N_k4zsBBCdq",
    " https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/X1wwBNSCk5F.png?_nc_eui2=AeHnFRaePkg9LPH-UZUpStt6vfRhIpdGbHK99GEil0ZscqYkmLA0PU9E0KaW9Csg11HDz6xGhlGwTB4rVL0y-dnx",
    "https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/NCc4ln3EAaS.png?_nc_eui2=AeH92XAuvj_HgLANbmou0ZeHvkgS0InGPLq-SBLQicY8usx-QK72BAORgnJqM8scQ1r0ouMuYO_tAcjmcpZLcJIk",
    "https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png?_nc_eui2=AeHVDkoyXc64e72bBPNmT7lv9As6vsZg84r0Czq-xmDzillpBbInyKwXxydUNJ3JY5Gs2Wbk6w2_qxt-Uz-JDd-i",
    "https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/E_ZpLgQOkZb.png?_nc_eui2=AeGmVxcwfM6ZobYLKV-QFwj64QHBhWgB37vhAcGFaAHfuwspllJW9sW3ehJUErnULPLUzEDoPW_ri22XhngE0KjE",
    "https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/Tvf-JvODx7o.png?_nc_eui2=AeEw0_0OQ8dCRfewMWs2cmzCFV6iKd6i-xgVXqIp3qL7GGBqZ8VjDrlSI0xDzfpGEJRkjqnAJmYyhwlBm5ceTrrj",
    "https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xH4w-lk44we.png?_nc_eui2=AeEAXxGX0f1XFOjTWe9PwYiZxcXEexUOKafFxcR7FQ4pp5k58W6uspJdCTZGxTEmFjhBnbnRmPk9vJP3Af7y0WyK",
    "https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/9LIH24rbn9J.png?_nc_eui2=AeFswigHmnsdwb_Y8-ACwnK8Nnk-z_y56zU2eT7P_LnrNRP1CTwdjsfYnx7FGnSAAhNP4o9_bNGXcv3dzM4J3uQ8",
    "https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/VaQGECnx1Us.png?_nc_eui2=AeGVjQ_OvsuQIDsJmddBBuaWkycvohEyW_qTJy-iETJb-iBJjExPuU3KOCGQ1yfG_qs50cLGoy_7D0fwpFXIblFI",
    "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/rEk7fp0z5AA.png?_nc_eui2=AeFhWt-2__9aCYrxY4CfyQBs-2pFgOiuyx37akWA6K7LHflKrBx104Tw8_hd3Hpv_FLUnhoPMQI9Y8lQKGIpjSN3",
    `${logoMess}`,
     "https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/-ZRs50L5kHA.png?_nc_eui2=AeHYoQPqgBj7gJk0g3L1_O88Lwix1Sv5VOUvCLHVK_lU5XEfpFCMKVic2ad3dQAxm9yk5x07pfnXcAKn3GoOEWAx",
     "https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/9iacGJP1ses.png?_nc_eui2=AeHH9OBCJSJjemi7MYKJ5GHNNipgPp3kjAg2KmA-neSMCEA8Dgc11keJQNiMcJi3iCE6EiiMlADsXlwoPPj-gpL7",
     "https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png?_nc_eui2=AeFvvX0awJ1HB_TinsX3MrWHOrbvO-r1cmA6tu876vVyYJBBzwcItSKgb1kjSGpiEGgjoG6xsODhK2yrCG7I2F-x",
     "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/2QQIoQlVGnh.png?_nc_eui2=AeF5WtypKp7Rg0XMGqzoURTystc3rB0XV7Sy1zesHRdXtC2NcKI2tZQSEb-yKPXkUv9BQLPsV6Sg5J11kQJd6XW0",
     "https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/tx2VFwUKc-K.png?_nc_eui2=AeGVHBptHtsxlCw5LggSOTJQql6KcToA1eWqXopxOgDV5b6S80jsXi91S8vf2q6OS4Af5k9opZn1dOI9wiA2UDO9",
     "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/tKwWVioirmj.png?_nc_eui2=AeGm8RbY3ulMH9gP7rFOO61lruCnBWwp8W6u4KcFbCnxbsfFh120YtwjXgwHZvuRxUUqiQzHKpBOFyMWDc1iPbbL",
     "https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/eVgQ0NIygAW.png?_nc_eui2=AeGS0en2U2LnLkskFXsz98JVenDeBEBBMht6cN4EQEEyG0LVL-lwPJVXsMe0KktInEXQRU9gO4KCspn95HgA_tSc",

];
export {
    listSidebar, imglistSidebar
}
