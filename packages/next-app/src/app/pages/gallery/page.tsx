import React from 'react';
import { Navigation } from "@/components/common/navigation";
import { Gallery } from "@/components/gallery/gallery";
import {Footer} from "@/components/common/footer";
import landingPageData from "@/data/data.json";

const GalleryPage =()=>{

    return (
        <>
         <Navigation />
      <Gallery data={landingPageData.Gallery} />
      <Footer />
        </>
    )
}

export default GalleryPage;