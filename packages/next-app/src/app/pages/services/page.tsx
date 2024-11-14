import React from 'react';
import { Navigation } from "@/components/common/navigation";
import { Services } from "@/components/services/services";
import {Footer} from "@/components/common/footer";
import landingPageData from "@/data/data.json";

const ServicesPage =()=>{

    return (
        <>
         <Navigation />
      <Services data={landingPageData.Services} />
      <Footer />
        </>
    )
}

export default ServicesPage;