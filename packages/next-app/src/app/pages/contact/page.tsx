import React from 'react';
import { Navigation } from "@/components/common/navigation";
import { Contact } from "@/components/contact/contact";
import {Footer} from "@/components/common/footer";
import landingPageData from "@/data/data.json";

const ContactPage =()=>{

    return (
        <>
         <Navigation />
      <Contact data={landingPageData.Contact} />
      <Footer />
        </>
    )
}

export default ContactPage;