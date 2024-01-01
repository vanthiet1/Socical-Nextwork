import avatars from '../../../public/image/avatar.png';
import video from '../../../public/video/4166969340659133351 - Trim.mp4';
const allUserPost = [
{
    id:1,
    avatar:avatars,
    name:'User 1',
    timePost:'10 phút',
    captions:'Xin chào mọi người',
    content:'https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/415284354_705648591660763_1656715819251216636_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGAbyw1vFUaWSzilu7RQL1MKSRc5uu1O8kpJFzm67U7ySjOgvN7B8wrYUsUm2UIYRH0LbQMaT1KSbmZSkQRucEW&_nc_ohc=7bnDJ2enlCkAX9WJ8vu&_nc_ht=scontent-hkg4-1.xx&oh=00_AfB62pciBBXaJ9oMaCdthHE2q_VPdYEHZAzA-4CDgrsgGg&oe=65924C39',
    likes:`${3}`,
    comments:`${20}`,
    shares:`${10}`
},
{
    id:2,
    avatar:avatars,
    name:'User 2',
    timePost:'5 phút',
    captions:'Using "as const" in React custom hooks',
    content: "XIn chào",
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
    content:'https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/414895758_779449597542755_5476652339089105289_n.jpg?stp=cp6_dst-jpg_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGqawc0jVTH1EwZN5-OlWc5UVPp--5GN9tRU-n77kY326RLy_q-HPnZpyu6nHFXYA7s8AZ3oqZIwhRso2QxSIgO&_nc_ohc=Mt85rrLfNrQAX_DCyo9&_nc_ht=scontent-hkg1-2.xx&oh=00_AfDU9Z1l_tbvGf24GTSOAogvNTfugKWW18uakW9AIuRuCw&oe=6591E931',
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