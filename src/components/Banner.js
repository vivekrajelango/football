import React from "react";
import LiveScore from "./LiveScore";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Banner=()=>{
    const { t } = useTranslation();
    return(
        <div>
            <div className="banner">
                <div className="content py-3">
                    <div className="container py-lg-3">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-xs-12 content-photo mt-lg-0 mt-5">
                        <LiveScore />
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