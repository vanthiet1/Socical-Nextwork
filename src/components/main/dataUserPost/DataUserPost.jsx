import avatars from '../../../public/image/avatar.png';
import video from '../../../public/video/4166969340659133351 - Trim.mp4';
import video2 from '../../../public/video/json-server.mp4';
const allUserPost = [
{
    id:1,
    avatar:avatars,
    name:'User 1',
    timePost:'10 phút',
    captions:'JSON-SERVER Javascript',
    content:video2,

    // likes:`${0}`,
    comments:`${20}`,
    shares:`${10}`
},
{
    id:2,
    avatar:avatars,
    name:'User 2',
    timePost:'5 phút',
    captions:'Xui thì vô nồi',
    content: "https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/415038649_893577702660329_3773528141697896973_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeE-oyWql75Wf6PD0pa9xuWJrATIGIYRMF2sBMgYhhEwXcynsbFbCe74C9R4-PIBkRIdEUKcwwzOYvkvU47LaPfq&_nc_ohc=8bTcYpk8YgsAX_irXM2&_nc_ht=scontent-hkg1-1.xx&oh=00_AfDwTvmeKhccrk2GQKA9hrgDYtqaQJenLXLJKvoEP9p50A&oe=65975E46",
    likes:`${124}`,
    comments:`${200}`,
    shares:`${1}`
},
{
    id:3,
    avatar:avatars,
    name:'User 3',
    timePost:'20 phút',
    captions:'Chia sẽ kinh nghiệm lập trình frontend',
    content:'Học 24/25 mỗi ngày',
    likes:`${100}`,
    comments:`${20}`,
    shares:`${10}`
},
{
    id:4,
    avatar:avatars,
    name:'User 4',
    timePost:'1 phút',
    captions:'Dự án cá nhân của tôi Công nghệ ReactJS - Tailwind - API TMDB',
    content:video,
    likes:`${3}K`,
    comments:`${250}`,
    shares:`${100}`
}
]
export default allUserPost;