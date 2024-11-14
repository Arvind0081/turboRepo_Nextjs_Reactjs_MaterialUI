import React from 'react';
import { Navigation } from "@/components/common/navigation";
import { Header } from "@/components/home/header";
import {Footer} from "@/components/common/footer";
import landingPageData from "@/data/data.json";

const Home =()=>{


    return (
        <>
         <Navigation />
      <Header data={landingPageData.Header} />
      <Footer />
        </>
    )
}

export default Home;