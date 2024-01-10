import paths from "../config/path";
// 
import Home from '../pages/Home';
import Watch from "../pages/watch/Watch";
import Marketplace from "../pages/marketplace/Marketplace";
import Groups from "../pages/groups/Groups";
import Gaming from "../pages/gaming/Gaming";
import ProfileUser from "../pages/profile/ProfileUser";
const publicRoutes = [
    {
        path:paths.Home,
        component:Home,
        title:'Home',
    },
    {
        path:paths.Watch,
        component:Watch,
        title:'Watch',
    },
    {
        path:paths.Marketplace,
        component:Marketplace,
        title:'Marketplace',
    },
    {
        path:paths.Groups,
        component:Groups,
        title:'Groups',
    },
    {
        path:paths.Gaming,
        component:Gaming,
        title:'Gaming',
    },
    {
        path:paths.ProfileUser,
        component:ProfileUser,
        title:'ProfileUser',
    },
   
]
export default publicRoutes;
