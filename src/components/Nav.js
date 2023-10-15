import React, { useContext, useState } from "react";
import {DataContext} from '../data/DataProvider';

const Nav = () => {
    const value = useContext(DataContext);
    const [navData] = value.metaValue[0];
    const navValue = navData?.nav;
    // const [show, setShow] = useState('collapse navbar-collapse ');
    const [show, setShow] = useState(false);
    const showToggle=()=>{
        setShow(!show);
        // setShow('collapse navbar-collapse show');
    }
    
    var toggleMenu = show ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
    return (
        <>
            <section className="w3l-header">
                <nav className="navbar navbar-expand-lg navbar-light py-3">
                    <div className="container">
                        <a href="#home" className="navbar-brand">
                            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Your logo" title="Your logo" style={{ height: 70 }} />
                        </a>
                        <button onClick={showToggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={toggleMenu} id="navbarSupportedContent" style={{}}>
                            <ul className="navbar-nav ml-auto">
                                {navValue?.map((item,index)=>(
                                    <li key={index} className="nav-item active">
                                        <a className="nav-link" href={item.href}>{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Nav;