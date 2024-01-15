import { useState, useEffect, useRef } from 'react';
import Logo from '../../public/image/logo.png';
import '../../style/components/navigation/SearchNav.scss';
import { Link } from 'react-router-dom';

const Search = () => {
    const [showInforSearch, setShowInforSearch] = useState(false);
    const inputRef = useRef(null);

    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setShowInforSearch(false);
        }
    };

    const handleShow = () => {
        setShowInforSearch(true);
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="search__input">
                <div className="logo__page">
                    <Link to={'/'}>
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="search__infor">
                    <label htmlFor="" className='search__content'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input
                            ref={inputRef}
                            onClick={handleShow}
                            type="text"
                            placeholder='Tìm kiếm trên Facebook'
                        />
                    </label>
                </div>
                {showInforSearch && (
                    <div className="serch__infomations">
                        <span>Không có tìm kiếm nào gần đây</span>
                    </div>
                )}
            </div>
        </>
    );
};

export default Search;
