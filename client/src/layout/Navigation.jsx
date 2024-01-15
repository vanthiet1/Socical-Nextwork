import '../style/layouts/Navigation.scss';
import Search from '../components/navigation/SearchNav';
import MenuNav from '../components/navigation/MenuNav';
import PersernalNav from '../components/navigation/PersernalNav';
const Navigation = () => {
    return (
        <>
            <div className="container__navigation">
                <Search></Search>
                <MenuNav></MenuNav>
                <PersernalNav></PersernalNav>
            </div>
        </>
    );
};

export default Navigation;