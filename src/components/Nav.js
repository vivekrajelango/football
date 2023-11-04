import React, { useContext, useState } from "react";
import { Dropdown, Button } from 'react-bootstrap';
import {DataContext} from '../data/DataProvider';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";


const Nav = () => {
    const value = useContext(DataContext);
    const [navData] = value.metaValue[0];
    const navValue = navData?.nav;
    // const [show, setShow] = useState('collapse navbar-collapse ');
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const showToggle=()=>{
        setShow(!show);
        // setShow('collapse navbar-collapse show');
    }

    const changeLanguage = (languageCode) => {
        i18next.changeLanguage(languageCode);
      };
    
    var toggleMenu = show ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
    return (
        <>
            <section className="w3l-header">
                <nav className="navbar navbar-expand-lg navbar-light py-3">
                    <div className="container">
                        <Link className="navbar-brand" to='/'>
                            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Your logo" title="Your logo" style={{ height: 70 }} />
                        </Link>
                        <button onClick={showToggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={toggleMenu} id="navbarSupportedContent" style={{}}>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to='/home'>
                                        {t('home')}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/about'>
                                        {t('about')}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/services'>
                                        {t('services')}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/contact'>
                                        {t('contact')}
                                    </Link>
                                </li>
                            </ul>
                            {/* <Dropdown>
                                <Dropdown.Toggle as={Button} size="sm" variant="primary" id="language-dropdown">
                                    {i18next.language}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
                                    <Dropdown.Item onClick={() => changeLanguage('it')}>Italiano</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Nav;