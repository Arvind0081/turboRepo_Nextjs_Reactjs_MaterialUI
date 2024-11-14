import React from 'react';
import { Navigation } from "@/components/common/navigation";
import { About } from "@/components/about/about";
import {Footer} from "@/components/common/footer";
import landingPageData from "@/data/data.json";

const AboutPage =()=>{


    return (
        <>
         <Navigation />
      <About data={landingPageData.About} />
      <Footer />
        </>
    )
}

export default AboutPage;