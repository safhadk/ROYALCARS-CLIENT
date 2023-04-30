import React from "react";
import Header from "../../Components/clients/Header/Header";
import Banner from "../../Components/clients/Banner/Banner";
import Locations from "../../Components/clients/Locations/Locations";

function Home() {
    return (
        <div>
            <Header />
            <Banner/>
            <Locations/>
        </div>
    );
}

export default Home;
