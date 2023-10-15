import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

const Home=()=>{
    return(
        <div>
            <Nav />
            <Banner />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;