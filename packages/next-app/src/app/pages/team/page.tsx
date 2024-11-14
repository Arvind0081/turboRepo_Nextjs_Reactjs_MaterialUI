import React from 'react';
import { Navigation } from "@/components/common/navigation";
 import { Team } from "@/components/team/Team";
 import {Footer} from "@/components/common/footer";
import landingPageData from "@/data/data.json";

const TeamPage =()=>{

    return (
        <>
         <Navigation />
      <Team data={landingPageData.Team} />
      <Footer />
        </>
    )
}

export default TeamPage;