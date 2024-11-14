import React from 'react';
import { Navigation } from "@/components/common/navigation";
import { Testimonials } from "@/components/testimonials/testimonials";
import {Footer} from "@/components/common/footer";
import landingPageData from "@/data/data.json";

const TestimonialsPage =()=>{

    return (
        <>
         <Navigation />
      <Testimonials data={landingPageData.Testimonials} />
      <Footer />
        </>
    )
}

export default TestimonialsPage;