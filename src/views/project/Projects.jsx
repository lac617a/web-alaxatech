import React from 'react';
// import { useParams } from 'react-router-dom';
import SnapScroll from '../../layouts/SnapScroll';
import {
  WeldBearHero,
  WeldBearBox2,
  WeldBearBox3,
  WeldBearBox4,
  WeldBearBox5,
  WeldBearBox6,
} from './weld_bear/WeldBear';

const WeldBearOnly = () => (
  <>
    <WeldBearHero />
    <WeldBearBox2 />
    <WeldBearBox3 />
    <WeldBearBox4 />
    <WeldBearBox5 />
    <WeldBearBox6 />
  </>
);

export default function Projects() {
  // const { project } = useParams();

  return (
    <SnapScroll>
      <WeldBearOnly />
    </SnapScroll>
  );
}
