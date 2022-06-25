import React from 'react';
import {useParams} from 'react-router-dom';
import SnapScroll from '../SnapScroll';
import WeldBear from './weld_bear/WeldBear';

export default function Projects() {
  const {project} = useParams();
  console.log(project);

  return (
    <SnapScroll>
      <WeldBear />
    </SnapScroll>
  );
}
