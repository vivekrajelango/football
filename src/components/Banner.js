import React from "react";
import LiveScore from "./LiveScore";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Banner=()=>{
    const { t } = useTranslation();
    return(
        <div>
            <div className="banner">
                <div className="content py-5">
                    <div className="container py-lg-4">
                    <div className="row align-items-center">
                        <div className="col-lg-4 content-left">
                        <h3 className="text-dark">{t('banner1')}</h3>
                        <p className="mt-3 mb-lg-5 mb-4 text-dark">{t('banner2')}</p>
                        <Link to='/#home/live'>
                            <span className="btn btn-primary btn-style">{t('getstarted')}</span>
                        </Link>
                        </div>
                        <div className="col-lg-8 col-xs-12 content-photo mt-lg-0 mt-5">
                        <LiveScore />
                        {/* <img src={process.env.PUBLIC_URL + '/main.jpg'} className="img-fluid" alt="main image" /> */}
                        </div>
                    </div>
                    <div className="clear"></div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Banner;