import React from 'react';
import Container from '../layouts/Container';
import Hero from '../layouts/components/Hero';
import Service from '../layouts/components/Service';
import Project from '../layouts/components/Project';
import HowWeWorking from '../layouts/components/HowWeWorking';
import WhatOurClientSay from '../layouts/components/WhatOurClientSay';
import OurTeam from '../layouts/components/OurTeam';
import Video from '../layouts/components/Video';
import LayoutFooter from '../layouts/LayoutFooter';


export default function Home() {
  return (
    <main className="scroll-snap vh">
      <Container size="xxl">
        <Hero />
      </Container>
      <Service />
      <Project />
      <HowWeWorking />
      <WhatOurClientSay />
      <OurTeam />
      <Video />
      <LayoutFooter />
    </main>
  );
}
