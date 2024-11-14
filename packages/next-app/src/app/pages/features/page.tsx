import React from 'react';
import { Navigation } from "@/components/common/navigation";
import { Features } from "@/components/features/features";
import {Footer} from "@/components/common/footer";
import landingPageData from "@/data/data.json";

const Feature =()=>{


    return (
        <>
         <Navigation />
      <Features data={landingPageData.Features} />
      <Footer />
        </>
    )
}

export default Feature;