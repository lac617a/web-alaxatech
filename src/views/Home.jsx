import React from 'react';
import Hero from '../layouts/components/Hero';
import Video from '../layouts/components/Video';
import Service from '../layouts/components/Service';
import Project from '../layouts/components/Project';
import OurTeam from '../layouts/components/OurTeam';
import HowWeWorking from '../layouts/components/HowWeWorking';
import WhatOurClientSay from '../layouts/components/WhatOurClientSay';
import SnapScroll from './SnapScroll';

export default function Home() {
  return (
    <SnapScroll>
      <Hero />
      <Service />
      <Project />
      <HowWeWorking />
      <WhatOurClientSay />
      <OurTeam />
      <Video />
    </SnapScroll>
  );
}
